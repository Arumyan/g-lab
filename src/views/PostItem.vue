<template>
  <div class="post-item" v-if="!loading">
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>

    <div>
      <h3>Comments</h3>
      <div class="comments" v-for="comment in comments" :key="comment.id">
        <ul>
          <li>User: {{comment.email}}</li>
          <li>Title: {{comment.name}}</li>
          <li>Message: {{comment.body}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'PostItem',
  components: {
    
  },
  data() {
    return {
      post: null,
      comments: null,
      loading: true
    }
  },
  mounted() {
    const postId = this.$route.params.id;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {this.post = response.data; this.loading = false})
    
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => {this.comments = response.data})
  }
}
</script>

<style scoped lang="scss">

</style>