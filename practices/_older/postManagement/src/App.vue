<template>
  <h1 class="text-center text-danger">All Posts</h1>
  <div class="">
    <ul>
      <li v-for="(post, index) in posts" :key="index">Title: {{post.title}} || Description: {{post.description}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data(){
    return{
      posts: []
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/posts').then(res => {
      this.posts = res.data
    })
  }
}
</script>