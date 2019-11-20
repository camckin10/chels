<template>
  <div id="app">
     <div class="navbar">
        <a class="active" href="home.html">Home</a>
        <a href="about.html">About</a>
        <a href="now.html">Now</a>
        <a href="work.html">Work</a>
        <a href="contact.html">Contact</a>
      </div>
    <h1>Contact Page</h1>
      
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap');

body{
  background-color: #eee2dc;
}


/* Style the navigation menu */
.navbar {
  width: 100%;
  background-color: #ac3b61;
  overflow: auto;
}

/* Navigation links */
.navbar a {
  float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  width: 17%; /* Four equal-width links. If you have two links, use 50%, and 33.33% for three links, etc.. */
  text-align: center; /* If you want the text to be centered */
}

/* Add a background color on mouse-over */
.navbar a:hover{ 
  background-color: #ac3b61 ;
}

/* Style the current/active link */
.navbar a.active {
  background-color: #123c69;
}

/* Add responsiveness - on screens less than 500px, make the navigation links appear on top of each other, instead of next to each other */
@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
    width: 100%;
    text-align: left; /* If you want the text to be left-aligned on small screens */
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #123c69;
  margin-top: 60px;
}
</style>