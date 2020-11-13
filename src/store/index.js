import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('token'),
        user: [],
        status: ''
    },
    mutations: {

        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        Logout(state) {
            state.status = null
            state.token = null
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
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                        commit('auth_success', token, data)
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
            axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`
        },

        checkAuth() {
            if (this.state.isLoggedIn) {
                return this.dispatch('setAuthHeader')
            }
            return this.dispatch('Logout')
        }

    },

    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
    }

});