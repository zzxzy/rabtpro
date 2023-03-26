import VueRouter from "vue-router";
import LayOut from "../ViveWs/LayOut";
import NavigationBar from "../components/NavigationBar";
import ConTa from "../components/ConTa";
import HeaDer from "../components/HeaDer";

const router = new VueRouter({
    routes: [{
            path: "/",
            component: LayOut,
        },
        {
            path: "/header",
            component: HeaDer,
            children: [{
                path: "navigationbar",
                component: NavigationBar,
                children: [{
                    path: 'conta',
                    component: ConTa,
                    props($route) {
                        return {
                            id: $route.query.id,
                            id2: $route.query.id2,
                        }
                    }
                }]
            }]
        },

    ]
});
export default router;