import Header from "../common/Header";
import React from "react";

export default function Page(props) {
    return (
        <div>
            <Header title={props.title} />
            <div className="main-content">{props.children}</div>
        </div>
    );
}
