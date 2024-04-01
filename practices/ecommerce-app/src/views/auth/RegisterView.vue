<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="mb-0">Register</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="model.register.name">
                <p v-if="errors.name" class="text-danger">{{errors.name[0]}}</p>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="model.register.email">
                <p v-if="errors.email" class="text-danger">{{errors.email[0]}}</p>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" v-model="model.register.phone">
                <p v-if="errors.phone" class="text-danger">{{errors.phone[0]}}</p>

              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="model.register.password">
                <p v-if="errors.password" class="text-danger">{{errors.password[0]}}</p>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" v-model="model.register.password_confirmation">
                <p v-if="errors.password_confirmation" class="text-danger">{{errors.password_confirmation[0]}}</p>

              </div>
              <button type="submit" class="btn btn-primary mt-2">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios.js";
import {useAuthStore} from "@/stores/AuthStore.js";
import { mapActions} from "pinia";
import router from "@/router/index.js";

export default {
  name: "RegisterView",
  data() {
    return {
      model: {
        register: {
          name: "",
          email: "",
          phone: "",
          password: "",
          password_confirmation: ""
        }
      },
      errors: {}
    };
  },
  methods: {
    ...mapActions(useAuthStore, {
      setUser: "setUser",
      setAccessToken: "setAccessToken",
      setAccessTokenToLocalStorage: "setAccessTokenToLocalStorage"
    }),
    register() {
      axios.post('/register', this.model.register)
          .then((res) => {
            this.setUser(res.data.user)
            this.setAccessToken(res.data.accessToken)
            this.setAccessTokenToLocalStorage(res.data.accessToken)
            this.resetForm();
            // Redirect to the dashboard
            router.push('/dashboard');
          })
          .catch((error) => {
            if (error.response.status === 422) {
              this.errors = error.response.data.errors;
            }
          });
    },
    resetForm() {
      // Reset the form fields
      Object.keys(this.model.register).forEach((key) => {
        this.model.register[key] = "";
      });
      // Reset errors
      this.errors = {};
    }
  }
};
</script>

