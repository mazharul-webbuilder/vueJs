const  vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            number: 0,
        }
    },
    methods:{
        increment(){
            this.number++
        },
        fullName(){
            return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`
        },
        updateLastName(event){
            this.lastName = event.target.value
        }
    }
}).mount('#app')