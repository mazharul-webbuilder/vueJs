const vm = Vue.createApp({
    data() {
        return {
            firstName: "Mazharul",
            lastName: "Islam"
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = "John"
    vm.lastName = "Doe"
}, 2000)