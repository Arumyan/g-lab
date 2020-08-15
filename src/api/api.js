import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const postsAPI = {
  getPosts() {
    return instance
      .get(`/posts`)
      .then(response => response.data);
  },

  getPost(postId) {
    return instance
      .get(`/posts/${postId}`)
      .then(response => response.data);
  }
};

export const commentAPI = {
  getComments(postId) {
    return instance
      .get(`/comments?postId=${postId}`)
      .then(response => response.data);
  }
}