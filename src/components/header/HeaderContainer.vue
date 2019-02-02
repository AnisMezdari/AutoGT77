<template>
  <div  class="masterContainerHeader">
    <div class="containerHeader row">
      <HeaderLogo class = " col-xl-8 col-lg-12  col-sm-12"> </HeaderLogo>

      <div class = "containerLineLinkMain row ">
          <HeaderLinkMain textValue = "Accueil"
                          icon = "homeBlanc.png"
                          iconName = "home icon"
                          linkValue = "/#/"

                          >

         </HeaderLinkMain>
           <HeaderLinkMain textValue = "Marques"
                           icon = "carBlanc.png"
                           iconName = "car icon"
                           linkValue = "/#/"
                           >

           </HeaderLinkMain>
           <HeaderLinkMain textValue = "Contact"
                           icon = "gpsBlanc.png"
                           iconName = "gps icon"
                           linkValue = "/#/contact"
                           >

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
    width : 80%;
    margin: auto;
  }
  .masterContainerHeader{
    background-color: #304357;
    border-bottom: 30px solid #22313F;
  }

  .containerLineLinkMain{
    text-align: center;
  }
  .linkMain{
    /* margin-right: 20px; */
  }
  .containerLineLinkMain {
    text-align: center;
    margin: auto;
  }
</style>
