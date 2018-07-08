<template>
  <div id="app">
    <header>
      <a href="/#/"><h1 id="title">zite</h1></a>
      <nav>
        <ul>
          <li><Button inverted>Login</Button></li>
          <li><Button attractive>Sign Up</Button></li>
        </ul>
      </nav>
    </header>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Allan|Lato">
    <div id="page_content">
      <router-view/>
    </div>
    <footer>
      <p id="made_in">Made with <span style="color: red">❤</span> in Australia.</p>
    </footer>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  }
}
</script>

<style>
  header {
    padding: 0;
    margin: 0 0 1em;
    min-height: 3em;
  }

  header #title {
    float: left;
    font-size: 2em;
    padding: 0;
    margin: 0;
    color: #fcf7ff;
    text-align: left;
    display: inline;
  }

  header nav ul {
    float: right;
    list-style: none;
  }

  header nav ul li {
    display: inline;
  }

  header a {
    color: #fcf7ff;
  }

  #page_content {
    width: 60%;
    margin: 0em auto;
    min-height: 80vh;
    display: block;
  }

  #page_content div h1 {
    font-size: 2.5em;
    text-align: center;
    margin: 0 0 0.5em;
  }

  #made_in {
    -webkit-transform:rotate(-180deg);
    -moz-transform:rotate(-180deg);
    -o-transform:rotate(-180deg);
    transform:rotate(-180deg);
  }
</style>
