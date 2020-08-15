<template>
  <Error v-if="error"/>
  <div class="posts" v-else-if="!loading">
    <h1>Posts</h1>

    <div class="posts_container">
      <Post v-for="post in items" :key="post.id" :post="post" />
    </div>
    
    <div class="paginate-wrapper">
      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'paginate'"
        :page-class="'paginate__btn'"
        :page-link-class="'paginate__btn-link'"
        :prev-class="'paginate__btn_prev'"
        :prev-link-class="'paginate__btn-link_prev'"
        :next-class="'paginate__btn_next'"
        :next-link-class="'paginate__btn-link_next'"
    />
    </div>
    
  </div>

  <Loader v-else/>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import Loader from '@/components/Loader.vue'
import Error from '@/components/Error.vue'
import axios from 'axios';
import paginateMixin from '@/mixins/paginate.mixin.js'

export default {
  name: 'Posts',
  mixins: [paginateMixin],
  components: {
    Post,
    Loader,
    Error
  },
  data() {
    return {
      posts: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setupPagination(response.data)
        this.loading = false
      })
      .catch(() => {
        this.loading = false
        this.error = true
      });
  }
}
</script>

<style lang="scss">

  .posts {

    .posts_container {
      display: flex;
      flex-wrap: wrap;
      margin: -10px -10px 40px;
    }
  }

</style>
