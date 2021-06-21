<template>
  <div class="container">
    <div class="box" id="box1">
      <div class="inner-container">
        <div class="name">
          <p>ASHU</p>
          <p>TOSH</p>
          <h3>ANAND TIWARI</h3>
          <h4>Curriculum Vitae</h4>
        </div>
        <div class="details">
          <div class="phone">
            <div class="icon">
              <img src="../../assets/smartphone.png" alt="" srcset="" />
              <p>(+91) 7800 81 XXXX</p>
            </div>
          </div>
          <div class="address">
            <div class="icon">
              <img src="../../assets/pin.png" alt="" srcset="" />
              <p>Ayodhya, UP, India</p>
            </div>
          </div>
          <div class="email">
            <div class="icon">
              <img src="../../assets/email.png" alt="" srcset="" />
              <p>
                <a href="mailto:aat8001gGmail.com"> aa---@gmail.com</a>
              </p>
            </div>
          </div>
          <div class="website">
            <div class="icon">
              <img src="../../assets/www.png" alt="" srcset="" />
              <p>
                <a href="https://aat.netlify.app/">https://aat.netlify.app/</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box" id="box2">
      <div class="box2-inner" id="details2">
        <div class="education-block">
          <div class="box2-inner" id="details1">
            <span id="first-word">Me,</span> <br />
            Ashutosh Anand Tiwari <br />
            <p>
              24 years old, a life long learner working consistently in software
              development world for years. I beleive in hard work and I know
              after being a consistent any goal can be acheived. As we know
              consistency is key to success. I love to learn new things and meet
              new person, and always ready to contribute related to my tech
              stack.
            </p>
          </div>
        </div>
      </div>

      <div class="box2-inner" id="details2">
        <ul>
          <li class="headings"><h3>EXPERIENCE</h3></li>
        </ul>

        <div class="education-block">
          <div class="year">
            <h4>
              1.5+ Years as Vue JS Developer in Wittybrains Software
              Technologies Pvt. Ltd.
            </h4>
          </div>
          <div class="content">
            <h5>2019- Present</h5>
          </div>
        </div>
      </div>
      <div class="box2-inner" id="details3">
        <ul>
          <li class="headings"><h3>EDUCATION</h3></li>
        </ul>

        <div class="education-block">
          <div class="year">
            <h4>B.tech in Computer Science and Engineering</h4>
          </div>
          <div class="content">
            <h5>2016-2019 <span>( 75% HONS ) </span></h5>
            <h6>JSS Academy of Technical Education Noida UP</h6>
          </div>
        </div>

        <div class="education-block">
          <div class="year">
            <h4>THREE YEAR DIPLOMA</h4>
          </div>
          <div class="content">
            <h5>2013-2016 <span>( 80% HONS ) </span></h5>
            <h6>Tathagat Gautm Buddha Govt. Polytechnic Srawasti UP</h6>
          </div>
        </div>

        <div class="education-block">
          <div class="year">
            <h4>High School</h4>
          </div>
          <div class="content">
            <h5>2013 <span>( 85% )</span></h5>
            <h6>Gram Vidyalaya Inter College Kodaila Ayodhya UP</h6>
          </div>
        </div>
      </div>
      <div class="box2-inner" id="details2">
        <ul>
          <li  class="headings"><h3>INTERSTS</h3></li>
        </ul>

        <div class="education-block">
          <div class="content">
            <ul>
              <li><h5>Exploring Websites</h5></li>
              <li><h5>Learning Technologies</h5></li>
              <li><h5>Problem Solving</h5></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="box" id="box3">
      <div class="box2-inner" id="details2">
        <ul>
          <li id="skills-li" class="headings"><h3 id="skills-heading">SKILLS</h3></li>
        </ul>

        <div class="skill-container">
            <div class="skills" id="skill1"> <li><span class="skill-name">HTML</span> <progress id="file" value="80" max="100"> 32% </progress></li> </div>
            <div class="skills" id="skill2"><li><span class="skill-name">CSS</span> <progress id="file" value="70" max="100"> 32% </progress></li> </div>
            <div class="skills" id="skill3"><li><span class="skill-name">JS</span> <progress id="file" value="75" max="100"> 32% </progress></li> </div>
            <div class="skills" id="skill4"><li><span class="skill-name">VUEJS</span> <progress id="file" value="70" max="100"> 32% </progress></li> </div>
            <div class="skills" id="skill5"><li><span class="skill-name">FIREBASE</span> <progress id="file" value="50" max="100"> 32% </progress></li> </div>
             <div class="skills" id="skill5"><li><span class="skill-name">GIT</span> <progress id="file" value="50" max="100"> 32% </progress></li> </div>
             <br> <br>
              <p id="below-status">And Learning mode is on..... </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,300&display=swap");
.container {
  /* height: 100vh; */
  /* background: linear-gradient(black,gray); */
  /* display: flex;
    justify-content: center; */
}
.box {
  display: inline-block;
  width: 400px;
  margin: 10px auto;
}
#box1 {
  background: rgb(255, 238, 0);
  margin-bottom: 1rem;
  box-shadow: 8px 16px rgb(141, 141, 141);
}
#box2 {
  background: black;
  display: flex;
  flex-direction: column;
  color: rgb(255, 255, 2);
  border-left: 5px solid rgb(251, 255, 9);
  padding: 0.5rem;
  box-shadow: 8px 16px rgb(239, 241, 101);
}
.box2-inner {
  align-content: center;
  /* text-align: center; */
  /* border: 1px solid red;
    border-left: 5px solid red; */
  margin: 0.3rem;
}
#first-word {
  font-size: 2rem;
}
.headings {
  margin-left: 20px;
}
.headings h3 {
  text-decoration: underline;
  color: rgb(240, 240, 240);
  text-shadow: 0px 4px yellowgreen 0.3;
}
#details1 {
  color: rgb(250, 240, 100);
}
#details1 p {
  word-spacing: 0.3rem;
  /* font-family: 'Ubuntu', sans-serif; */
}
#details2,
#details3,
#details4 {
  border-left: 2px solid white;
}
.year {
  /* border-left: 2px solid white; */
  margin-left: 25px;
}
.content {
  /* border-left: 2px solid white; */
  margin-left: 20px;
}
.content ul li {
  list-style: none;
}
.education-block {
  margin-top: 1rem;
}

#box3 {
  background: rgb(6, 255, 234);
  box-shadow: 8px 16px rgb(37, 37, 37);
}
.content h5,
h6 {
  margin-left: 20px;
  color: rgb(253, 253, 127);
}
.name p {
  font-size: 7rem;
  text-align: center;
  font-weight: 1000;
}
.name h3 {
  letter-spacing: 8px;
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 50px;
}
.name h4 {
  text-align: center;
  font-weight: 1000;
  font-family: "Cutive Mono", monospace;

  text-transform: uppercase;
  margin-bottom: 50px;
}
.icon p {
  display: inline-block;
  vertical-align: center;
}
.icon img {
  margin-top: 10px;
}
.details {
  text-align: center;
  margin-bottom: 20px;
}
.details div {
  display: flex;
  justify-content: center;
}
.details div div p {
  margin-top: 15px;
  margin-left: 10px;
  font-size: 0.9rem;
  font-weight: bold;
}
.details div div p a {
  text-decoration: none;
  color: black;
}
#skills-heading  {
  color: black;
  text-align: center;
  font-weight: bolder;
  font-size: 2.3rem;
  font-family: "Kaushan Script", cursive;
 
  text-shadow: 2px 4px rgb(248, 248, 248);
  text-decoration: none;

}
.skills{
  margin: 10px 0;
}

.skill-name{
    font-size: 2rem;
    font-weight: bolder;
    font-family: "Cutive Mono", monospace;
     font-family: "Kaushan Script", cursive;
}
progress{
    color: black;
    margin-left: 20px;
    /* margin: 0 auto; */
    /* background: rgb(236, 15, 15); */
}
#skills-li{
    list-style: none;
}
#below-status{
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: "Kaushan Script", cursive;
     text-shadow: 2px 2px rgb(255, 255, 255);
}
</style>
