<template>
  <Error v-if="error"/>
  <div class="post-item" v-else-if="!loading">
    <h1 class="post-item__title">{{post.title}}</h1>
    <p class="post-item__text">{{post.body}}</p>

    <div class="comments">
      <h3 class="comments__title">Comments:</h3>
      <div class="comments-item" v-for="comment in comments" :key="comment.id">
          <div class="comments-item__user">{{comment.email}}</div>
          <div class="comments-item__title">{{comment.name}}</div>
          <div class="comments-item__message">{{comment.body}}</div>
      </div>
    </div>
  </div>
  <Loader v-else />
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Loader from '@/components/Loader';
import Error from '@/components/Error'

export default {
  name: 'PostItem',
  components: {
    Loader,
    Error
  },
  data() {
    return {
      post: null,
      comments: null,
      loading: true,
      error: false
    }
  },
  mounted() {
    const postId = this.$route.params.id;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {this.post = response.data; this.loading = false})
      .catch(() => {
        this.loading = false
        this.error = true
      });
    
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => {this.comments = response.data})
      .catch(() => {
        this.loading = false
        this.error = true
      });
  }
}
</script>

<style scoped lang="scss">
.post-item {
  
  .post-item__title {
    font-size: 35px;
  }

  .post-item__text {
    margin: 0 0 40px;
    font-size: 18px;
  }
}

.comments {
  .comments__title {
    margin: 0 0 15px;
  }

  .comments-item {
    margin: 0 0 10px;
    border: 1px solid #ccc;
    background-color: #e9ecef;
    border-radius: 6px;
    padding: 10px;

    .comments-item__user {
      font-size: 14px;
      font-weight: bold;
      margin: 0 0 20px;
    }

    .comments-item__title {
      font-weight: bold;
      font-size: 16px;
      margin: 0 0 10px;
    }

    .comments-item__message {
      font-size: 20px;
    }
  }
}
</style>