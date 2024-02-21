const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'https://www.google.com/',
            raw_url: '<a href="https://www.google.com/">Raw Url Data</a>',
            age: 16
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment(){
            return this.age++
        },
        updateLastName(event) {
            this.lastName = event.target.value
        }
    }
}).mount('#app')
