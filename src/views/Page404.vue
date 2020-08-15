<template>
  <div class="page404">
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
</template>

<script>

export default {
  name: 'Page404'
}
</script>

<style lang="scss" scoped>
.page404 {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 85px;
    color: #3eaf7c;
  }

  p {
    font-size: 35px;
  }
}
</style>