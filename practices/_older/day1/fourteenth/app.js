const vm = Vue.createApp({
    data(){
        return {
            firstName: "John",
            lastName: "Doe",
            url: 'https://www.prothomalo.com/',
            raw_html: '<strong>I am strog</strong>',
        }
    },
    methods: {
        fullName: function () {
            return `${this.firstName} ${this.lastName}`
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.firstName = "Mazharul"
    vm.lastName = "Islam"
}, 2000)