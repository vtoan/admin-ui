import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import DataTable from "../../common/DataTable";
import Page from "../../layout/Page";
import DateRange from "../../common/DateRange";
import GroupRatio from "../../common/GroupRatio";
import SearchInput from "../../common/SearchInput";
import Grid from "@material-ui/core/Grid";

// ====== main ====== //
function createData(id, name, calories, fat, carbs, protein) {
    return { id, name, calories, fat, carbs, protein };
}
const selects = [
    {
        label: "Tất cả",
        value: 0,
    },
    {
        label: "chưa xác nhận",
        value: 1,
    },
    {
        label: "Đã xác nhận",
        value: 2,
    },
    {
        label: "Hủy",
        value: 3,
    },
];
export default function Ordeasdr() {
    const data = [
        createData(1, "Cupcake", 305, 3.7, 67, 4.3),
        createData(2, "Donut", 452, 25.0, 51, 4.9),
        createData(3, "Eclair", 262, 16.0, 24, 6.0),
        createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
        createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
        createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
        createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
        createData(9, "KitKat", 518, 26.0, 65, 7.0),
    ];
    const headTables = [
        {
            id: "id",
            numeric: false,
            sort: true,
            label: "Status",
        },
        {
            id: "name",
            numeric: false,
            sort: false,
            label: "Dessert (100g serving)",
        },
        { id: "calories", numeric: true, sort: false, label: "Calories" },
        { id: "fat", numeric: true, sort: false, label: "Fat (g)" },
        { id: "carbs", numeric: true, sort: false, label: "Carbs (g)" },
        {
            id: "protein",
            numeric: true,
            sort: false,
            label: "Protein (g)",
        },
    ];
    const bodyTables = headTables.slice(1);
    const handleClick = (id, type) => {
        console.log(type ?? "click");
        console.log(id);
    };
    const handleChangeStatus = (val) => {
        console.log(val);
    };
    const handleChangeDate = (val) => {
        console.log(`start ${val[0]} end ${val[1]}`);
    };
    const template = (row, props) => (
        <>
            <TableCell padding="checkbox">
                <Checkbox
                    checked={row.status}
                    onChange={() => props.onClick(row.id, "status")}
                />
            </TableCell>
            {bodyTables.map((item) => (
                <TableCell
                    onClick={() => props.onClick(row.name, "click")}
                    align={item.numeric ? "right" : "left"}
                >
                    {row[item.id]}
                </TableCell>
            ))}
        </>
    );

    return (
        <Page
            title="Danh sách đơn hàng"
            toolbar={
                <Grid container justify="space-between">
                    <Grid item>
                        <SearchInput />
                    </Grid>
                    <Grid item>
                        <DateRange onChange={handleChangeDate} />
                    </Grid>
                </Grid>
            }
        >
            <GroupRatio
                style={{ marginBottom: 24, textAlign: "center" }}
                selects={selects}
                defaultValue={0}
                onChange={handleChangeStatus}
            />
            <DataTable
                displays={headTables}
                dataSource={data}
                onClick={handleClick}
                template={template}
            />
        </Page>
    );
}
