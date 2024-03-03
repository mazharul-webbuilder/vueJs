const vm = Vue.createApp({
    data(){
        return {
            isPurple: false,
            textColor: '',
        }
    },
    computed: {
        circle_bg(){
            return {
                'bg-purple': this.isPurple
            }
        }
    }
}).mount('#app')