<template>

    <div class="container">
          
        <div class="box" id="box1">  <h1>  <span> &lt; </span> coding-stats <span>&gt;</span></h1><a href="https://wakatime.com"><img src="https://wakatime.com/share/@aat/9190e03a-110d-48fe-8fbd-c54f00a25a3a.png" /></a> 
         <h1 id="endTag">  <span> &lt; </span>/ coding-stats <span>&gt;</span></h1></div>
        <!-- <div class="box" id="box2">2</div> -->
          
      
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.container{
display: flex;
justify-content: center;
}
.box{
    /* width: 200px;
    height: 200px; */
    /* background: black; */
    margin: 1rem;
}
#box1{
 width: 100%;
 margin: 1rem;


}
h1{
      font-family: "Kaushan Script", cursive;
      color: rgb(19, 9, 63);
       font-weight: bolder;
    text-shadow: 2px 4px rgb(190, 182, 182);
    color: rgb(25, 6, 196);
    margin-bottom: .5rem;
}
#endTag{
    text-align: right;
}
#box1 a img{
  /* align-content: center; */
  margin-left: 20%;
}
@media(max-width:400px){
    #box1 a img{
 width: 95%;
  margin-left:20px;


}
}
</style>