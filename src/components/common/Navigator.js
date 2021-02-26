import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
export default function Navigator({ navigators }) {
    const history = useHistory();
    const handlerNav = (link) => history.push(link);
    return (
        <>
            <p className="pd-layout"> ADMIN UI </p>
            <Divider />
            <List component="nav">
                {navigators.map((item, index) => (
                    <ListItem
                        style={{marginBottom: 12}}
                        button
                        key={+index}
                        onClick={() => handlerNav(item.link)}
                    >
                        <ListItemIcon children={item.icon} />
                        <ListItemText primary={item.title} />
                    </ListItem>
                ))}
            </List>
        </>
    );
}
