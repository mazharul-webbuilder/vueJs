<template>
  <section class="navbar-dark bg-dark">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/students">Students</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>

  <div class="container">
    <router-view></router-view>
  </div>

  <footer class="bg-dark py-1">
    <div class="container">
      <p class="text-white"><i>@Copyright Durbar Technologies Ltd</i></p>
    </div>
  </footer>
</template>
<script setup>
</script>