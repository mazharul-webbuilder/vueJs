const vm = Vue.createApp({
    data(){
        return {
            firstName: "John",
            lastName: "Doe"
        }
    },
    methods: {
        fullName: function (){
            return `${this.firstName} ${this.lastName}`
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = "First Name updated"
    vm.lastName = "Last Name updated"
}, 2000)