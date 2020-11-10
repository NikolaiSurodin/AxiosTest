import axios from "axios";

export default {
    state: {
        users: [],
        email: '',
        password: '',
        token: '',
        error: false,
    },
    getters: {
        allUsers(state){
            return state.users

        }
    },
    mutations: {
        updateUsers(state, users){
            state.users = users
        }
    },
    actions: {
        fetchUsers(ctx){

            axios.get('https://sel-api.justplay.gg/api/v1/admin/users', {
                headers: {'Authorization': `Bearer ${this.token}`}

            })
                .then(response => {
                    this.users = response.data.data
                })
            ctx.commit('updateUsers', this.users)
        }
    },
}