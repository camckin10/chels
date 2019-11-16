<template>
<div class="backup">
    <div class="header"/>
    <!--possibly add nav bar?-->
      <hr/>
      <h1>Hello! I'm Chelsey</h1>
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
        
      <button class="purple-btn">Resume</button>

     <button class="purple-btn">LinkedIn</button>

     <button class="purple-btn">Twitter</button> 

      <hr/>
      <div id="about">
            <h2>Work I'm Proud Of</h2>
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




<script></script>


<style>
body{
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
}

@import url('https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap');

h1,h2,h3{
  font-family: 'Lato', sans-serif; 
}


.purple-btn{
   /* default for <button>, but useful for <a> */
  display: inline-block;
  text-align: center;
  text-decoration: none;

  /* create a small space when buttons wrap on 2 lines */
  /* margin: 2px 0; */
  margin:10px;

  /* invisible border (will be colored on hover/focus) */
  border: solid 1px transparent;
  border-radius: 4px;

  /* size comes from text & padding (no width/height) */
  padding: 0.5em 1em;

  /* make sure colors have enough contrast! */
  color: #ffffff;
  background-color: #9555af;
  Font-size:18px;
}

 
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}

.card{
  /* blue violet for card borders*/
  border:3px solid #ffffff;
}

a{
  color:#ffffff;
}


 
</style>