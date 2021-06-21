<template>
<router-link :to="to">{{title}}</router-link>

</template>

<script>
    export default {
        props:['title', 'to']
    }
</script>

<style  scoped>
a{
    font-size: 2rem;
    margin:.4rem;
    outline: none;
    background: linear-gradient(300deg,rgb(7, 224, 72),rgb(0, 0, 0));
    color: rgb(255, 255, 255);
    border-radius: 5px;
      font-family: "Cutive Mono", monospace;
    border: none;
    cursor: pointer;
    transition: .3s ease-in;
    font-weight: bolder;
    margin-bottom: 1rem;
    text-decoration: none;
    
}
a:hover{
    background: linear-gradient(300deg,rgb(255, 255, 255),rgb(29, 238, 116));
    color: black;
}
</style>