<template>
  <div>
    <h2>{{ userName }}</h2>
    <h2>{{ isUserLoggedInText }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useUserStore } from "@/stores/UserStore.js";

export default {
  name: 'App',
  data() {
    return {
      isUserLoggedInText: ''
    };
  },
  computed: {
    ...mapState(useUserStore, {
      userName: "userName",
      isLoggedIn: "isLoggedIn"
    })
  },
  methods: {
    ...mapActions(useUserStore,{
      setUserName: "setUserName"
    }),
    updateIsUserLoggedIn() {
      this.isUserLoggedInText = this.isLoggedIn ? 'User is logged in' : 'User is not logged in';
    }
  },
  created() {
    this.updateIsUserLoggedIn();
    this.setUserName("Mazharul")
  }
}
</script>
