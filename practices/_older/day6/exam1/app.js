const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            age: 25,
            animals: ['bird', 'human', 'cat', 'dog'],
            people: [
                {
                    name: "Jhon",
                    age: 25
                },
                {
                    name: "Jane",
                    age: 28
                }
            ],
            mode: 1
        }
    },
    methods:{
        updateFirstName: function (event) {
            this.firstName = event.target.value
        }
    },
    computed: {
        getFullName(){
            return `${this.firstName} ${this.lastName}`
        },
        updateColor(){
            return {
                color : 'red'
            }
        }
    },
    watch:{

    }
}).mount('#app')