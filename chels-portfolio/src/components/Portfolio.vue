<template>
    <section class="header">
        <h1>Chelsey McKinney</h1>
        <h2>Full Stack Developer</h2>
    </section>
<hr/>
    <section class="about-me">
        <h3<Hi My name is Chelsey</h3>
        <figure>
            <img src="http://placekitten.com/200/300" alt="Chelsey at an event" />
            <figcaption>
            Photo Credit Jenessa White <a href="http://chelseymckinney.com">chelseymckinney.com</a>
            </figcaption>
        </figure>
        <h4>I like cookies, and reading.</h4>
        <button>Resume</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
    </section>
<hr/>
    <section class="projects">
        <h3>Check Out Some Of My Projects Below</h3>
    </section>
<hr/>
<!--testing button event handler-->
<div id="example-2">
  <!-- `greet` is the name of a method defined below -->
  <button v-on:click="submit">Submit</button>
</div>
</template>



<script>
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    submit: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Thank you for contacting us !')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// you can invoke methods in JavaScript too
example2.submit() // => 'Hello Vue.js!'
</script>



<style>
.header{
    background-color:blue;
}
</style>