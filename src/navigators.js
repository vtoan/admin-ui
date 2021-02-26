import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
// ====== nav ====== //
const navigators = [
    {
        title: "Tổng quan",
        icon: <InsertChartOutlinedIcon />,
        link: "/",
    },
    {
        title: "Đơn hàng",
        icon: <EventNoteOutlinedIcon />,
        link: "/orders",
    },
    {
        title: "Sản phẩm",
        icon: <WatchOutlinedIcon />,
        link: "/products",
    },
    {
        title: "Phân loại",
        icon: <CategoryOutlinedIcon />,
        link: "/categories",
    },

    {
        title: "Khuyến mãi",
        icon: <ShowChartOutlinedIcon />,
        link: "/promotions",
    },
    {
        title: "Bán hàng",
        icon: <LocalGroceryStoreOutlinedIcon />,
        link: "/sell",
    },
    {
        title: "Hình ảnh",
        icon: <PanoramaOutlinedIcon />,
        link: "/images",
    },
    {
        title: "Cửa hàng",
        icon: <StorefrontOutlinedIcon />,
        link: "/store",
    },
];
export default navigators;
