import {
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
// ====== main ====== //
export default function ListObject(props) {
    const handleListItemClick = (id) => {
        props.onEdit && props.onEdit(id);
    };
    const handleText = (item) => {
        return props.displayText ? props.displayText(item) : item.id;
    };
    return (
        <List>
            {props.data.map((item) => (
                <div key={+item.id}>
                    <ListItem
                        button
                        onClick={() => handleListItemClick(item.id)}
                    >
                        <ListItemText>{handleText(item)}</ListItemText>
                        <ListItemSecondaryAction>
                            {props.canDelete && (
                                <IconButton
                                    edge="end"
                                    onClick={() => props.onDelete(item.id)}
                                >
                                    <Delete color="secondary" />
                                </IconButton>
                            )}
                        </ListItemSecondaryAction>
                    </ListItem>
                </div>
            ))}
        </List>
    );
}
