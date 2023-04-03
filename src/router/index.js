import VueRouter from "vue-router";
import LayOut from "../ViveWs/layout/layout";
import welcome from "@/ViveWs/main"
import ConTa from "@/ViveWs/main/ConTa";
import sub from "@/ViveWs/layout/component/sub";
import product from "@/ViveWs/layout/component/product";
// import HeaDer from "../components/HeaDer";
// import NavigationBar from "../components/NavigationBar";

const router = new VueRouter({

    routes: [{
        path: "/",
        component: LayOut,
        redirect: "/welcome",
        children: [{ path: "/welcome", component: welcome }, {
                path: '/conta',
                component: ConTa,
                props($route) {
                    return {
                        id: $route.query.id,
                        id2: $route.query.id2,
                    }
                },
            }, {
                path: '/sub',
                component: sub,
                props($route) {
                    return {
                        id: $route.query.id,
                    }
                }
            },
            {
                path: '/product',
                component: product,
                props($route) {
                    return {
                        id: $route.query.id,
                    }
                }
            }
        ]
    }]

    // {
    //     path: "/main",
    //     component: layout,
    //     redirect: "/welcome",
    //     children: [
    //         { path: "/welcome", component: welcome },
    //         { path: "/users", component: user },
    //         { path: "/roles", component: roles },
    //         { path: "/rights", component: qlist },
    //         { path: "/goods", component: goods },
    //         { path: "/categories", component: categories },
    //     ]
    // },



});
export default router;