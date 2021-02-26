import PanelData from "../../layout/PanelData";
import serCommon from "../../../services/serCommon";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useTabPanelItem } from "../../hooks/TabPanelItem";
import { useFormTab } from "../../hooks/FromTab";
import NumberField from "../../common/NumberField";
// ====== main ====== //
const validates = ["name", "cost"];
export default function FeeTab() {
    const [name, setName] = React.useState("");
    const [cost, setCost] = React.useState(0);
    const changes = new Map();
    changes.set("name", [name, setName]);
    changes.set("cost", [cost, setCost]);
    const tabData = useTabPanelItem(
        serCommon("fee", "phí"),
        { name: "", cost: "" },
        validates
    );
    const formTab = useFormTab(changes, tabData);
    //code
    return (
        <PanelData {...tabData.panel} displayText={(item) => item.name}>
            <p>
                <TextField
                    value={name}
                    onChange={(e) => formTab.handleInput(e, "name")}
                    error={!name}
                    fullWidth
                    label="Tên loại phí"
                    required
                />
            </p>
            <p>
                <NumberField
                    onChange={(e, value) =>
                        formTab.handleInput(e, "cost", value)
                    }
                    error={!cost}
                    label="Mức phí"
                />
            </p>
        </PanelData>
    );
}
