<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  body {
    font-family: 'Lato', sans-serif;
    margin: 0 auto;
    color: #fcf7ff;
    background: linear-gradient(to bottom right, #8db38b, #04724d);
    background-size: auto;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Allan', cursive;
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }
</style>
