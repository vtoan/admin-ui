import TextField from "@material-ui/core/TextField";
import React from "react";
import moment from "moment";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// ====== main ====== //
const dateFormat = "MM/DD/YYYY";
const dateClient = "YYYY-MM-DD";
export default function DateRange(props) {
    const {
        start = "2020-02-02",
        end = "2020-01-01",
        onChange,
        onSubmit,
    } = props;
    const startDate = React.useRef();
    const endDate = React.useRef();
    //
    const getDate = () => {
        let start = startDate.current.value;
        let valStart = moment(start).format(dateFormat);
        let end = endDate.current.value;
        let valEnd = moment(end).format(dateFormat);
        return [valStart, valEnd];
    };
    const handleChange = () => onChange && onChange(getDate());
    const handleUpdate = () => onSubmit && onSubmit(getDate());
    return (
        <Grid container alignItems="flex-end">
            <Grid item className="d-flex" style={{marginRight:24}}>
                <TextField
                    inputRef={startDate}
                    label="Ngày bắt đầu"
                    type="date"
                    defaultValue={moment(start).format(dateClient)}
                    style={{ marginRight: 24 }}
                    onChange={handleChange}
                ></TextField>
                <TextField
                    inputRef={endDate}
                    label="Ngày kết thúc"
                    type="date"
                    defaultValue={moment(end).format(dateClient)}
                    onChange={handleChange}
                ></TextField>
            </Grid>
            <Grid item >
                <Button onClick={handleUpdate} variant="outlined" color="primary">
                    Cập nhật
                </Button>
            </Grid>
        </Grid>
    );
}
