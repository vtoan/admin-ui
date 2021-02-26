import { Grid } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import Page from "../../layout/Page";
import React from "react";
import moment from "moment";
// ====== main ====== //
const lables = ["Đơn hủy", "Đơn nhận", "Đơn đã xác nhận"];
const labelColors = ["#f5222d", "#52c41a", "#1890ff"];
let dataCancel = [];
let dataReceive = [];
let dataConfrim = [];
let startDate = moment();
let endDate = moment().subtract(30, "days");
//
function filterOrder(raw) {
    if (!raw) return;
    raw.forEach((item) => {
        switch (item.status) {
            case -1:
                dataCancel.push(item);
                break;
            case 1:
                dataReceive.push(item);
                break;
            case 2:
                dataReceive.push(item);
                break;
            default:
                break;
        }
    });
}
function calcCharData() {}

export default function Dashboard(props) {
    const [loaded, setLoaded] = React.useState(false);
    const [orderData, setData] = React.useState([]);
    React.useEffect(() => {
        let raw = null;
        setTimeout(() => {
            filterOrder(raw);
            calcCharData();
            setLoaded(true);
        }, 3000);
    }, []);
    const chart = {
        labels: ["January", "February", "March", "April"],
        datasets: [
            {
                data: [],
                label: lables[0],
                borderColor:labelColors[0],
                fill:false
            },
            {
                data: [],
                label: lables[1],
                borderColor:labelColors[1],
                fill:false
            },
            {
                data: [],
                label: lables[2],
                borderColor:labelColors[2],
                fill:false
            },
        ],
    };
    return (
        <Page title="Dashboard" loading={loaded}>
            <p className="text-note">
                * Dữ liệu tháng từ {endDate.format("DD/MM/yyyy")} đến{" "}
                {startDate.format("DD/MM/yyyy")}{" "}
            </p>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <div className="d-flex flex-col">
                        <table className="overview-item">
                            <tr style={{ color: labelColors[1] }}>
                                <td> Đơn nhận </td>
                                <td> {dataReceive.length} </td>
                            </tr>
                            <tr style={{ color: labelColors[2] }}>
                                <td> Đơn đã xác nhận </td>
                                <td> {dataConfrim.length} </td>
                            </tr>
                            <tr style={{ color: labelColors[0] }}>
                                <td> Đơn hủy </td>
                                <td> {dataCancel.length} </td>
                            </tr>
                        </table>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <Line height={400} width={1082} data={chart}></Line>
                </Grid>
            </Grid>
        </Page>
    );
}
