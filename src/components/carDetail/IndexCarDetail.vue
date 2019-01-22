<template>
  <div>
    <HeaderContainer> </HeaderContainer>
    <CarDetailContainer></CarDetailContainer>
    <FooterContainer> </FooterContainer>
  </div>
</template>

<script>
  import HeaderContainer from '@/components/header/HeaderContainer'
  import CarDetailContainer from '@/components/carDetail/CarDetailContainer'
  import FooterContainer from '@/components/footer/FooterContainer'
  export default {
    name: 'IndexCarDetail',
    components: {
     HeaderContainer,
     CarDetailContainer,
     FooterContainer
   },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
