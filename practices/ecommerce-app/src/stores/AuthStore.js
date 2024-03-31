import {defineStore} from "pinia";


export const useAuthStore = defineStore('auth', {
    state: () => ({
        userName: '',
        accessToken: '',
    }),
    getters:{

    },
    actions: {
        setAccessToken(token){
            this.accessToken = token
        }
    }
})