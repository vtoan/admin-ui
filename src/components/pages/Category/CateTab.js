import PanelData from "../../layout/PanelData";
import serCommon from "../../../services/serCommon";
import { useTabPanelItem } from "../../hooks/TabPanelItem";
import TextField from "@material-ui/core/TextField";
import React from "react";
// ====== main ====== //
const validates = ["name"];
export default function CateTab() {
    const [name, setName] = React.useState("");
    const [seoTitle, setSeoTitle] = React.useState("");
    const [seoDescription, setSeoDescription] = React.useState("");
    const [seoImage, setSeoImage] = React.useState("");
    const tabData = useTabPanelItem(
        serCommon("category", "nhóm"),
        { name: "", seoTitle: "", setSeoDescription: "", seoImage: "" },
        validates,
        false
    );
    //code
    const changes = {
        name: setName,
        seoTitle: setSeoTitle,
        seoDescription: setSeoDescription,
        seoImage: setSeoImage,
    };
    React.useEffect(() => {
        if (tabData.form.item) {
            let obj = tabData.form.item;
            setName(obj.name);
            setSeoTitle(obj.seoTitle);
            setSeoDescription(obj.seoDescription);
            setSeoImage(obj.seoImage);
        }
    }, [tabData.form.item]);
    const triggerChange = (propChange) => {
        tabData.form.onChange(
            Object.assign(
                {
                    name: name,
                    seoTitle: seoTitle,
                    seoDescription: seoDescription,
                    seoImage: seoImage,
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
                    label="Tên nhóm"
                    required
                />
            </p>
            <p>
                <TextField
                    value={seoTitle}
                    onChange={(e) => handleChangeInput(e, "seoTitle")}
                    fullWidth
                    label="Seo Title"
                />
            </p>
            <p>
                <TextField
                    value={seoDescription}
                    onChange={(e) => handleChangeInput(e, "seoDescription")}
                    fullWidth
                    label="Seo Description"
                />
            </p>
        </PanelData>
    );
}
