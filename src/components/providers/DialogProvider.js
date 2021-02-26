import React from 'react';
import DialogConfirm from '../common/DialogConfirm';
// ====== main ====== //
const DialogContext = React.createContext();
let onCloseCallback = null;
let typeDialog = "delete";
export function useDialog(){
    return React.useContext(DialogContext);
}
export function DialogProvider(props) {
    const [open, setOpen] = React.useState(false);
    const handleDialogClose = (val) => {
        onCloseCallback && onCloseCallback(val);
        setOpen(false);
    };
    const config = {
        close: () => handleDialogClose(),
        open: (type,callback)=>{
            typeDialog= type ?? "save";
            onCloseCallback = callback;
            setOpen(true);
        } ,
    };
    return (
        <DialogContext.Provider value={config}>
            {props.children}
            <DialogConfirm
                open={open}
                type={typeDialog}
                onClose={handleDialogClose}
            ></DialogConfirm>
        </DialogContext.Provider>
    );
};
