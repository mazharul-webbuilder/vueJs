<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card py-8 my-5">
          <div class="card-header">
            <h3 class="mb-0">Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="email">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password">
              </div>
              <button type="submit" class="btn btn-primary mt-2">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      // Add your login logic here
      console.log("Login form submitted");
    }
  }
};
</script>
