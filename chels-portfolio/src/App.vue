<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!--<Portfolio/>-->
    <Test/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
//import Portfolio from "./components/Portfolio.vue";
import Test from "./components/Test.vue";



export default {
  name: "app",
  components: {
    HelloWorld,
    //Portfolio,
    Test
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
