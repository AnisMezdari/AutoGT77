<template>
  <div class ="HomerContainer">
    <div class ="row">
      <HomeImageConstructor v-for = "marque in marques" :key = "marque.id" class ="col-4"
                            :constructorImage = "marque.image"
                            :constructorName = "marque.title"
                            :linkMarque = "marque._id" >
      </HomeImageConstructor>
    </div>
  </div>
</template>

<script>
  import HomeImageConstructor from '@/components/home/HomeImageConstructor'

    export default {
      name: 'HomeContainer',
      components: {
       HomeImageConstructor,
     },
     data() {
       return {
         marques : ''
       }
     },
     created(){

       this.$http.get("http://localhost:4000/marques").then(function(data){
         this.marques = data.body
         console.log(this.marques)
       });
     }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.HomerContainer{
  width : 60%;
  margin : auto;

  /* background-color: #FAFAFA; */
}

</style>
