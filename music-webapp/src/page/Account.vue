<template>
  <div class="accont">
    <AccountsHeader></AccountsHeader>
    <AccountsCont></AccountsCont>
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import AccountsHeader from "../components/AccountsHeader.vue"
  import AccountsCont from "../components/AccountsCont.vue"
  import Footer from "../components/Footer.vue"
  export default {
    components:{
      AccountsHeader,
      AccountsCont,
      Footer
    }

  }


</script>


<style lang="scss" scoped>
  .accont{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    /*justify-content: space-between;*/
  }
</style>
