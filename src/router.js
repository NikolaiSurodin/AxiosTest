import Vue from 'vue'
import Router from 'vue-router'
import newsDetail from "@/components/newsDetail";
import login from "@/components/login";
import users from "@/components/users";
import userDetail from "@/components/userDetail";
import newsList from "@/components/newsList";
import news from "@/components/news";
import company from "@/components/company/company";
import companyDetail from "@/components/company/companyDetail";
import companyList from "@/components/company/companyList";
import createCompany from "@/components/company/createCompany";
import developers from "@/components/company/developers/developers";
import frontDev from "@/components/company/developers/frontDev";
import backDev from "@/components/company/developers/backDev";



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
                },
                {
                    path: '/developers',
                    component: developers
                },
                {
                    path: '/frontDev',
                    component: frontDev
                },
                {
                    path: '/backDev',
                    component: backDev
                }

            ]
        }

    ]
})