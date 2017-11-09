<template>
  <div id="app">
    <remen></remen>
    <top250></top250>
  </div>
</template>

<script>
import remen from './pages/remen'
import top250 from './pages/top250'
export default {
  name: 'app',
  components:{
    remen,
    top250
  }
}
</script>

<style>
body{
  margin: 0 auto;
  width: 7.2rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
