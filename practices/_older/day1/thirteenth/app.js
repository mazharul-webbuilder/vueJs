const vm = Vue.createApp({
    data(){
        return {
            firstName: "John",
            lastName: "Doe",
            url: 'http://11plus.live/',
            raw_html: '<a href="http://11plus.live/">Raw Html</a>'
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