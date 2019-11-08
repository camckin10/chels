<template>
<div class="backup">
    
    <h1>Chelsey McKinney</h1>
    <h2>Full Stack Developer</h2>
    <hr/>
        <div class="about">
            <h3>Hello! My name is Chelsey!</h3>
                <figure>
                    <img src="http://placekitten.com/200/300" alt="Chelsey at an event" />
                    <figcaption>
                    Photo Credit Jenessa White <a href="http://chelseymckinney.com">chelseymckinney.com</a>
                    </figcaption>
                </figure>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h4>
                <button>Resume</button>
                <button>LinkedIn</button>
                <button>Twitter</button>
        </div>
       <hr/> 
        <div class="work">
            <h3>Recent Work</h3>
        <!--will house written/coding projects--> 
        <div class="row">
  <div class="column">
    <div class="card">
      <h3>100 Days, Racism, and Starting Over</h3>
      <p><a href="">article</a></p>
      <p>What happens when a junior dev stops coding for 3 months? What really matters is what happens after the tech reprieve. Learn about how unplugging from technology allowed me to grow immensely, and how I regained my faith in programming by completing a coding challenge. Tech Talk given at Minnebar in April 2019. 
</p>
    </div>
  </div> 

  <div class="column">
    <div class="card">
      <h3>Shit Black Parents Say Lorem Ipsum</h3>
      <p><a href="https://secret-temple-73467.herokuapp.com/">website</a></p>
      <p>A lorem ipsum generator I made as an homage to Black Parents sayings. 
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) 
        This project was made using HTML5, CSS3, and ExpressJS. 
      </p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>My Love Of Semicolons</h3>
      <p><a href="https://softwareforgood.com/my-love-of-semicolons/
">article</a></p>
      <p>Last summer, I worked as an intern for a company called Software for Good.  During my internship, I got the opportunity to write the "Theme Of The Week" for Software For Good's blog. The "Theme Of The Week," is when an employee from Software For Good takes time to write whats on their mind. For me, I wrote about my love of semicolons, and how programming has made me enjoy semicolons more.
</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Seshat Swap</h3>
      <p><a href="https://agitated-swanson-0e797f.netlify.com/
">website</a></p>
      <p>An app made for a hackathon called Hack The Gap. 
       “Seshat Swap,” is a community book sharing app that would promote authors of colors, while also sharing books with other users of color. App was made at all female hackathon, Hack The Gap in January 2019. Worked in a group with Lanice Sims, Jenessa White, and Shanise Barona. 
       Made using React and react strap. </p>
    </div>
  </div> 
</div>        
    </div>
</div>


</template>



<script></script>


<style>

/* figure{
  float:left;
} */

/* * {
  box-sizing: border-box;
} */

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}

 
</style>