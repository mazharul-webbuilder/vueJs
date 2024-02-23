const vm = Vue.createApp({
    data(){
        return {
            firstName: "John",
            lastName: "Doe",
            age: 26
        }
    },
    methods: {
        updateAge(){
            this.age++
        }
    },
    computed: {
        getFullName(){
            return `${this.firstName} ${this.lastName}`
        }
    },
    watch: {
        firstName(newVal, oldVal){
            setTimeout(()=>{
                this.firstName = "Jane"
            },3000)
        }
    }
}).mount('#app')