<template>
  <div id="app">

     <div class="header">
        <div class="navbar">
          <a class="active" href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="now.html">Now</a>
          <a href="contact.html">Contact</a>
        </div>
    </div> 
     
      
    <h1>Now Page</h1>
    <div class="now-pg">
      <h3>Inspired by Derek Siver's,<a href="https://sivers.org/nowff">'now page'</a> movement, a now page answers the question, "What Are You Focused On Now?"</h3>
        <ul class="now">
          <li><b>Current Job:</b> Full Stack Developer for The City of St.Paul</li>
          <li><b>For Fun:</b> I am doing the <a href="https://www.100daysofcode.com/">#100DaysOfCode Challenge</a> for a second time. 
            I do daily updates on my <a href="https://twitter.com/TechChelsey">Twitter</a> page.</li>
          <li><b>What I'm Reading:</b> "Red At The Bone" by Jacqueline Woodson & "Here Comes The Sun" by Nicole Dennis-Benn</li>
          <li><b>Who I'm Listening To:</b> Leikeli47, Megan Thee Stallion, Rico Nasty, & Doja Cat</li>
       
        </ul>
      
        <br/>  
      <!--Recent work section-->
      <div class="grid-container">
        <div class="card">
          <div class="bg-img"></div>
          <div class="content">
           <h3>100 Days, Racism, and Starting Over</h3>
           <hr/>
            <p>What happens when a junior dev stops coding for 3 months? 
              Learn about how unplugging from technology allowed me to grow immensely, and how I regained my faith in programming by completing a coding challenge. 
              Tech Talk given at Minnebar in April 2019. </p> 
            <button class="center"><a class="button-link" href="https://dev.to/camckin10/6-life-lessons-in-tech-100-days-racism-and-starting-over-4h0p">Read Article</a></button> </div>
      </div>

        <div class="card">
          <div class="bg-img"></div>
          <div class="content">
            <h3>Shit Black Parents Say Lorem Ipsum</h3>
            <hr/>
            <p>A lorem ipsum generator I made as an homage to Black Parents sayings. 
              Lorem ipsum, or lipsum is dummy text used in laying out print, web design, and graphics.
              
              This project was made using HTML5, CSS3, and ExpressJS. </p> 
            <button class="center"><a class="button-link" href="https://secret-temple-73467.herokuapp.com/">View App</a></button></div>
        </div>

        <div class="card">
          <div class="bg-img"> 
          <!-- <img src="img/semicolon.png" style= "height:60px; width:50px;" alt="semicolon" />-->
          </div>
          <div class="content">
            <h3>My Love Of Semicolons</h3>
            <hr/>
            <p>Last summer, I worked as an intern for a company called Software for Good.  
              During my internship, I wrote about my love of semicolons, and how programming has made me enjoy semicolons more.</p> 
            <button class="center"><a class="button-link" href="https://softwareforgood.com/my-love-of-semicolons/">Read Article</a></button></div>
        </div>

        <div class="card">
          <div class="bg-img"></div>
          <div class="content">
            <h3>Seshat Swap</h3>
            <hr/>
            <p>An app made during the 2019 'Hack The Gap' hackathon. 
            “Seshat Swap,” is a community book sharing app that would promote and share books with other users of color. Worked in a group with Lanice Sims, Jenessa White, and Shanise Barona. 
            Made using React and react strap. </p> 
            <button class="center"><a class="button-link" href="https://agitated-swanson-0e797f.netlify.com/">View App</a></button></div>
          </div>

          <!--dev.to post #1 : 100 days tips-->
          <div class="card">
            <div class="bg-img"></div>
              <div class="content">
                <h3>The Jr. Dev's Guide To Surviving The 100 Days Of Code Challenge</h3>
                <hr/>
                <p>A post about surviving the 100 Days Of Code Challenge. This article was originally given as a talk at the Minneapolis Jr. Dev Meetup in July 2019.</p> 
                <button class="center"><a class="button-link" href="https://dev.to/camckin10/the-junior-dev-s-guide-to-completing-the-100-days-of-code-challenge-a-k-a-don-t-panic-5c37">Read Article</a></button></div>
            </div> 

          <!--ignite talk-->
          <div class="card">
            <div class="bg-img"></div>
              <div class="content">
                <h3>DevOps Minneapolis Ignite Talk</h3>
                <hr/>
                <p>An Ignite Talk I gave during DevOps Minneapolis in August 2019. The ignite was about starting over in programming after not coding for 3 months. This ignite talk is a 5 min version of a talk I gave at Minnebar in April 2019. </p> 
                <button class="center"><a class="button-link" href="https://www.youtube.com/watch?v=SrrA2o2BkdI">Watch Video</a></button></div>
            </div> 
          <!--dev.to post #2: 2nd time doing challenge -->

            <div class="card">
            <div class="bg-img"></div>
              <div class="content">
                <h3>My 2nd Time Doing The 100 Days Of Code Challenge</h3>
                <hr/>
                <p>Dev.to post about participating in the 100 days of code challenge a second time. I'm doing the challenge for the second time in a year. :) </p> 
                <button class="center"><a class="button-link" href="https://dev.to/camckin10/my-2nd-time-doing-the-100daysofcode-challenge-2246">Read Article</a></button></div>
            </div> 

          <!--SFG TOTW--Universe will align-->
          <div class="card">
            <div class="bg-img"></div>
              <div class="content">
                <h3>The Universe Will Align</h3>
                <hr/>
                <p>For my final week of my internship with Software For Good, I wrote the Theme Of The Week. The blog post is about seeing the positive of “moving on.” I loved writing it. I hope you enjoy! </p> 
                <button class="center"><a class="button-link" href="https://softwareforgood.com/the-universe-will-align/">Read Article</a></button>
                </div>
            </div> 

       </div>

      
        <br/>
        <h4>Updated November 28, 2019</h4>
        <footer>Copyright Chelsey McKinney</footer>
    </div>
  </div>
  



</template>

<script>
export default {
  name: 'Now'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');


body {
  margin: 0;
  padding: 0;
  background: #ffff;
  // font-family: 'Cormorant Garamond', serif;
}

.home-title{
  font-size:95px;
}

/*nav bar stylings*/
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

 /*header stylings*/
h1{
  color:#123c69;
  text-align: center;
}

h2{
  text-align: center;
  font-size:34px;

}

h3{
  color:block;
  text-align: center;
  font-size:20px;

}

 .now{
   list-style-type: circle;
  font-size: 20px;
}

/*card stylings*/
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}

.card{
  /* blue violet for card borders*/
  border:3px solid #123c69;
  padding-left: 6px;
  font-size: 18px;
  color: black ;
  // overflow-wrap: break-word;
}

/*button stylings*/
.center{
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #123c69;
    padding:5px;
    display: block !important;
    border-radius: 8px;
    font-size: 22px;
    color:#ffff;
    background-color: #456DA5;
  }

  .button-link{
    color:#fff;
    text-decoration: none;
  }

#app {
  font-family: 'Lato', sans-serif;
  //text-align: center;
  color: #123c69;
  margin-top: 60px;
}

</style>