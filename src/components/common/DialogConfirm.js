import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// ====== main ====== //
const contents = {
    delete: {
        title: "Xác nhận xóa",
        msg: "Mục nãy sẽ bị xóa vĩnh viễn, bạn đồng ý với điều này ?",
    },
    save: {
        title: "Xác nhận lưu thay đổi",
        msg: "Mọi thay đổi sẽ được cập nhật, bạn đồng ý với điều này ?",
    },
};
export default function DialogConfirm(props) {
    const text = contents[props.type];
    const handleClose = () => {
        props.onClose && props.onClose(false);
    };
    const handleConfirmed = () => {
        props.onClose && props.onClose(true);
    };
    return (
        <Dialog
            open={props.open ?? false}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{text.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {text.msg}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Hủy
                </Button>
                <Button onClick={handleConfirmed} color="primary">
                    Đồng ý
                </Button>
            </DialogActions>
        </Dialog>
    );
}
