import {defineStore} from "pinia";


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: '',
        accessToken: '',
    }),
    getters:{

    },
    actions: {
        setAccessToken(token){
            this.accessToken = token
        },
        setUser(user){
            this.user = user
        },
        setAccessTokenToLocalStorage(token){
            localStorage.setItem('accessToken', token)
        }
    }
})