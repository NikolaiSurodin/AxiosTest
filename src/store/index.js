import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
//импортируем класс компании. нужно будет импортировать так все что есть
import Company from '@/servces/Сompany';
import Developer from "@/servces/Developer";

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
        deleteCompany({commit}, id) {
            commit('DELETE_COMPANY', id)
        }
    },
    mutations: {
        CREATE_COMPANY(state, model) {
            state.companies.push(model)
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
        developers: [],


    },
    actions: {
        createDev({commit}, developer) {
            commit('CREATE_DEV', new Developer(developer))
        },
        deleteDev({commit}, id) {
            commit('DELETE_DEV', id)
        }

    },
    mutations: {
        CREATE_DEV(state, developer) {
            state.developers.push(developer)
        },
        DELETE_DEV() {

        }


    },
    getters: {
        developers(state) {
            return state.developers
        }

    }
}


export const store = new Vuex.Store({
    modules: {
        a: moduleAuth,
        b: moduleCompany,
        c: moduleDevelopers
    }
});