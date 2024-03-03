const vm = Vue.createApp({

})

vm.component('hello', {
    template: `<h1>{{message}}</h1>`,
    data(){
        return {
            message: 'Hello world!'
        }
    }
})

vm.mount('#app')