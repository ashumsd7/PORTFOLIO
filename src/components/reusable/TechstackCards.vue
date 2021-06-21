<template>
  <section>
    <div class="card-container">
        <!-- <small> {{techName}}</small> -->
   <img :src="src" alt="tech-name">
    </div>
  </section>
</template>

<script>
export default {
    props:['src','techName' ]
};
</script>

<style scoped>
.card-container {
  width: 100px;
  /* max-width: 430px; */
  background: rgb(255, 255, 255);
  height: 110px;
  padding: .4rem;
  margin: .5rem 2.2rem;
  /* border: 1px solid gray; */
  border-radius: 10px;
  box-shadow: 2px 3px rgb(192, 192, 192);
}
.card-container img{
    width: 100px;
    height: 100px;
}

</style>
