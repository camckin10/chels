<template>
  <div id="app">
     <!-- The navigation menu -->
    <div class="navbar">
      <a class="active" href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="now.html">Now</a>
      <!-- <a href="work.html">Work</a> -->
      <a href="contact.html">Contact</a>
    </div>
    <br/>
    <!-- <h1>About Me</h1> -->
      <div class="about-pg">
        <h1>Hello I'm Chelsey!</h1>
            <figure style= "float: right; margin: 4px 10px 0px 0px; ">
            <img src="img/chelsey.jpg" style= "height:280px; width:250px;" alt="Chelsey at an event" />
                <i><figcaption>
                    Photo Credit: Jenessa White
                </figcaption></i>
            <!--add social media icons here-->
            </figure>
            <h3>
              I began teaching myself computer programming three years ago at night, while working as an education coordinator during the day.
              Becoming fascinated in programming, I found online tutorials, and local in person classes. 
              Discovering that I needed more support on my programming journey, I signed up for the Full Stack Coding Bootcamp at The University Of Minnesota, where I learned the MERN (Mongo, Express, React, and Node)  stack. 
              After graduating last year, I worked as an intern for a local company called, 'Software For Good’, building an app that promoted local volunteer opportunities. 
            </h3>
            <h3>
              This summer, I transitioned in my new role as a full stack developer working for The City of St. Paul. At my current job, I work on the frontend portions of projects. 
              Since starting my new position, I have learned VueJS basics, and gained experience in coding practices. 
              When not working, I remain involved in the Twin Cities tech community by organizing events, volunteering, participating in hackathons, and fundraising. 
            </h3>
            <h4>
              As a woman of color in tech, I feel that I have to create new ways to make sure I am helping myself and my community. 
              I will continue to assist in teaching the next generation of women and POC coder. I’m always trying different desserts, playing video games, or studying Python3. 
              I follow the sport figure skating, and feel that Russia has strong figure skaters, but Canada is coming in a very close second, very close. 
              My favorite thing to do is read. I always carry a book with me wherever I go. You can see what I’m currently reading on my <a class="about-link" href="now.html">‘Now’ page</a>.
              Anything else, you can keep up with me on any one of the sites listed on my <a class="about-link" href="contact.html">Contact Page</a>, or download my <a class="about-link" href="">resume</a>. 

            </h4>
            <br/>
        
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
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

body{
  // background-color: #eee2dc;
  background-color:#fff;
  
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
  width: 20%; /* Four equal-width links. If you have two links, use 50%, and 33.33% for three links, etc.. */
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

h1{
  color:#123c69;
  font-size: 30px;

}

h3,h4{
  font-size: 23px;
  color:black;
}

.about-link{
  color:#123c69;
}

#app {
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #123c69;
  margin-top: 60px;
}
</style>