<template>
  <div class="">
    <div class="titleContact">
      <h3> Présentation </h3>
    </div>
    <div class = "row">
      <div class="col-2">
        <img  class ="contructorImg animated 1 bounceInLeft delay-0s"
              :src="require(`./assets/${logoEntreprise}`)"
              :alt = "logoDescription"/>
      </div>


      <p class = "col-6 desciptionContact">
        AutoGT 77 est une jeune entreprise de vente de véhicule créé fin 2018, nous vendons des véhicule de très bonne qualité,
        avec le prix le plus bas possible.  Grâce à nos relations, nous avons accès a des offres très avantageuses pour vous,
        nous choisissons seulement des voitures de qualité avec une durée de vie très hautes.
        n'hésitez pas à nous contacter pour toutes informations complémentaire.
      </p>
      <div class="col-1">
      </div>
      <div class="col-3 addressContact">
        <h5> <b> Adresse : </b> 9 rue de la tuilerie </h5>
        <h5> <b> Ville : </b> Coutevroult </h5>
        <h5> <b>Code postal  : </b> 77580 </h5>
        <h5> <b>Téléphone :  </b> 06 25 29 78 64</h5>
        <h5> <b>Email : </b> mezdari.anis@gmail.com</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContactDescription',
      props:["logoEntreprise","logoDescription"],
    components: {

   },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contructorImg{
  width : 100%;
}
h5 {
font-size: 15px;
}
.titleContact{
  margin-bottom: 50px;
    font-family: Impact;
}
h3 {
  color : #22313F
}
</style>
