<template>
<div class="backup">
    <hr/>
    <h1>Chelsey McKinney</h1>
    <h2>Full Stack Web Develoer</h2>
    <hr/>
        <div class="about">
            <h3>Hi I'm Chelsey!</h3>
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
        <div class="work">
            <h3>My Work</h3>
        <!--will house written/coding projects--> 
        <!--coding project-->
        <div class="wrap-collabsible">
        <input id="collapsible" class="toggle" type="checkbox">
        <label for="collapsible" class="lbl-toggle">Coding Projects</label>
        <div class="collapsible-content">
        <div class="content-inner">
        <!-- <p>
            QUnit is by calling one of the object that are embedded in JavaScript, and faster JavaScript program could also used with
            its elegant, well documented, and functional programming using JS, HTML pages Modernizr is a popular browsers without
            plug-ins. Test-Driven Development.
        </p> -->
            <table>
                <th>Coding</th>
                <tr>
                    <td>Example</td>
                    <td>Example</td>
                    <td>Example</td>
                </tr>
                <th>Writing</th>
                <tr>
                    <td>Example</td>
                    <td>Example</td>
                    <td>Example</td>
                </tr>
            </table>
       </div>
       </div>
       <!--written projects-->
     
  
</div>   
    </div>
</div>


</template>



<script></script>


<style>
.wrap-collabsible {
  margin-bottom: 1.2rem 0;
}

input[type='checkbox'] {
  display: none;
}

.lbl-toggle {
  display: block;

  font-weight: bold;
  font-family: monospace;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;

  padding: 1rem;

  color: #A77B0E;
  background: #FAE042;

  cursor: pointer;

  border-radius: 7px;
  transition: all 0.25s ease-out;
}

.lbl-toggle:hover {
  color: #7C5A0B;
}

.lbl-toggle::before {
  content: ' ';
  display: inline-block;

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);

  transition: transform .2s ease-out;
}

.toggle:checked + .lbl-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.collapsible-content {
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
}

.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 350px;
}

.toggle:checked + .lbl-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.collapsible-content .content-inner {
  background: rgba(250, 224, 66, .2);
  border-bottom: 1px solid rgba(250, 224, 66, .45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: .5rem 1rem;
}

</style>