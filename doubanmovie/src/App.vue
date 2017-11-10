<template>
  <div id="app">
    <TabBar></TabBar>
  </div>
</template>

<script>

import TabBar from './pages/TabBar'
export default {
  name: 'app',
  components:{
    TabBar
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
</script>
