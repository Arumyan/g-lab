<template>
  <div class="posts">
    <Post v-for="post in items" :key="post.id" :post="post" />
    <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'paginate'"
        :page-class="'paginate-btn'"
        :prev-class="'paginate-btn-prev'"
        :next-class="'paginate-btn-next'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import axios from 'axios';
import paginateMixin from '@/mixins/paginate.mixin.js'

export default {
  name: 'Posts',
  mixins: [paginateMixin],
  components: {
    Post
  },
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setupPagination(response.data)
    })
  }
}
</script>

<style lang="scss">
  .paginate {
    display: flex;
    list-style: none;

    .paginate-btn {

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        width: 40px;
        height: 40px;
      }

      &.active {
        background-color: green;
      }

      &:hover {
        background-color: blue;
      }
    }

    .paginate-btn-prev,
    .paginate-btn-next {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 40px;
      background-color: blue;
    }
  }
</style>
