<template>
  <div id="app">
      <div class="navbar">
        <a class="active" href="home.html">Home</a>
        <a href="about.html">About</a>
        <a href="now.html">Now</a>
        <a href="work.html">Work</a>
        <a href="contact.html">Contact</a>
      </div>
    <h1>My Now Page</h1>
    <h2>Inspired by Derek Siver's ,<a href="https://sivers.org/nowff">'now page movement'</a>, a now page answers the question, "What Are You Focused On Now?"</h2>
    <div class="now-pg">
        <h3>Where I'm Working Now</h3>
          <p>I'm a Full Stack Developer for The City of St.Paul.</p>
        <h3>What I'm Working On Now</h3>
          <p>I am doing the <a href="https://www.100daysofcode.com/">#100DaysOfCode Challenge</a> for a second time. 
          I started the challenge in October 2019, and right now I am on Day 22 of the challenge.
          I do daily updates on my <a href="https://twitter.com/TechChelsey">Twitter</a></p>

        <h3>What I'm Reading and What I've Recently Read</h3>
          <!--go back and add amazon/goodreads link-->
          <ul>
            <li>Washington Black by Esi Edugyan [currently reading]</li>
            <li>The Book Of Night Women by Marlon James [completed]</li>
            <li>The Nickel Boys by Colson Whitehead [completed]</li>
            <li>Brief History of 7 Killings by Marlon James[completed]</li>
          </ul>
        <h3>What I'm Reading In The Future</h3>
         <ul>
            <li>Washington Black by Esi Edugyan [currently reading]</li>
            <li>The Book Of Night Women by Marlon James [completed]</li>
            <li>The Nickel Boys by Colson Whitehead [completed]</li>
            <li>Brief History of 7 Killings by Marlon James[completed]</li>
          </ul>
          <!-- <dl>
            <dt>The Year Of Yes by Shonda Rhimes</dt>
              <dd>A memoir of sorts; Rhimes spends the next year saying, 'Yes' to everything.</dd>
              <br/>
            <dt>Barracoon by Zora Neal Hurston</dt>
              <dd>Tells the life story of Cudjo, an 86 year old slave who was interviewed by Zora Neale.</dd>
              <br/>
            <dt>My Sister, The Serial Killer by Oyinkan Braithwaite</dt>
              <dd>A story of identical twins; One, a serial killer, The other, a cleaner for the murders.</dd>
              <br/>
            <dt>John Crow's Devil by Marlon James</dt>
              <dd>Marlon James's debut novel about religion, redemption, and sexual obsession.</dd>  
          </dl> -->
        <h3>What I'm Listening To Now</h3>
            <ul>
              <li>Acrylic--Leikeli47</li>
              <li>Fever--Megan Thee Stallion</li>
              <li>Anger Management--Rico Nasty</li>
              <li>Wash & Set--Leikeli47</li>
              <li>Amala--Doja Cat</li>
              <li>Initially go through the <a href="https://www.npr.org/2017/07/24/538387823/turning-the-tables-150-greatest-albums-made-by-women">150 Albums Made By Women(NPR)</a></li>
            </ul>
            <!--description list-->
          <!-- <dl>
            <dt>study</dt>
            <dd>The devotion of time and attention to acquiring knowledge on an academic subject, especially by means of books</dd>
            <dt>design</dt>
            <dd>A plan or drawing produced to show the look and function or workings of a building, garment, or other object before it is built or made</dd>
            <dd>Purpose, planning, or intention that exists or is thought to exist behind an action, fact, or material object</dd>
            <dt>business</dt>
            <dt>work</dt>
            <dd>A person's regular occupation, profession, or trade</dd>
          </dl> -->
        <hr/>
        <h4>Updated November 18, 2019</h4>
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
  text-align: center;
}

#app {
  font-family: 'Lato', sans-serif;
  //text-align: center;
  color: #123c69;
  margin-top: 60px;
}
</style>