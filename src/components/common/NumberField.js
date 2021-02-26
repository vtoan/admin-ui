import TextField from "@material-ui/core/TextField";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function NumberField(props) {
    const checkCost = (value) => (value % 1 === 0 ? "currency" : "percent");
    const [val, setVal] = React.useState(0);
    const [suffix, setSuffix] = React.useState("");
    const handleChangeSubffix = (e) => {
        setSuffix(e.target.value);
        setVal("");
        props.onChange && props.onChange(e,0);
    };
    const handleChange = (e) => {
        let val = e.target.value;
        let result = val;
        if (suffix === "percent") {
            if (val < 100) result = result / 100;
            else return;
        }
        props.onChange && props.onChange(e, result);
        setVal(val);
    };
    React.useEffect(() => {
        let suffix = checkCost(val);
        setSuffix(suffix);
        suffix === "percent" ? setVal(val * 100) : setVal(val);
    }, []);
    return (
        <>
            <p>
                <TextField
                    type="number"
                    value={val}
                    onChange={handleChange}
                    error={!val}
                    fullWidth
                    label={props.label}
                    required
                />
            </p>
            <p>
                <RadioGroup value={suffix} onChange={handleChangeSubffix} row>
                    <FormControlLabel
                        value="currency"
                        control={<Radio />}
                        label="VND"
                    />
                    <FormControlLabel
                        value="percent"
                        control={<Radio />}
                        label="%"
                    />
                </RadioGroup>
            </p>
        </>
    );
}
