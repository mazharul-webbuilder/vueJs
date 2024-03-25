<template>
  <form @submit.prevent="handleLogin">
    <h1 class="text-gray-900 text-2xl font-medium text-center mb-10">Login</h1>
    <div class="mb-3">
      <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
      <input type="text" v-model="model.form.email" name="email" id="email" class="border rounded text-green-700 py-1 px-3 leading-8 ease-in-out w-full border-gray-300">
      <p v-if="errors.email" class="text-red-500 text-sm">{{errors.email[0]}}</p>
    </div>
    <div class="mb-3">
      <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
      <input type="password" v-model="model.form.password" name="email" id="password" class="border rounded text-green-700 py-1 px-3 leading-8 ease-in-out w-full border-gray-300">
      <p v-if="errors.password" class="text-red-500 text-sm">{{errors.password[0]}}</p>
    </div>
    <div class="pt-3">
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 rounded text-lg w-full hover:bg-indigo-600">Login</button>
    </div>
  </form>
</template>

<script>
import {mapState, mapActions} from "pinia";
import {useAuthStore} from "@/stores/AuthStore.js";

export default {
  name: 'LoginView',
  data(){
    return {
      model: {
        form: {
          email: '',
          password: ''
        }
      }
    }
  },
  computed: {
    ...mapState(useAuthStore, {
      token: "token",
      errors: "errors"
    })
  },
  methods: {
    ...mapActions(useAuthStore, {
      login: "login"
    }),
    handleLogin() {
      this.login(this.model.form)

      // axios.get('/students', {
      //   headers: {
      //     'Authorization': `Bearer 37|4UJ4d5jvPF50gCbXzjJJLepRcjkVarWWmNRGFxcM98d3ca75`
      //   }
      // }).then(res => {
      //       console.log(res);
      //     }).catch(error => {
      //       console.error(error);
      //     });

    }
  }
}
</script>