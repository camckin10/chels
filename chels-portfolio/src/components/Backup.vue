<template>
<div class="backup">
    
    <h1>Chelsey McKinney</h1>
    <h2>Full Stack Developer</h2>
    <hr/>
        <div id="about">
            <h3>Hello! My name is Chelsey!</h3>
                <figure style="float:left;">
                    <img src="img/chelsey.jpg" alt="Chelsey at an event" />
                    <figcaption>
                    Photo Credit Jenessa White <a href="http://chelseymckinney.com">chelseymckinney.com</a>
                    </figcaption>
                    <!--add social media icons here-->
                </figure>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
                </h4>
              <button>Resume</button>
              <button>LinkedIn</button>
              <button>Twitter</button>  
        </div>
       <hr/> 
        <div class="work" style="align-items:center;">
             <h3>Recent Work</h3>
             <div class="grid-container">
  <div class="card">
    <div class="bg-img"></div>
    <div class="content">
      <h4>100 Days, Racism, and Starting Over</h4>
      <p>What happens when a junior dev stops coding for 3 months? 
        What really matters is what happens after the tech reprieve. L
        earn about how unplugging from technology allowed me to grow immensely, and how I regained my faith in programming by completing a coding challenge. 
        Tech Talk given at Minnebar in April 2019. </p> 
      <button><a href="">Read More</a></button> </div>
  </div>
  <div class="card">
     <div class="bg-img"></div>
    <div class="content">
      <h4>Shit Black Parents Say Lorem Ipsum</h4>
      <p>A lorem ipsum generator I made as an homage to Black Parents sayings. 
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) 
        This project was made using HTML5, CSS3, and ExpressJS. </p> 
      <button><a href="https://secret-temple-73467.herokuapp.com/">Readmore</a></button></div>
  </div>
  <div class="card">
     <div class="bg-img"></div>
    <div class="content">
      <h4>My Love Of Semicolons</h4>
      <p>Last summer, I worked as an intern for a company called Software for Good.  
        During my internship, I got the opportunity to write the "Theme Of The Week" for Software For Good's blog. 
        The "Theme Of The Week," is when an employee from Software For Good takes time to write whats on their mind. 
        For me, I wrote about my love of semicolons, and how programming has made me enjoy semicolons more.</p> 
      <button><a href="https://softwareforgood.com/my-love-of-semicolons/">Readmore</a></button></div>
  </div>
  <div class="card">
     <div class="bg-img"></div>
    <div class="content">
      <h4>Seshat Swap</h4>
      <p>An app made for a hackathon called Hack The Gap. 
       “Seshat Swap,” is a community book sharing app that would promote authors of colors, while also sharing books with other users of color. App was made at all female hackathon, Hack The Gap in January 2019. Worked in a group with Lanice Sims, Jenessa White, and Shanise Barona. 
       Made using React and react strap.</p> 
      <button><a href="https://agitated-swanson-0e797f.netlify.com/">Readmore</a></button></div>
  </div>
</div>
       
</div>
</div>

</template>



<script></script>


<style>
img{
  width:333px;
  height:500px;
}


.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}

.card{
  border:2px solid green;
}



 
</style>