<template>
  <div class=" row CarDetailDescriptionContainer">
    <div class="col-3 globalDescription">
      <ul>
        <li> <b>Price</b> : 4500€</li>
        <li> <b> Kilometer</b> : 125 000km</li>
        <li> <b>Years</b> : 2015</li>
      </ul>
    </div>
    <p class ="col-7">
      Verum ad istam omnem orationem brevis est defensio.
      Nam quoad aetas M. Caeli dare potuit isti suspicioni locum,
      fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita.
      Qui ut huic virilem togam deditšnihil dicam hoc loco de me; tantum sit,
      quantum vos existimatis; hoc dicam, hunc a patre continuo ad me esse deductum;
      nemo hunc M. Caelium in illo aetatis flore vidit nisi aut cum patre aut mecum
      aut in M. Crassi castissima domo, cum artibus honestissimis erudiretur.
    </p>
  </div>


</template>

<script>
    export default {
      name: 'CarDetailDescription',
      props:[],
      components: {
     },
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

</style>
