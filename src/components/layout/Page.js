import Header from "../common/Header";
import React from "react";
export default function Page(props) {
    return (
        <div>
            <Header title={props.title} />
            <div className="main-content">
                {props.toolbar && (
                    <div style={{ paddingTop: 24 }}>{props.toolbar}</div>
                )}

                <div style={{ paddingTop: 24 }}>{props.children}</div>
            </div>
        </div>
    );
}
