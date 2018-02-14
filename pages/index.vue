<template>
  <div>
    <div class="bg">
      <img src="~/assets/sport.png" />
    </div>
    <div class="autocomplete-wrapper">
      <no-ssr>
        <vue-google-autocomplete ref="address" id="map" name="test" class="form-control" placeholder="Please type your address"></vue-google-autocomplete>
      </no-ssr>
      <nuxt-link class="autocomplete-link button blue" :to="'/activities'">Find</nuxt-link>
    </div>
  </div>
</template>

<script>
//import VueGoogleAutocomplete from 'vue-google-autocomplete'
export default {
    data () {
        return {
          address: ''
        }
    }
}
</script>

<style scoped>
  .autocomplete-wrapper {
    position: relative;
    width: 600px;
    height: 600px;
    margin: 0 auto;
  }
  
  .button {
    display: inline-block;
    margin: 0.3em;
    padding: .8em 4em;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 3px;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    border: none;
    font-size: 15px;
    text-align: center;
  }
  
  .blue {
    background-color: #3AAFA9;
    color: white;
  }
  
  .bg {
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
  }
  
  .bg img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
  }
  
  .form-control {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: #FFF;
  }
  
  .form-control::-webkit-input-placeholder {
    color: #FFF;
  }
  
  .autocomplete-link {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    color: #FFF;
    text-align: center;
  }
</style>