import React from "react";
export function useFormTab(changes, tabData) {
    const triggerChange = (propChange) => {
        tabData.form.onChange(Object.assign(tabData.form.item, propChange));
    };
    const handleChangeInput = (event, propName, valueElm) => {
        let val = valueElm ?? event.target.value;
        let obj = {};
        obj[propName.toString()] = val;
        triggerChange(obj);
        let target = changes.get(propName);
        target[1](val);
    };
    React.useEffect(() => {
        if (tabData.form.item) {
            let obj = tabData.form.item;
            if (!obj) return;
            let objProp = Object.entries(obj);
            objProp.forEach((prop) => changes.get(prop[0])?.[1](prop[1]));
        }
    }, [tabData.form.item, changes]);
    return {
        handleInput: handleChangeInput,
    };
}
