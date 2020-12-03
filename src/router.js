import Vue from 'vue'
import Router from 'vue-router'
import newsDetail from "@/components/newsDetail";
import login from "@/components/login";
import users from "@/components/users";
import userDetail from "@/components/userDetail";
import newsList from "@/components/newsList";
import news from "@/components/news";
import company from "@/components/company/company directory/company";
import companyDetail from "@/components/company/company directory/companyDetail";
import companyList from "@/components/company/company directory/companyList";
import createCompany from "@/components/company/company directory/createCompany";


Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
        path: '/news',
        component: news,
        children: [
            {
                name: 'news',
                path: '',
                component: newsList,
                meta: {
                    requiresAuth: true
                }
            }
        ],
    },
        {

            path: '/',
            component: login

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

        },
        {
            path: '/company',
            component: company,
            children: [
                {
                    name: 'company',
                    path: '',
                    component: companyList
                }
            ]
        },
        {
            path: '/company/:id',
            component: {
                render(c) {
                    return c('router-view');
                }
            },
            children: [
                {
                    path: '',
                    component: companyDetail
                },
                {
                    path: '/__create',
                    component: createCompany
                }
            ]
        },

    ]
})