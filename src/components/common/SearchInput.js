import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
export default function SearchInput(props) {
    const {onChange} = props
    return (
        <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                <TextField
                    label="Mã đơn hàng"
                    onChange={(e) => onChange && onChange(e)}
                />
            </Grid>
            <Grid item>
                <Button variant="outlined">Tìm</Button>
            </Grid>
        </Grid>
    );
}
