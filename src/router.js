import Vue from 'vue'
import Router from 'vue-router'
import newsDetail from "@/components/news/newsDetail";
import login from "@/components/login/login";
import usersList from "@/components/user/usersList";
import users from "@/components/user/users";
import userDetail from "@/components/user/userDetail";
import newsList from "@/components/news/newsList";
import news from "@/components/news/news";
import company from "@/components/company/company";
import companyList from "@/components/company/companyList";
import companyDetail from "@/components/company/companyDetail";
import createCompany from "@/components/company/createCompany";
import employees from "@/components/company/employees/employees";
import createEmployee from "@/components/company/employees/createEmployee";
import employeeDetail from "@/components/company/employees/employeeDetail";
import formCompany from "@/components/company/formCompany";
import taskDetail from "@/components/task/taskDetail";
import task from "@/components/task/task";
import formEmployee from "@/components/company/employees/formEmployee";
import NotFound from '@/components/App/404'
import anonymousPage from "@/components/login/anonymousPage";
import index from '@/components/login/index'
import layout from "@/components/containers/layout";
import list from "@/components/task/list";

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            component: anonymousPage
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/users',
            component: layout,
            children: [
                {
                    path: '',
                    component: users,
                    children: [
                        {
                            path: '/users',
                            name: 'users',
                            component: usersList,
                            meta: {
                                requiresAuth: true
                            }
                        }
                    ]
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
                //напихать сюда
                {
                    path: '/index',
                    name: 'indexPage',
                    component: index
                },
                {
                    path: '/news',
                    component: news,
                    children: [
                        {
                            path: '',
                            name: 'news',
                            component: newsList,
                            meta: {
                                requiresAuth: true
                            }
                        }
                    ],
                },
                {
                    path: '/news/:id',
                    component: {
                        render(c) {
                            return c('router-view')
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
                    path: '/company',
                    component: company,
                    children: [
                        {
                            name: 'company',
                            path: '',
                            component: companyList,
                        },
                        {
                            path: '/company',
                            component: {
                                render(c) {
                                    return c('router-view');
                                }
                            },
                            children: [
                                {
                                    path: '',
                                    component: companyList
                                },
                                {
                                    path: '__create',
                                    component: createCompany
                                },
                                {
                                    path: ':id',
                                    component: {
                                        render(c) {
                                            return c('router-view')
                                        }
                                    },
                                    children: [
                                        {
                                            path: '',
                                            component: companyDetail
                                        },
                                        {
                                            path: 'edit',
                                            component: formCompany
                                        },
                                        {
                                            path: 'task',
                                            component: list
                                        },
                                        {
                                            path: 'employees',
                                            component: {
                                                render(c) {
                                                    return c('router-view')
                                                }
                                            },
                                            children: [
                                                {
                                                    path: '',
                                                    component: employees
                                                },
                                                {
                                                    path: '__create',
                                                    component: createEmployee
                                                },
                                                {
                                                    path: ':em_id',
                                                    component: {
                                                        render(c) {
                                                            return c('router-view')
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            path: '',
                                                            component: employeeDetail
                                                        },
                                                        {
                                                            path: 'edit',
                                                            component: formEmployee
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    path: '/company/task',
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: '',
                            component: task
                        },
                        {
                            path: ':id',
                            component: taskDetail
                        }
                    ]
                },
                {
                    name: 'list',
                    path: '/list',
                    component: () => import('./components/task/list.vue')
                },
                {
                    name: 'taskDetail',
                    path: 'task/:id',
                    component: () => import('./components/task/taskDetail')
                }
            ]
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})
