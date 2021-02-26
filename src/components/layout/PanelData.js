import ListObject from "../common/ListObject";
import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDialog } from "../providers/DialogProvider";
// ====== main ====== //
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    listHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    listTitle: {
        marginBottom: 0,
    },
}));
// {
//     data: [],
//     getText: (item) => string,
//     onCreate: () => void
//     onDelete: id => void,
//     onSubmit: id => void
//     onDisplayItem: id=> void,
//     onClearData: ()=> void,
// };
let itemId = -1;
let action = null;
export default function PanelData(props) {
    const classes = useStyles();
    const dialog = useDialog();
    const data = props.data;
    const itemDisplay = props.displayItem;
    const handleDelete = (id) => {
        itemId = id;
        action = props.onDelete;
        dialog.open("delete", handleDialogClose);
    };
    const handleSubmit = () => {
        action = props.onSubmit;
        dialog.open("save", handleDialogClose);
    };
    const handleDialogClose = (act) => {
        act && action && action(itemId);
        action = null;
        itemId = -1;
    };
    const handleEdit = (id) => {
        itemId = id;
        props.onDisplayItem && props.onDisplayItem(id);
    };
    const handleCreate = () => {
        itemId = -1;
        props.onCreate && props.onCreate();
    };
    const handleClearData = () => props.onClearData && props.onClearData();

    return (
        <Grid container justify="space-around">
            <Grid item xs={5}>
                <p className={classes.listTitle}>THÔNG TIN</p>
                {itemDisplay ? (
                    <form>
                        {props.children}
                        <div
                            className={classes.root}
                            style={{ paddingTop: 24 }}
                        >
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleSubmit}
                            >
                                Lưu
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleClearData}
                            >
                                Hủy
                            </Button>
                        </div>
                    </form>
                ) : (
                    <p
                        className="text-note"
                        style={{ textAlign: "center", paddingTop: 48 }}
                    >
                        Chọn mục hoặc tạo mới
                    </p>
                )}
            </Grid>
            <Grid item xs={5}>
                <div className={classes.listHeader}>
                    <p className={classes.listTitle}>DANH SÁCH HIỆN CÓ</p>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleCreate}
                    >
                        Tạo mới
                    </Button>
                </div>
                {data?.length ? (
                    <ListObject
                        canDelete={props.canDelete ?? true}
                        data={data}
                        displayText={props.displayText}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ) : (
                    <p
                        className="text-note"
                        style={{ textAlign: "center", paddingTop: 48 }}
                    >
                        Danh sách trống
                    </p>
                )}
            </Grid>
        </Grid>
    );
}
