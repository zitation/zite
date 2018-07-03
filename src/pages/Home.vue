<template>
  <div class="home">
    <h1>Let's Make Awesome Citations!</h1>
    <a href="/#/add" id='start_button'>
      <Button id='start_button'>Get Started 🡆</Button>
    </a>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: 'home',
  data () {
    return {
      home: []
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    Button
  }
}
</script>

<style>
#start_button button {
  text-decoration: none;
  margin: 0 auto;
  display: block;
  width: 33%;
  font-size: 1em;
}
</style>
