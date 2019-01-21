<template>
  <div>
    <HeaderContainer> </HeaderContainer>
    <CarList></CarList>
    <FooterContainer> </FooterContainer>
  </div>
</template>

<script>
  import HeaderContainer from '@/components/header/HeaderContainer'
  import CarList from '@/components/carList/CarList'
  import FooterContainer from '@/components/footer/FooterContainer'
  export default {
    name: 'IndexCars',
    components: {
     HeaderContainer,
     CarList,
     FooterContainer
   },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
