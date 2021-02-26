import { Grid } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { DialogProvider } from "../providers/DialogProvider";
// ====== main ====== //
export default function MainLayout(props) {
    return (
        <SnackbarProvider maxSnack={3}>
            <DialogProvider>
                <Grid container>
                    <Grid item xs={2}>
                        {props.nav}
                    </Grid> 
                    <Grid item xs={10} style={{ backgroundColor: "#f0f0f0" }}>
                        {props.main}
                    </Grid>
                </Grid>
            </DialogProvider>
        </SnackbarProvider>
    );
}
