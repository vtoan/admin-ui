import PanelData from "../../layout/PanelData";
import serCommon from "../../../services/serCommon";
import { useTabPanelItem } from "../../hooks/TabPanelItem";
import TextField from "@material-ui/core/TextField";
import React from "react";
// ====== main ====== //
const validates = ["name"];
export default function WireTab() {
    const [name, setName] = React.useState("");
    const tabData = useTabPanelItem(
        serCommon("wire", "loại dây"),
        { name: "" },
        validates
    );
    //code
    const changes = {
        name: setName,
    };
    React.useEffect(() => {
        if (tabData.form.item) {
            let obj = tabData.form.item;
            setName(obj.name);
        }
    }, [tabData.form.item]);
    const triggerChange = (propChange) => {
        tabData.form.onChange(
            Object.assign(
                {
                    name: name,
                },
                propChange
            )
        );
    };
    //
    const handleChangeInput = (event, propName) => {
        let val = event.target.value;
        let obj = {};
        obj[propName.toString()] = val;
        triggerChange(obj);
        changes[propName](val);
    };
    return (
        <PanelData {...tabData.panel} displayText={(item) => item.name}>
            <p>
                <TextField
                    value={name}
                    onChange={(e) => handleChangeInput(e, "name")}
                    error={!name}
                    fullWidth
                    label="Tên loại dây"
                    required
                />
            </p>
        </PanelData>
    );
}
