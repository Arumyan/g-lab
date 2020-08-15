<template>
  <div class="post">
    <h2 class="post__title">
      <span class="post__number">#{{post.id}}</span>
      <router-link class="post__title_link" :to="`/posts/${post.id}`">{{post.title}}</router-link>
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
  display: flex;
  flex-direction: column;
  width: calc(50% - 20px);
  margin: 0 10px 20px;
  border-radius: 3px;
  padding: 20px;
  border: 1px solid rgba(0,0,0,.125);
  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.12), 0 1px 3px 1px rgba(66, 66, 66, 0.16);

  .post__title {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .post__title_link {
      color: #273849;
    }
  }

  .post__number {
    margin: 0 5px 0 0;
  }

  .post__body {
    flex: 1 1 auto;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 16px;
      color: #616161;
    }
  }
}
</style>
