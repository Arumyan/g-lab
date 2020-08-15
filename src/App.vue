<template>
  <div id="app">
    <div class="nav">
      <router-link exact class="nav__item" active-class="active" to="/"
        >Home</router-link
      >
      <router-link class="nav__item" active-class="active" to="/posts"
        >Posts</router-link
      >
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
//COMMON STYLE
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.nav {
  display: flex;
  width: 100%;
  padding: 0 20px;
  background-color: #33333d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  .nav__item {
    display: block;
    text-decoration: none;
    padding: 15px 20px;
    color: #fff;
    font-size: 18px;

    &.active,
    &:hover {
      background-color: #ccc;
    }
  }
}

.content {
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    margin: 0 0 20px;
  }
}


.paginate-wrapper {
  text-align: center;
}

.paginate {
  display: inline-flex;
  list-style: none;
  border-radius: 3px;

  .paginate__btn {
    margin: 0 2px;
    .paginate__btn-link {
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      color: #42b983;
      width: 40px;
      height: 40px;
      border: 1px solid #616161;
    }

    &.active {
      background-color: #e9ecef;
      color: #4fc08d;
      font-weight: bold;
    }

    &:hover {
      background-color: #e9ecef;
      color: #4fc08d;
    }
  }

  .paginate__btn-link_prev,
  .paginate__btn-link_next {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 40px;
    border: 1px solid #616161;
    outline: none;
    color: #42b983;

    &:hover {
      background-color: #e9ecef;
      color: #4fc08d;
    }
  }
}
</style>
