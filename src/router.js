import Vue from 'vue'
import Router from 'vue-router'
import newsDetail from "@/components/news/newsDetail";
import login from "@/components/login/login";
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
import carsList from "@/components/cars/carsList";
import carDetail from "@/components/cars/carDetail";
import anonymousPage from "@/components/login/anonymousPage";
import index from '@/components/login/index'

Vue.use(Router)
export default new Router({
        mode: 'history',
        routes: [
            {
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
                component: anonymousPage

            },
            {
                path: '/login',
                name: 'login',
                component: login
            },
            {
                path: '/index',
                name: 'indexPage',
                component: index
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
                        component: companyList,

                    }
                ]
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
                    },
                    {
                        path: '/task',
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
                path: '/cars',
                component: {
                    render(c) {
                        return c('router-view')
                    }
                },
                children: [
                    {
                        path: '',
                        component: carsList
                    },
                    {
                        path: ':id',
                        component: carDetail
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
