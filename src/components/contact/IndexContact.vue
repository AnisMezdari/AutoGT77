<template>
  <div>
    <HeaderContainer> </HeaderContainer>
    <ContactContainer></ContactContainer>
    <FooterContainer> </FooterContainer>
  </div>
</template>

<script>
import HeaderContainer from '@/components/header/HeaderContainer'
import ContactContainer from '@/components/contact/ContactContainer'
import FooterContainer from '@/components/footer/FooterContainer'
    export default {
      name: 'IndexContact',
      components: {
        HeaderContainer,
        ContactContainer,
        FooterContainer
     },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
