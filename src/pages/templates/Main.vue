<template>
  <div id="main">
    <header>
      <a href="/#/"><h1 id="title">zite</h1></a>
      <nav>
        <ul>
          <a href="/#/about"><li>About</li></a>
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
export default {
}
</script>

<style>
  #main {
    margin: 0;
  }

  header {
    padding: 1em 3em;
    margin: 0 0 2em;
    min-height: 3em;
    background-color: #fcf7ff;
    color: #8db38b;
  }

  header #title {
    float: left;
    font-size: 2.5em;
    padding: 0;
    margin: 0;
    text-align: left;
    line-height: 1em;
    display: inline;
    color: #8db38b;
  }

  header nav {
    float: right;
  }

  header nav ul {
    list-style: none;
  }

  header nav ul a {
    color: #8db38b;
  }

  input::-moz-focus-inner { 
    border: 0; 
  }

  #page_content {
    width: 85%;
    max-width: 950px;
    min-width: 35em;
    margin: 0em auto;
    min-height: 80vh;
    display: block;
  }

  #page_content div h1 {
    font-size: 2.5em;
    text-align: center;
    margin: 0 0 0.5em;
  }

  footer {
    padding: 1em 3em;
  }

  footer #made_in {
    -webkit-transform:rotate(-180deg);
    -moz-transform:rotate(-180deg);
    -o-transform:rotate(-180deg);
    transform:rotate(-180deg);
  }
</style>
