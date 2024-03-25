import {defineStore} from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({ // Equivalent as data
        userName: 'Global User'
    }),
    getters: { // Equivalent as computed property
        isLoggedIn(state){
            return true;
        }
    },
    actions: { // Equivalent as a methods
        setUserName(payload){
            this.userName = payload
        }
    }
})