<template>
   <div class="header" id="header">
       <header>
           <nav>
               <ul>
                   <li>
                       <router-link to="/"> <img class="boy" src="../../assets/boy.png" alt="" srcset=""> </router-link>
                     
                   </li>
                   <li>
                       <p>
                            &#10100;&#10100; aat... &#x2775;&#x2775;
                           </p>
                   </li>
                   <li>
                       <a href="https://github.com/ashumsd7">
            <img  class="links" src="../../assets/github.png" alt="" srcset=""
          /></a>
                   </li>

                   <li>
                        <a
            href="https://www.linkedin.com/in/ashutosh-anand-tiwari-266585132/"
          >
            <img class="links" src="../../assets/linkedin.png" alt="" srcset="" />
          </a>
                   </li>
                   <li>
                        <a
            href="https://www.quora.com/profile/%E0%A4%86%E0%A4%B6%E0%A5%81%E0%A4%A4%E0%A5%8B%E0%A4%B7-%E0%A4%86%E0%A4%A8%E0%A4%A8%E0%A5%8D%E0%A4%A6-%E0%A4%A4%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%80-Ashutosh-Anand-Tiwari"
          >
            <img  class="links" src="../../assets/quora.png" alt="" srcset=""
          /></a>
                   </li>
               </ul>
           </nav>
           <div class="btns">
        <!-- <div class="links">
          <a href="https://github.com/ashumsd7">
            <img src="../../assets/github.png" alt="" srcset=""
          /></a>
          <a
            href="https://www.linkedin.com/in/ashutosh-anand-tiwari-266585132/"
          >
            <img src="../../assets/linkedin.png" alt="" srcset="" />
          </a>

          <a
            href="https://www.quora.com/profile/%E0%A4%86%E0%A4%B6%E0%A5%81%E0%A4%A4%E0%A5%8B%E0%A4%B7-%E0%A4%86%E0%A4%A8%E0%A4%A8%E0%A5%8D%E0%A4%A6-%E0%A4%A4%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%80-Ashutosh-Anand-Tiwari"
          >
            <img src="../../assets/quora.png" alt="" srcset=""
          /></a>
        </div> -->
        
      </div>
       </header>
   </div>
</template>

<script>
    export default {
        

    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
#header{
    width: 100%;
  background: linear-gradient(300deg, #ffffff, #5abcfd);
  /* border-radius: 10px; */
    /* height: 20px; */
}
nav ul{
    display: flex;
}
nav ul li{
    list-style: none;
}
nav ul li p{
    font-family: 'Dancing Script', cursive;
    margin-top: 25px ;
    
    font-weight: bolder;
    font-size: 1.5rem;
}
.links{
    margin-left: 15px;
    margin-top: 25px;
}
.boy{
    width: 70px;
    height: 70px;
}

</style>