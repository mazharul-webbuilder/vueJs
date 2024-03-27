import {defineStore} from "pinia";
import axios from "axios";
export const  useAuthStore = defineStore('auth', {
    state: () => ({
        token: '',
        errors: ''
    }),
    getters: {
        authenticate(){
            return !!this.token
        },
        getToken(){
          return this.token
        }
    },
    actions: {
         login(formData) {
             axios.post('/login',formData).then(res => {
                this.token = res.data.token
            }).catch( (error) => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.message
                } else if (error.response.status === 401) {
                    this.errors = {"email": [error.response.data.message]}
                }
            })
        }
    }
})