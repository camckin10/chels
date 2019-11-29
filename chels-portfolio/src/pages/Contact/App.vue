<template>
  <div id="app">
    <!-- <h1>Chelsey McKinney</h1> -->
     <div class="navbar">
        <a class="active" href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="now.html">Now</a>
        <!-- <a href="work.html">Work</a> -->
        <a href="contact.html">Contact</a>
      </div>
      <hr class="blue-line"/>
      <div class="contact">
        <h1>Contact</h1>
        <!--table w/2 rows + 2 columns-->
        <!--Email,LinkedIn,Resume,Twitter-->
        <!-- <button>Button</button> -->
          <div class="grid-container">
            <!--current contact pg stylings-->
            <!--font awesome icon-->
              <!--Resume-->
              <a href=""><i class="far fa-file fa-6x"></i></a>
              <!--email-->
             <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top"><i class="far fa-envelope fa-6x"></i></a>
              <!--LinkedIn-->
             <a href="https://www.linkedin.com/in/chelseymckinney/"><i class="fab fa-linkedin fa-6x"></i></a>
              <!--Twitter-->
              <a href="https://twitter.com/TechChelsey"><i class="fab fa-twitter fa-6x"></i></a>    
        </div>  
      </div>  
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
  background-color:  #edc7b7;
}

/* Style the navigation menu */
.navbar {
  width: 100%;
  // background-color: #ac3b61;
  overflow: auto;
}

/* Navigation links */
.navbar a {
  float: left;
  padding: 12px;
  color: #123c69;
  text-decoration: none;
  font-size: 35px;
  width: 20%; /* Four equal-width links. If you have two links, use 50%, and 33.33% for three links, etc.. */
  text-align: center; /* If you want the text to be centered */
}

/* Add a background color on mouse-over */
.navbar a:hover{ 
  background-color: #ac3b61 ;
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

.blue-line{
  color:#123c69;
}



/*font awesome stylings*/
i{
  color:#245a94;
}

/*card stylings*/
.contact-btn{
   /* default for <button>, but useful for <a> */
  display: inline-block;
  text-align: center;
  text-decoration: none;

  /* create a small space when buttons wrap on 2 lines */
  /* margin: 2px 0; */
  margin:10px;

  /* invisible border (will be colored on hover/focus) */
  border: solid 1px transparent #123c69;
  border-radius: 4px;

  /* size comes from text & padding (no width/height) */
  padding: 0.5em 1em;

  /* make sure colors have enough contrast! */
  color: #ffffff;
  background-color: #ac3b61;
  Font-size:18px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}

// .card{
//   /* blue violet for card borders*/
//   border:3px solid #123c69;
// }

a{
  color:#ffffff;
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