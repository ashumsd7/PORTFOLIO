<template>
  <section>
    <div class="card-container">
     <iframe :src="src" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
    </div>
  </section>
</template>

<script>
export default {
    props:['src' ]
};
</script>

<style scoped>
.card-container {
  width: 410px;
  max-width: 410px;
  background: rgb(255, 255, 255);
  height: 120px;
  padding: .4rem;
  margin: .3rem .7rem;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 2px 3px rgb(192, 192, 192);
}

</style>
