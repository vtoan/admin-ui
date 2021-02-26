import React from "react";
import PageTabs from "../../layout/PageTabs";
import CateTab from "./CateTab";
import BandTab from "./BandTab";
import WireTab from "./WireTab";
// ====== main ====== //
export default function Category(props) {
    return (
        <PageTabs
            title="Phân loại"
            tabPanel={[
                {
                    label: "Nhóm",
                    comp: <CateTab />,
                },
                {
                    label: "Thương hiệu",
                    comp: <BandTab/>,
                },
                {
                    label: "Loại dây",
                    comp: <WireTab/>,
                },
            ]}
        />
    );
}
