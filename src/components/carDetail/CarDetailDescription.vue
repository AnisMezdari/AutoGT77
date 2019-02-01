<template>
  <div class=" row CarDetailDescriptionContainer">
    <div class="col-xl-3 col-lg-12  col-md-12 col-xs-12 globalDescription">
      <div class="">
        <ul>
          <li> <b>Price</b> : {{car.price}}</li>
          <li> <b> Kilometer</b> : {{car.kilometer}}</li>
          <li> <b>Years</b> : {{car.year}}</li>
        </ul>
      </div>

    </div>
    <div class="col-xl-7 col-lg-12  col-md-12 col-xs-12 ">
      <p class =" descriptionCarDetail">
          {{car.description}}
      </p>
    </div>


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
        this.$http.get(process.env.API_LOCATION + "cars/" + this.$route.params.id).then(function(data){
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

  }

  .descriptionCarDetail{
    font-style: italic;
  }

</style>
