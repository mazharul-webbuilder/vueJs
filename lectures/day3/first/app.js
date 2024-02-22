const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'https://www.google.com/',
            raw_url: '<a href="https://www.google.com/">Raw Url Data</a>',
            age: 16
        }
    },
    methods: {
        increment(){
            return this.age++
        },
        updateLastName(msg, event) {
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
    }
}).mount('#app')
