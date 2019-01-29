<template>
  <div>
    <HeaderContainer> </HeaderContainer>
    <HomeContainer></HomeContainer>
    <FooterContainer> </FooterContainer>
  </div>
</template>

<script>
  import HeaderContainer from '@/components/header/HeaderContainer'
  import HomeContainer from '@/components/home/HomeContainer'
  import FooterContainer from '@/components/footer/FooterContainer'
  export default {
    name: 'Index',
    components: {
     HeaderContainer,
     HomeContainer,
     FooterContainer
   },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
