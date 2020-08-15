<template>
  <div class="post">
    <div>{{post.id}}</div>
    <h2 class="post__title">
      <a href="">{{post.title}}</a>
      <router-link :to="`/post/${post.id}`">Link</router-link> |
    </h2>
    <div class="post__body">
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object
  },
  mounted() {
    
  }
}
</script>

<style scoped lang="scss">
.post {
  max-width: 900px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #000;
  padding: 20px;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  .post__title {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 15px;
  }

  .post-body {
    p {
      font-size: 16px;
    }
  }
}
</style>
