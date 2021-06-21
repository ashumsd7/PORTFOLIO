<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <h2>
        Welcome to <br />
        Ashutosh' Den !
      </h2>
      <h5 class="tag">
        <span> &lt; </span> A Developing Web Developer <span>/&gt;</span>
      </h5>

      <div class="intro">
        Hi, I am <span id="intro-name"> Ashutosh Anand Tiwari </span>
        <span> &nbsp;</span> in web development world since 2019.
      </div>
      <hr />
      <hr />
      <div class="commitment">
        I can build a beautiful <span id="website_word"> website </span> for
        you.
      </div>
      <hr />
      <hr />
      <div class="btns">
        <div class="hireme-container btn-link">
          <button class="hireme">
            <a href="mailto:aat8001@gmail.com"> Hire me &nbsp; </a>
          </button>
        </div>
        <div class="contactlink-container btn-link">
          <button style="color:rgb(99, 88, 88);" class="hireme" disabled><strike>Instant Contact</strike> </button>
        </div>
      </div>
      <!-- start -->
      
    </div>
    <div class="flex-item-right">
      <img src="../../assets/illustration.jpg" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Khand:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");
.flex-container {
  display: flex;
  flex-direction: row;
  font-size: 30px;
  text-align: center;
}

.flex-item-left {
  /* background-color: #f1f1f1; */
  flex: 55%;
  padding: 60px;
  /* background: linear-gradient(230deg, rgb(243, 92, 82), rgb(145, 161, 252)); */
}
.flex-item-left h2 {
  text-align: left;
  color: rgb(0, 0, 0);
  font-family: "Kaushan Script", cursive;
  text-shadow: 0px 0px 6px rgba(47, 134, 248, 0.7);
}
.tag {
  text-align: left;
  font-family: "Kaushan Script", cursive;
  color: rgb(255, 0, 0);
  font-weight: 200;
}
.intro {
  margin-top: 1.5rem;
  text-align: left;
  font-family: "Khand", sans-serif;
}
#intro-name {
  color: rgb(7, 2, 56);
  font-family: "Kaushan Script", cursive;
  /* text-decoration: underline; */
  text-shadow: 2px 2px 6px rgba(60, 222, 243, 0.7);
}

.commitment {
  margin-top: 1rem;
  font-family: "Cutive Mono", monospace;
  text-align: left;
}
#website_word {
  font-weight: bolder;
  color: rgb(236, 0, 0);
  text-shadow: 2px 2px 6px rgba(230, 226, 20, 0.7);
}
.hireme a {
  text-decoration: none;
  color: black;
}

.btns {
  margin-top: 1rem;
  text-align: center;
}
.hireme-container {
  margin-bottom: 1rem;
  text-align: left;
  cursor: pointer;
}
.contactlink-container {
  text-align: right;
  cursor: pointer;
}

.btns button {
  font-size: 1.5rem;
  margin-left: 1rem;
  background: white;
  color: black;
  font-weight: bolder;
  outline: none;
  border-radius: 10px;
  box-shadow: 2px 4px black;
}

.btns a {
  margin-left: 1rem;
}
.flex-item-right {
  /* background: linear-gradient(230deg, rgb(250, 132, 123), rgb(177, 247, 47)); */

  padding: 0px;
  flex: 40%;
}
.flex-item-right img {
  width: 400px;
  /* box-shadow: 4px 8px gray; */
  border-radius: 10px;
  height: auto;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
@media (max-width: 400px) {
  .flex-item-left {
    padding: 20px;
  }
  .flex-item-left p {
    font-size: 0.9rem;

    font-weight: 400;
  }
}
</style>
