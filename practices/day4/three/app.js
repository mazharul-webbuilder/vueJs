const vm = Vue.createApp({
    data(){
        return {
            isPurple : false,
            textColor: '',
        }
    },
    computed: {
        circleBG(){
            return {
                bgPurple: this.isPurple,
            }
        }
    }
}).mount('#app')