<template>
  <div class="">
    <div class="container">
      <the-header> </the-header>
    </div>
      <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
    <div class="container">
      <TechStack></TechStack>
    </div>
  
    <div class="container btnlinks">
      <base-button :key="link" v-for="link in quickLinks" :to="link.to" :title="link.title"></base-button>
    </div>
   
    
  </div>
</template>

<script>

import TechStack from "./components/pages/TechStack.vue";

import TheHeader from './components/layout/TheHeader.vue'

import BaseButton from './components/reusable/BaseButton.vue';


export default {
  name: "App",
  components: {
    TechStack,
    TheHeader,
    BaseButton
  },
  data() {
    return {
      quickLinks:[
       {
          to:'/stats',
          title:'STATS'
        }, 
         {
          to:'/podcasts',
          title:'PODCASTS'
        }, 
         {
          to:'/experience',
          title:'EXPEINECE'
        }, 
          {
          to:'/projects',
          title:'PROJECTS'
        },
          {
          to:'/education',
          title:'EDUCATION'
        },
          {
          to:'/resume',
          title:'RESUME'
        },
          {
          to:'/',
          title:'HOME'
        },
         
        ]
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.container {
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 0.4rem; */
  width: 98vw;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.btnlinks{
  display: flex;
  justify-content: center;
}
    
    
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
