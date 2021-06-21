<template>
  <div class="">
    <h3>My Projects</h3>
    <h4>Adding soon : follow github</h4>
     <hr>
    <div class="container">
      <!-- <project-cards
        v-for="project in projectData"
        :key="project.id"
        :title="project.title"
        :about="project.about"
        :technologies="project.technologies"
        :link="project.link"
        :preview="project.preview"
      ></project-cards> -->
    </div>
  </div>
</template>

<script>
// import ProjectCards from "../reusable/ProjectCards.vue";
export default {
  name: "Projects",
  components: {
    // ProjectCards,
  },
  data() {
    return {
      projectData: [
        {
          id: "p1",
          title: "Title 1",
          about:
            "Dolor stet ea tempor kasd diam eos lorem clita, est ipsum clita ea at stet amet, sed dolore sed ipsum.",
       technologies: ["html ", "css ", "js ", "vue "],
          link: "https://lol.com",
          preview: "https://prev.com",
        },
        {
          id: "p2",
          title: "Title 2",
          about:
            "Dolor stet ea tempor kasd diam eos lorem clita, est ipsum clita ea at stet amet, sed dolore sed ipsum.",
          technologies: ["html ", "css ", "js ", "vue "],
          link: "https://lol.com",
          preview: "https://prev.com",
        },
        {
          id: "p3",
          title: "Title 3",
          about:
            "Dolor stet ea tempor kasd diam eos lorem clita, est ipsum clita ea at stet amet, sed dolore sed ipsum.",
          technologies: ["html ", "css ", "js ", "vue "],
          link: "https://lol.com",
          preview: "https://prev.com",
        },
        {
          id: "p4",
          title: "Title 4",
          about:
            "Dolor stet ea tempor kasd diam eos lorem clita, est ipsum clita ea at stet amet, sed dolore sed ipsum.",
           technologies: ["html ", "css ", "js ", "vue "],
          link: "https://lol.com",
          preview: "https://prev.com",
        },
        {
          id: "p5",
          title: "Title 5",
          about:
            "Dolor stet ea tempor kasd diam eos lorem clita, est ipsum clita ea at stet amet, sed dolore sed ipsum.",
          technologies: ["html ", "css ", "js ", "vue "],
          link: "https://lol.com",
          preview: "https://prev.com",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
h3{
  margin: .5rem;
}
</style>
