<template>
  <div class="containerContactForm">
    <h3 class = "titleContact">Contactez-nous</h3>
    <form class ="row">
      <div class="form-group col-6">
          <input type="text" class="form-control" placeholder="Nom">
      </div>
      <div class="form-group col-6">
        <input type="email" class="form-control test" placeholder="Email">
      </div>

      <textarea name="name" class = "form-control textareaContact" placeholder="Message" rows="8" cols="70"></textarea>
    </form>
  </div>

</template>

<script>
  export default {
    name: 'ContactFrom',
    components: {
   },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

::placeholder {
color : rgb(153, 153, 153);
opacity: 0.6;
font-size: 15px;
}
.containerContactForm{
  width : 70%;
  margin-top: 60px;
}
.titleContact{
  margin-bottom: 30px;
    font-family: Impact;
}
.textareaContact{
  width : 97%;
  margin : auto;
}
</style>
