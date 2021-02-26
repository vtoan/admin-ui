import React from "react";
import PageTabs from "../../layout/PageTabs";
import FeeTab from "./FeeTab";
import TransportTab from './TransportTab';
export default function Sell (props) {
    return <PageTabs
    title="Bán hàng"
    tabPanel={[
        {
            label: "Phí",
            comp: <FeeTab />,
        },
        {
            label: "Đơn vị vận chuyển",
            comp: <TransportTab/>,
        },
    ]}
/> ;
}