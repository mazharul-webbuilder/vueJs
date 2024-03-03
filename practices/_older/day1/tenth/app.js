const vm = Vue.createApp({
    data(){
        return {
            firstName: "Jhon",
            lastName: "Doe"
        }
    },
    methods: {
        fullName: function (){
            return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = 'Mazharul'
    vm.lastName = 'Islam'
}, 2000)