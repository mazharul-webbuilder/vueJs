const vm = Vue.createApp({
    data(){
        return{
            isPurple: false,
            textColor: '',
        }
    },
    computed: {
        circleBg(){
            return {
                bgPurple: this.isPurple
            }
        }
    }
}).mount('#app')