<template>
<div @click.prevent="authModalShow">Login / Register</div>
</template>
<script>
import { mapMutations, mapGetters, mapState } from "vuex";

export default {
  name: "HeaderComponent",
  methods: {
    /*Call State mutation method way 1*/
    ...mapMutations(['toggleAuthModal']),

    authModalShow(){
    /*Call State mutation method way 1*/
      /*using normal process*/
      this.$store.state.authModalShow  = !this.$store.state.authModalShow,

    /*Call State mutation method way 1*/
    //   /*Using mutation*/
      this.$store.commit('toggleAuthModal')
    }
  },
  computed: {
    ...mapGetters(['authModalShow']),
    ...mapState(['authModalShow'])
  }
}
</script>
