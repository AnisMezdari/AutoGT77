<template>
  <div  class="masterContainerHeader">
    <div class="row containerHeader">
      <HeaderLogo class = "col-6"> </HeaderLogo>
        <div class = " col-2">
        </div>
      <div class = " col-4 row">
        <HeaderLinkMain textValue = "Accueil"
                        icon = "homeBlanc.png"
                        iconName = "home icon"
                        class = " test col-4"
                        linkValue = "/#/">

       </HeaderLinkMain>
         <HeaderLinkMain textValue = "Marques"
                         icon = "carBlanc.png"
                         iconName = "car icon"
                         class = "col-4"
                         linkValue = "/#/">

         </HeaderLinkMain>
         <HeaderLinkMain textValue = "Contact"
                         icon = "gpsBlanc.png"
                         iconName = "gps icon"
                         class = "col-4"
                         linkValue = "/#/contact">

         </HeaderLinkMain>
      </div>

    </div>
</div>
</template>

<script>
  import HeaderLogo from '@/components/header/HeaderLogo'
  import HeaderLinkMain from '@/components/header/HeaderLinkMain'

    export default {
      name: 'HeaderContainer',
      components: {
       HeaderLogo,
       HeaderLinkMain,
     },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .containerHeader {
    width : 70%;
    margin: auto;
  }
  .masterContainerHeader{
    background-color: #304357;
    border-bottom: 30px solid #22313F;
  }
  .test {
    display: inline-block;
    vertical-align: middle;
    float: none;
  }
</style>
