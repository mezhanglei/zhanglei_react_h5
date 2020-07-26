// tab栏高阶组件
import TabNav from "@/components/tabnav/index";
// 登录拦截高阶组件
import LoginComponent from "@/components/login/index";

const Cart = React.lazy(() => import(/* webpackChunkName: "cart" */ '@/pages/index/cart/index.js'));

export const CartRoutes = [
    {
        path: "/cart",
        component: TabNav(Cart)
    }
];