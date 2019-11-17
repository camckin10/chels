<template>
  <div id="app">
    <h1 class="home-title">Chelsey McKinney</h1>
    <h2 class="home-title">Full Stack Developer</h2>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
body{
  background: -webkit-linear-gradient(110deg, #edc7b7 60%, #ffff 60%);
  background: -o-linear-gradient(110deg, #edc7b7 60%, #ffff 60%);
  background: -moz-linear-gradient(110deg, #edc7b7 60%, #ffff 60%);
  background: linear-gradient(110deg, #edc7b7 60%, #ffff 60%);
}

.home-title{
  font-size:95px;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>