<template>
  <div class="home">
    <Playground />
  </div>
</template>

<script>
// @ is an alias to /src
// import PlaygroundTwo from '../components/PlaygroundTwo.vue'
import Playground from '../components/Playground.vue'

export default {
  name: 'Home',
  components: {
    Playground,
  }
}
</script>
<style>
  body {
    background: teal;
  }
</style>
