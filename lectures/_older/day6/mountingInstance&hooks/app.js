let vm = Vue.createApp({
    data(){
        return {
            message: "Hello world!"
        }
    },
    beforeCreate(){
        console.log('beforeCreate() function called!', this.message) // message will show undefined
    },
    created(){
        console.log('created() function called!', this.message) // will show message
    },
    beforeMount(){
        console.log('beforeMount() function called!', this.$el) // null
    },
    mounted(){
        console.log('mounted() function called!', this.$el) // message will show, coz after compile instance we can access vue instance from $el
    },
    beforeUpdate(){
        console.log('beforeUpdate() function called!')
    },
    updated(){
        console.log('updated() function called')
    },
    beforeUnmount(){
        console.log('beforeUnmount() function called!')
    },
    unmounted(){
        console.log('unmounted() function called!')
    }
})

vm.mount('#app')

// setTimeout(()=>{
//     vm.mount('#app')
// },3000)