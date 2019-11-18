<template>
  <div id="app">
     <!-- The navigation menu -->
    <div class="navbar">
      <a class="active" href="home.html">Home</a>
      <a href="about.html">About</a>
      <a href="now.html">Now</a>
      <a href="work.html">Work</a>
      <a href="contact.html">Contact</a>
    </div>
    <h1>About Me</h1>
      <div class="about-pg">
        <h1>Hello I'm Chelsey!</h1>
            <figure style= "float: right; margin: 4px 10px 0px 0px; ">
            <img src="img/chelsey.jpg" style= "height:280px; width:250px;" alt="Chelsey at an event" />
                <figcaption>
                    Photo Credit: Jenessa White
                </figcaption>
            <!--add social media icons here-->
            </figure>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <hr/>
            <footer>Copyright Chelsey McKinney</footer>
        </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
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

h1{
  color:#123c69;
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