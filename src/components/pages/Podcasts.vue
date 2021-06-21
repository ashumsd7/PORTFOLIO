<template>
  <div class="">
    <h3>My Podcasts</h3>
    <h4>Adding soon...</h4>
     <hr>
    <div class="container">
      <!-- <podcast-cards
        v-for="podcast in podcastData"
        :key="podcast.id"
        :src="podcast.src"
      ></podcast-cards> -->
    </div>
  </div>
</template>

<script>
// import PodcastCards from "../reusable/PodcastCards.vue";
export default {
  name: "Podcasts",
  components: {
    // PodcastCards,
  },
  data() {
    return {
      podcastData: [
        {
          id: "pc1",
          category: "book-reading",
          bookName: "ikigai",
          isbn: "",
          src:
            "https://anchor.fm/ashutosh-anand-tiwari/embed/episodes/IKIGAI--Chapter-III-e12ju3j/a-a5rpjgj",
        },
        {
          id: "pc2",
          category: "book-reading",
          bookName: "ikigai",
          isbn: "",
          src:
            "https://anchor.fm/ashutosh-anand-tiwari/embed/episodes/IKIGAI--Chapter-IV-Part-1-e12mlu6/a-a5s95nr",
        },
        {
          id: "pc3",
          category: "book-reading",
          bookName: "ikigai",
          isbn: "",
          src:
            "https://anchor.fm/ashutosh-anand-tiwari/embed/episodes/IKIGAI-Chapter-IV-Part-2-e12qro0/a-a5svjvc",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
h3{
  margin:  .5rem 0;
}
</style>
