import {defineStore} from "pinia";


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: '',
        accessToken: '',
    }),
    getters:{
        isAuthenticated(){
            const accessToken = localStorage.getItem('accessToken')

            return !!accessToken
        }
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