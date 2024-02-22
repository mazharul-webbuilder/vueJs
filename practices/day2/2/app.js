const vm = Vue.createApp({
    data(){
        return{
            number: 0
        }
    },
    methods: {
        increment: function (event) {
            this.number++
        },
        decrement: function (event) {
            if (this.number <= 0) {
                window.alert('Can\'t decrement less than zero' )
            } else {
                this.number--
            }
        },
        incrementNumber: function (msg, event) {
            let inputNumber = event.target.value
            if (inputNumber) {
                this.number = inputNumber
            }
        }
    },
    computed: {

    },
    watch: {

    }
}).mount('#app')