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
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');


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
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #123c69;
  margin-top: 60px;
}


</style>