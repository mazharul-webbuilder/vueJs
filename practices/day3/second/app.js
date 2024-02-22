const vm = Vue.createApp({
    data(){
        return {
            firstName: "John",
            lastName: "Doe",
            age: 26,
            url: 'http://13.250.125.189/api/v1'
        }
    },
    methods: {
        getAge: function () {
            return this.age
        },
        incrementAgeByInput: function (event) {
            this.age = event.target.value
        },
        incrementAgeByButton: function (event) {
            this.age++
        },
        decrementAgeByButton: function (){
            this.age--
        },
        updateFirstName: function (event) {
            this.firstName = event.target.value
        }
    },
    computed: {
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`
        }
    }
}).mount('#app')