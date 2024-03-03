let vm = Vue.createApp({

})

vm.component('hello-world', {
    template: `<p>{{msg}}</p>`,
    data(){
        return {
            msg: 'Hello world!'
        }
    }
})

vm.mount('#app')