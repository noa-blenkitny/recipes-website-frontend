<template>
    <div id="about">
      <b-row class="myrow" no-gutters>
      <b-col class="timmon" sm="5">
        <img id="timmonpic" src="../assets/timmon.png">
        </b-col>
      <b-col class="aboutbody">
      <h1>About Us</h1>
      <p>
        We are two 3rd year Information System engineering sutdents in Ben
        Gurion University, Noa and Bar.
      </p>
      <p>
        As part of Web development enviourmnets course, we developed a recipes
        website.
      </p>
      <p>
        We implemented the cilent side with Vue framework and the server side
        with Node.js.
      </p>
      <p>
        We designed the componnents in our website with bootstap component
        library.
      </p>
      <p>
        During the course we also developed the following projects:
      </p>

      <ul>
        <li>
          A Personal Website about someone form the third age:
          <br>
          <a
            href="https://web-development-environments-2022.github.io/318364122/"
            >Noa's site
          </a>
          <br>
          <a
            href="https://web-development-environments-2022.github.io/205973837/"
            >Bar's site
          </a>
        </li>
        <li>
          An Online Pacman Computer Game:
          <a
            href="https://web-development-environments-2022.github.io/assignment2-318364122_205973837/"
            >Pacman game
          </a>
        </li>
      </ul>
      </b-col>
      </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#about{
  margin-top: 4%;
  font-family: 'Patrick Hand', cursive;
  color: rgb(13, 84, 87);
}
#timmonpic{
  width: 60%;
  height: 110%;
  margin-left: 25%;
}
h1{
  margin-bottom: 3%;
  text-align: left;
  margin-top:7%;
}
.aboutbody{
  font-size: 20px;
}


</style>
