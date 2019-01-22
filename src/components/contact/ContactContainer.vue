<template>
  <div>
    <ContactDescription logoEntreprise = "logoContact.png"
                        logoDescription = "Logo entreprise">
    </ContactDescription>
    <ContactForm> </ContactForm>
  </div>
</template>

<script>
import ContactDescription from '@/components/contact/ContactDescription'
import ContactForm from '@/components/contact/ContactForm'
    export default {
      name: 'ContactContainer',
      components: {
        ContactDescription,
        ContactForm
     },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    margin: auto;
    width : 85%;
    margin-top: 30px;
  }
</style>
