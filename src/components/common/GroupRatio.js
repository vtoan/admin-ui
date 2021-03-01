import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";

import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function GroupRatio(props) {
    const { selects = [], defaultValue } = props;
    const [selectedValue, setSelectedValue] = React.useState(defaultValue);
    const handleChange = (event) => {
        let val = event.target.value;
        setSelectedValue(Number(val));
        props.onChange(val);
    };
    return (
        <div style={props.style}>
            <RadioGroup
                defaultValue={defaultValue}
                value={selectedValue}
                style={{ flexDirection: "row" }}
                onChange={handleChange}
            >
                {selects.map((item) => (
                    <FormControlLabel
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                    />
                ))}
            </RadioGroup>
        </div>
    );
}
