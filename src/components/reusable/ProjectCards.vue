<template>
  <section>
    <div class="card-container">
      <h3>{{ title}}</h3>
      <div class="card-about">
        <p>
          {{about}}
        </p>
        <hr>
        <span :key="tech" v-for="tech in technologies" > {{tech}}</span> 
      </div>

      <div class="card-links">
          <p>{{link}}</p>
          <p>{{preview}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props:['title','about','technologies', 'link','preview' ]
};
</script>

<style scoped>
.card-container {
  width: 400px;
  max-width: 400px;
  background: linear-gradient(230deg,white,rgb(138, 138, 136));
  height: 140px;
  padding: .4rem;
  margin: .3rem .7rem;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 2px 3px rgb(145, 145, 145);
}
.card-container h3{
text-align: center;
}
.card-about{
    padding: .1rem;
}
.card-links{
    padding: .5rem;
    text-align: center;
}
</style>
