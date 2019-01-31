<template>
  <div class ="linkMain">
    <img   class = "icon" :src="require(`./assets/${icon}`)" :alt = "nameIcon"/>
    <a :href = "linkValue"> {{textValue}}</a>
  </div>
</template>

<script>
  export default {
    name: 'HeaderLinkMain',
    props:["icon","nameIcon","textValue","linkValue"],
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    font-size: 18px;
    text-decoration: none;
    color : white;
    font-style: italic;
    font-family: Impact;

  }
  div {

  }
  a:hover{
    color : #22313F;
  }
  .icon{
    width : 20px;
    margin-top: -5px;
  }
  .linkMain {
    margin-right: 15px;
  }

</style>
