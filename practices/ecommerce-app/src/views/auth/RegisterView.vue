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
                <label for="username">Name</label>
                <input type="text" class="form-control" id="name" v-model="name">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="email">
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" v-model="phone">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password">
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword">
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
export default {
  name: "RegisterView",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    register() {
      // Add your registration logic here
      console.log("Registration form submitted");
    }
  }
};
</script>
