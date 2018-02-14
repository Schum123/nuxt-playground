<template>
  <div class="wrapper">
    <sngHeader v-if="!$route.path === '/'"></sngheader>
    <nuxt/>
    <sngFooter v-if="!$route.path === '/'"></sngfooter>
  </div>
</template>

<script>
import sngHeader from '~/components/layout/sngHeader'
import sngFooter from '~/components/layout/sngFooter'
export default {
  components: {
    sngHeader,
    sngFooter
  }
}
</script>

<style>
  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }
  
  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }
  
  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }
  
  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>