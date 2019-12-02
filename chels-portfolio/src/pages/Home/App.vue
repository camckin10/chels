<template>
  <div id="app">
    <h1 class="home-title">Chelsey McKinney</h1>
    <h2 class="home-title">Full Stack Developer</h2>

    <!-- The navigation menu -->
  <div class="navbar">
    <a class="active" href="home.html">Home</a>
    <a href="about.html">About</a>
    <a href="now.html">Now</a>
    <!-- <a href="work.html">Work</a> -->
    <a href="contact.html">Contact</a>
  </div>
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

/* Style the navigation menu */
.navbar {
  width: 100%;
  background-color: #123c69;
  overflow: auto;
}

/* Navigation links */
.navbar a {
  float: left;
  padding: 12px;
  color: #ffff;
  text-decoration: none;
  font-size: 35px;
  width: 22%; /* Four equal-width links. If you have two links, use 50%, and 33.33% for three links, etc.. */
  text-align: center; /* If you want the text to be centered */
}

/* Add a background color on mouse-over */
.navbar a:hover{ 
  background-color: #456DA5 ;
}

/* Style the current/active link */
// .navbar a.active {
//   background-color: #123c69;
// }

/* Add responsiveness - on screens less than 500px, make the navigation links appear on top of each other, instead of next to each other */
@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
    width: 100%;
    //text-align: left; /* If you want the text to be left-aligned on small screens */
  }
}

#app {
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #123c69;
  margin-top: 60px;
}



</style>