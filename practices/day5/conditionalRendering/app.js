const vm = Vue.createApp({
    data() {
        return{
            mode: 1
        }
    },
    methods: {

    },
    computed:{

    },
    watch: {
        mode(newVal, oldVal) {
            setTimeout(() => {
                alert('Mode has been changed')
            }, 5000)
        }
    }
}).mount('#app')