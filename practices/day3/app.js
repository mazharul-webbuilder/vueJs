const vm = Vue.createApp({
    data(){
        return {
            firstName: "John",
            lastName: "De",
            age: 20
        }
    },
    methods: {
        getfullname: function (event) {
            return `${this.firstName} ${this.lastName}`;
        },
        updateFirstName: function (event) {
            this.firstName = event.target.value
        }
    }
}).mount('#app')