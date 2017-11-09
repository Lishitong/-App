<template>
  <div id="app">
<<<<<<< HEAD
    <remen></remen>
    <top250></top250>
=======
    <TabBar></TabBar>
>>>>>>> b6257552898b830fff05c2e3a52ee9d3a395049e
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import TabBar from './pages/TabBar'


export default {
  name: 'app',
  components : { TabBar }
}
</script>

<style lang="less" scoped>
  #app {
    width: 100%;
    height: 100%;
  }
>>>>>>> b6257552898b830fff05c2e3a52ee9d3a395049e
</style>
