const vm = Vue.createApp({
    data(){
        return {
            f_name: "Jhon",
            l_name: "Doe"
        }
    },
    methods: {
        fullName: function () {
            return `${this.f_name} ${this.l_name}`
        }
    }
}).mount('#app')