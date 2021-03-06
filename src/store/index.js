import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
//импортируем класс компании. нужно будет импортировать так все что есть
import Company from '@/servces/Сompany';
import Employee from "@/servces/Employee";

Vue.use(Vuex);

const moduleAuth = {
    state: () => ({
        token: localStorage.getItem('token'),
        user: [],
        status: ''
    }),
    mutations: {

        auth_success(state, token, user) {
            state.status = 'success'
            // меняем вссе на мутацию, нафиг нам везде повторять по 2 строки
            store.commit('set_token', token)
            state.user = user
        },
        Logout(state) {
            state.status = null
            state.token = null
        },
        // мутаация, которая ставить в локалСтор и в стейт
        set_token(state, token) {
            localStorage.setItem('token', token)
            state.token = localStorage.getItem('token')
        },
        auth_request(state) {
            state.status = 'loading'
        },
        auth_error(state) {
            state.status = 'error'
        }

    },
    actions: {
        SubmitLogin({commit}, data) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'https://sel-api.justplay.gg/token/auth', data, method: 'POST'})
                    .then(response => {
                        const token = response.data.token
                        commit('auth_success', token, data)
                        // от тут зовем экшн по установке хидера, не будем писать по-разному
                        this.dispatch('setAuthHeader')
                        resolve(response)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        Logout({commit}) {
            return new Promise((resolve, reject) => {
                commit('Logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
                reject()
            })
        },
        setAuthHeader() {
            // берем токен из геттеров, они ниже
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.getters.token}`
        },

        checkAuth() {
            // в стейте не было isLoggedIn, внимательнее!!
            if (this.getters.isLoggedIn) {
                return this.dispatch('setAuthHeader')
            }
            return this.dispatch('Logout')
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        // геттер токена
        token: state => state.token,
    }
};
const moduleCompany = {
    state: {
        companies: JSON.parse(localStorage.getItem('companies')) || []
    },
    actions: {

        createCompany({commit}, model) {
            commit('CREATE_COMPANY', new Company(model))
        },
        upDateCompany({commit}, model) {
            commit('UP_DATE_COMPANY', model)
        },

        deleteCompany({commit}, id) {
            commit('DELETE_COMPANY', id)
        }
    },
    mutations: {
        CREATE_COMPANY(state, model) {
            state.companies.push(model)
            localStorage.setItem('companies', JSON.stringify(state.companies))
        },
        UP_DATE_COMPANY(state, id) {
            state.companies = state.companies.splice(id)
            localStorage.setItem('companies', JSON.stringify(state.companies))
        },

        DELETE_COMPANY(state, id) {
            state.companies = state.companies.filter(el => el.id !== id)
            localStorage.setItem('companies', JSON.stringify(state.companies))
        }
    },
    getters: {
        companies(state) {
            return state.companies
        }
    }
}
const moduleDevelopers = {
    state: {
        employees: JSON.parse(localStorage.getItem('employee')) || [],

    },
    actions: {
        createEmployee({commit}, employee) {
            commit('CREATE_EMPLOYEE', new Employee(employee))
        },
        updateEmployee({commit}, employee) {
            commit('UP_DATE_EMPLOYEE', employee)
        },

        deleteEmployee({commit}, id) {
            commit('DELETE_EMPLOYEE', id)
        }
    },
    mutations: {
        CREATE_EMPLOYEE(state, employee) {
            state.employees.push(employee)
            localStorage.setItem('employee', JSON.stringify(state.employees))
        },
        UP_DATE_EMPLOYEE(state, id) {
            state.employees = state.employees.splice(id)
            localStorage.setItem('employee', JSON.stringify(state.employees))
        },

        DELETE_EMPLOYEE(state, id) {
            state.employees = state.employees.filter(el => el.id !== id)
            localStorage.setItem('employee', JSON.stringify(state.employees))
        }
    },
    getters: {
        employees(state) {
            return state.employees
        }
    }
};
const moduleSalary = {
    state: {
        salary: JSON.parse(localStorage.getItem('salary')) || []
    },
    actions: {
        createSalary({commit}, payload) {
            commit('CREATE_SALARY', payload)
        }
    },
    mutations: {
        CREATE_SALARY(state, payload) {
            state.salary.push(payload)
            localStorage.setItem('salary', JSON.stringify(state.salary))
        }
    },
    getters: {
        salary(state) {
            return state.salary
        }
    }
};
const moduleTask = {
    state: {
        tasks: JSON.parse(localStorage.getItem('task')) || []
    },
    actions: {
        createTask({commit}, tasks) {
            commit('CREATE_TASK', tasks)
        }
    },
    mutations: {
        CREATE_TASK(state, task) {
            state.tasks.push(task)
            localStorage.setItem('task', JSON.stringify(state.tasks))
        }
    },
    getters: {
        tasks(state) {
            return state.tasks
        },
        taskById(state, id) {
            return state.tasks.find(el => el.id === id)
        }

    }
}

export const store = new Vuex.Store({
    modules: {
        a: moduleAuth,
        b: moduleCompany,
        c: moduleDevelopers,
        d: moduleSalary,
        f: moduleTask

    }
});