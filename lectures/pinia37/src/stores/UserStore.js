import {defineStore} from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        userName: 'Global User'
    }),
    getters: {
        isLoggedIn(state){
            return true;
        }
    },
    actions: {
        setUserName(payload){
            this.userName = payload
        }
    }
})