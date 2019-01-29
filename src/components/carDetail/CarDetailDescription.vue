<template>
  <div class=" row CarDetailDescriptionContainer">
    <div class="col-3 globalDescription">
      <ul>
        <li> <b>Price</b> : {{car.price}}</li>
        <li> <b> Kilometer</b> : {{car.kilometer}}</li>
        <li> <b>Years</b> : {{car.year}}</li>
      </ul>
    </div>
    <p class ="col-7 descriptionCarDetail">
        {{car.description}}
    </p>

    <div class="test">
    </div>

  </div>


</template>

<script>
    export default {
      name: 'CarDetailDescription',
      props:[],
      components: {
      },
      methods: {
      },
      data() {
        return {
          car : ''
        }
      },
      created(){
        this.$http.get("http://localhost:4000/cars/"+this.$route.params.id).then(function(data){
         this.car = data.body;
        });
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .CarDetailDescriptionContainer{

    font-size: 15px;
    font-family: Cambria;
    margin-top: 15px;
  }
  .globalDescription{
    margin-right: -50px;
  }

  .descriptionCarDetail{
    font-style: italic;
  }

</style>
