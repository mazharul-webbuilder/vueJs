const vm = Vue.createApp({
    data(){
        return {
            isPurple: false,
            textColor: '',
            size: 150
        }
    },
    computed: {
        circle_bg(){
            return {
                'bg-purple': this.isPurple
            }
        },
        addStyleOnCircle(){
            return {
                width: this.size + 'px',
                height: this.size + 'px',
                lineHeight: this.size + 'px'
            }
        }
    }
}).mount('#app')