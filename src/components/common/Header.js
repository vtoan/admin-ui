import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

export default function Header(props) {
    return (
        <AppBar position="sticky" style={{ backgroundColor: "#262626" }}>
            <Toolbar>
                <Typography variant="h6">{props.title}</Typography>
            </Toolbar>
        </AppBar>
    );
}
