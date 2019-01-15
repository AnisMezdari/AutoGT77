<template>
  <div>
    <HeaderContainer> </HeaderContainer>
    <HomeContainer></HomeContainer>
  </div>
</template>

<script>
  import HeaderContainer from '@/components/header/HeaderContainer'
  import HomeContainer from '@/components/home/HomeContainer'
  export default {
    name: 'Index',
    components: {
     HeaderContainer,
     HomeContainer
   },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
