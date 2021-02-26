import PanelData from "../../layout/PanelData";
import serCommon from "../../../services/serCommon";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useTabPanelItem } from "../../hooks/TabPanelItem";
import { useFormTab } from "../../hooks/FromTab";

// ====== main ====== //
const validates = ["name"];
export default function TransportTab() {
    const [name, setName] = React.useState("");
    const changes = new Map();
    changes.set("name", [name, setName]);
    //
    const tabData = useTabPanelItem(
        serCommon("transport", "đơn vị vận chuyển"),
        { name: "" },
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
                    label="Tên đơn vị"
                    required
                />
            </p>
        </PanelData>
    );
}
