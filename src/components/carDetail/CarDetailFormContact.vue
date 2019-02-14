<template>
  <div class="containerContactForm">
    <div class="informationContact">
      <h5 class = "titleContact">Vous êtes intéressé ? Contactez nous ! </h5>
      <h6 class = "numTel"> 07 81 31 11 28 </h6>
      <h6 class = "mail">eric.lau12@yahoo.fr</h6>
    </div>

    <h5 class = "titleContact titleMessage" > Envoyez un message </h5>
    <form class ="row">
      <div class="form-group col-12 ">
          <input type="text"  v-model="name" class="form-control formContact" placeholder="Nom">
          <input type="email"  v-model="email" class="form-control formContact" placeholder="Email">
          <textarea name="name"  v-model="message" class = "form-control textareaContact  formContact" placeholder="Message" rows="4" cols="70"></textarea>
          <button type="button" name="button" class = "btn btn-primary buttonContact" v-on:click="mail()" >Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
    export default {
      name: 'CarDetailFormContact',
      props:[],
      components: {
      },
      data() {
        return {
          name : '',
          email : '',
          message : '',
        }
      },
      methods : {
        mail : function() {
          axios.post(process.env.API_LOCATION + `cars/mail/` + this.$route.params.id, {
            name: this.name,
            email: this.email,
            message: this.message,
          })

         this.name = ''
         this.email = ''
         this.message = ''
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .titleContact{
        font-family: Impact;
        margin-bottom: 15px;
    }
    .titleMessage {
      margin-top: 40px;

    }
  .numTel  {
    font-style: italic;
  }
  .mail {
    font-style: italic;
  }

  .formContact{
    margin-bottom: 10px;
  }

  .buttonContact {
    background-color: #304357;
  }
</style>
