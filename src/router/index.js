import VueRouter from "vue-router";
import LayOut from "../ViveWs/layout/layout";
import welcome from "@/ViveWs/main"
import ConTa from "@/ViveWs/main/ConTa";
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
            }

        }]
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