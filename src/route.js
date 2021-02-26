import Category from './components/pages/Category/Category';
import Dashboard from "./components/pages/Dashboard/Dashboard";
import NotFound from "./components/pages/Error/NotFound";
import Product from "./components/pages/Product/Product";
import Order from './components/pages/Order/Order';
import Promotion from './components/pages/Promotion/Promotion';
import Sell from './components/pages/Sell/Sell';
import Store from './components/pages/Store/Store';
import Images from './components/pages/Images/Images';
// ====== array ====== //
const routes = [
    {
        path: "/categories",
        component: Category,
    },
    {
        path: "/products",
        component: Product,
    },
    {
        path: "/orders",
        component: Order,
    },
    {
        path: "/promotions",
        component: Promotion ,
    },
    {
        path: "/sell",
        component: Sell,
    },
    {
        path: "/store",
        component: Store,
    },
    {
        path: "/images",
        component: Images,
    },
    {
        path: "/",
        component: Dashboard,
        exact: true,
    },
    {
        path: "*",
        component: NotFound,
    },
];
export default routes;
