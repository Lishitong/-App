<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import rem from '../static/js/rem'
export default {
  name: 'app',
  components:{
    rem
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
