const vm = Vue.createApp({
    data(){
        return {
            firstName: "jane",
            lastName: "De",
            age: 20
        }
    },
    methods:{

    },
    computed:{
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        }
    },
    watch:{
        age(newVal, oldVal) {
            setTimeout(()=>{
                this.age = 50
            },2000)
        }
    }
}).mount('#app')