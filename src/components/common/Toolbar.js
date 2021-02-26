import { Divider } from "@material-ui/core";

export default function ToolBar(props) {
    return (
        <div>
            <div style={{ height: 50 }}>{props.children}</div>
            <Divider />
        </div>
    );
}
