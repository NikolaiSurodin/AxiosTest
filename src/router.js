import Vue from 'vue'
import Router from 'vue-router'
import news from "@/components/news";
import newsDetail from "@/components/newsDetail";

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'news',
        component: news
    },
        {
            path: '/:id',
            component: {
                render(n){
                    return n('router-view')
                }
            },
            children:[
                {
                    path:'',
                    component:newsDetail
                }
            ]
        }


    ]
})