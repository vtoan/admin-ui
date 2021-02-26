import axios from "axios";
import { host } from "../config";
export default function serCommon(serName, alisName="") {
    return {
        getList: () =>
            axios({
                url: host + "/" + serName,
                method: "get",
                actionName: "Lấy danh sách "+alisName,
            }),
        get: (id) =>
            axios({
                url: host + "/" + serName + "/" + id,
                method: "get",
            }),
        edit: (id, object) => {
            console.log("edit " + serName);
            console.log(object);
            return axios({
                url: host + "/" + serName + "/" + id,
                method: "post",
                data: object,
                actionName: "chỉnh sửa "+alisName,
            });
        },
        add: (object) => {
            console.log("add " + serName);
            console.log(object);
            return axios({
                url: host + "/" + serName,
                method: "post",
                data: object,
                actionName: "tạo "+alisName,
            });
        },
        delete: (id) => {
            console.log("delete " + serName);
            console.log(id);
            return axios({
                url: host + "/" + serName,
                method: "delete",
                data: id,
                actionName: "xóa "+alisName,
            });
        },
    };
}
