<template>
  <div id="app">
     <!-- The navigation menu -->
    <div class="header">
        <div class="navbar">
          <a class="active" href="home.html">Home</a>
          <a href="about.html">About</a>
          <a href="now.html">Now</a>
          <a href="work.html">Work</a>
          <a href="contact.html">Contact</a>
        </div>
    </div>
    <h1>Projects</h1>
    <div id="about">
      <div class="grid-container">
        <div class="card">
          <div class="bg-img"></div>
          <div class="content">
            <h3>100 Days, Racism, and Starting Over</h3>
            <p>What happens when a junior dev stops coding for 3 months? 
              What really matters is what happens after the tech reprieve. Learn about how unplugging from technology allowed me to grow immensely, and how I regained my faith in programming by completing a coding challenge. 
              Tech Talk given at Minnebar in April 2019. </p> 
            <button class="purple-btn"><a href="">Read More</a></button> </div>
        </div>
        <div class="card">
          <div class="bg-img"></div>
          <div class="content">
            <h3>Shit Black Parents Say Lorem Ipsum</h3>
            <p>A lorem ipsum generator I made as an homage to Black Parents sayings. 
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
              The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) 
              This project was made using HTML5, CSS3, and ExpressJS. </p> 
            <button class="purple-btn"><a href="https://secret-temple-73467.herokuapp.com/">Read More</a></button></div>
        </div>
        <div class="card">
          <div class="bg-img"></div>
          <div class="content">
            <h3>My Love Of Semicolons</h3>
            <p>Last summer, I worked as an intern for a company called Software for Good.  
              During my internship, I got the opportunity to write the "Theme Of The Week".This is when an employee from Software For Good takes time to write whats on their mind. 
              For me, I wrote about my love of semicolons, and how programming has made me enjoy semicolons more.</p> 
            <button class= "purple-btn"><a href="https://softwareforgood.com/my-love-of-semicolons/">Read More</a></button></div>
        </div>
        <div class="card">
          <div class="bg-img"></div>
          <div class="content">
            <h3>Seshat Swap</h3>
            <p>An app made during the 2019 'Hack The Gap' hackathon. 'Hack The Gap' is an all female hackathon.
            “Seshat Swap,” is a community book sharing app that would promote authors of colors, and share books with other users of color. Worked in a group with Lanice Sims, Jenessa White, and Shanise Barona. 
            Made using React and react strap. </p> 
            <button class="purple-btn"><a href="https://agitated-swanson-0e797f.netlify.com/">Read More</a></button></div>
          </div>
       </div>
      </div>
        <hr/>
        <footer>Copyright Chelsey McKinney</footer>
    </div>
  
</template>

<script>
export default {
  name: 'Work'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap');

// body{
//   background-color: #eee2dc;
// }


body{
   background: -webkit-linear-gradient(110deg, #ffff 60%, #edc7b7 60%);
  background: -o-linear-gradient(110deg, #ffff 60%, #edc7b7 60%);
  background: -moz-linear-gradient(110deg, #ffff 60%, #edc7b7 60%);
  background: linear-gradient(110deg, #ffff 60%, #edc7b7 60%);
  
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
  width: 17%; /* Four equal-width links. If you have two links, use 50%, and 33.33% for three links, etc.. */
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

/*card stylings*/
.purple-btn{
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

.card{
  /* blue violet for card borders*/
  border:3px solid #123c69;
}

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