import Page from "./Page";
import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// ====== main ====== //
export default function PageTabs(props) {
    const [value, setValue] = React.useState(0);
    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
    return (
        <Page title="Phân loại">
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                {props.tabPanel.map((item, index) => (
                    <Tab key={+index} label={item.label} tabIndex={index} />
                ))}
            </Tabs>
            <div style={{ padding: "24px 0" }}>
                {props.tabPanel[value].comp}
            </div>
        </Page>
    );
}
