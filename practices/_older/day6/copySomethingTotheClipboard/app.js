const vm = Vue.createApp({
    data(){
        return {
            inputText: ''
        }
    },
    methods:{
        copy: function (event) {
            const el = document.createElement('textarea')

            el.setAttribute('readonly', '')
            el.style.position = 'absolute'
            el.style.left = '-9999'
            el.value = this.inputText

            document.body.appendChild(el)
            el.select()

            document.execCommand('copy')
            document.body.removeChild(el)
        }
    }
}).mount('#app')