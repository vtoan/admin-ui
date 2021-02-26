import React from "react";
import { useMessage } from "../common/MsgSnackbar";
// ====== main ====== //
export function useTabPanelItem(
    services,
    dataDefault,
    validates,
    canDelete = true
) {
    const message = useMessage();
    const [data, setData] = React.useState([]);
    const [itemEdit, setEdit] = React.useState(null);
    //define
    const validateData = (data) => {
        let flag =true;
        validates.forEach((vali) => {
            if (!data[vali]){
                flag =false;
                return;
            }
        });
        return flag;
    };
    const setDefault = () => setEdit(dataDefault);
    const handleChangeForm = (values) => setEdit(values);
    const handleDisplayItem = (idSelected) => {
        let item = data.find((item) => item.id === idSelected);
        if (item) setEdit(item);
    };
    const handleClearData = () => setEdit(null);
    const handleCreate = () => setDefault();
    //event
    const deleteOnClient = (array, idDelete) => {
        if (itemEdit && itemEdit.id === idDelete) setEdit(null);
        return array.filter((item) => item.id !== idDelete);
    };

    const editOnClient = (array, idEdit, object) => {
        array.map((item) => (item.id !== idEdit ? item : object));
    };
    const handleSubmit = (id) => {
        console.log(itemEdit);
        if (!validateData(itemEdit)) {
            message.error("vui lòng nhập đầy đủ các trường yêu cầu");
            return;
        }
        id > 0 ? reqEdit(id, itemEdit) : reqCreate(itemEdit);
    };
    React.useEffect(() => {
        services && setData(services.getList());
        // config.services
        //     .getList()
        //     .then((resp) => setData(resp))
        //     .catch((err) => message.error(err));
    }, []);
    //request
    const reqDelete = (id) => {
        services &&
            services
                .delete(id)
                .then(() => setData(deleteOnClient(data, id)))
                .catch((err) => message.error(err));
    };
    const reqCreate = (object) =>
        services &&
        services
            .add(object)
            .then((resp) => setData(data.push(resp)))
            .catch((err) => message.error(err));
    const reqEdit = (id, object) => {
        services &&
            services
                .edit(id, object)
                .then((resp) => setData(editOnClient(data, id, resp)))
                .catch((err) => message.error(err));
    };

    return {
        panel: {
            data: data,
            canDelete: canDelete,
            displayItem: itemEdit !== null,
            onCreate: handleCreate,
            onDelete: reqDelete,
            onSubmit: handleSubmit,
            onDisplayItem: handleDisplayItem,
            onClearData: handleClearData,
        },
        form: {
            item: itemEdit,
            onChange: handleChangeForm,
        },
    };
}
