import Vue from 'vue'
import Router from 'vue-router'
import news from "@/components/news";
import newsDetail from "@/components/newsDetail";
import login from "@/components/login";
import users from "@/components/users";
import userDetail from "@/components/userDetail";

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'news',
        component: news
    },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/users',
            name: 'users',
            component: users,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/news/:id',
            component: {
                render(n) {
                    return n('router-view')
                }
            },
            children: [
                {
                    path: '',
                    component: newsDetail
                }
            ],

        },
        {
            path: '/users/:id',
            component: {
                render(c) {
                    return c('router-view')
                }
            },
            children: [
                {
                    path: '',
                    component: userDetail
                }
            ],

        }


    ]
})