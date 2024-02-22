const vm = Vue.createApp({
    data(){
        return {
            firstName: "John",
            lastName: "Doe",
            age: 0,
            googleUrl: 'https://www.google.com/',
            rawHtml: '<a href="https://www.google.com/">Raw Html</a>'
        }
    },
    methods: {
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`
        },
        updateLastName: function (msg, event) {
            event.preventDefault()
            this.lastName = event.target.value
        },
        decrementAge: function () {
            if (this.age <= 0) {
                alert('can\'t less than 0')
            } else {
                this.age--
            }
        }
    }

}).mount('#app')