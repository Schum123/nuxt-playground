<template>
    <div class="wrapper" style="margin-bottom: 30px">
        <form class="col s12" id="reg-form">
            <div class="row">
                <div class="input-field">
                    <inputField id="first_name" name="name" type="email" placeholder="" v-model="inputValue" required>
                    </inputfield>
                    <label for="first_name" v-bind:class="{ active: inputValue }">First Name</label>
                </div>
                <div class="input-field">
                    <input id="last_name" type="text" class="validate form-input" name="lastname" required v-model="lastname">
                    <label for="last_name">Last Name</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" class="validate form-input" required>
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="address" type="text" class="validate form-input" minlength="1" required>
                    <label for="address">Address</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="city" type="text" class="validate form-input" minlength="1" required>
                    <label for="city">city</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="zip" type="text" class="validate form-input" minlength="1" required>
                    <label for="zip">zip</label>
                </div>
            </div>
            <div class="row cf">
                <div class="input-field col s6">
                    <div class="gender-male">
                        <input class="with-gap" name="gender" value="male" type="radio" id="male" v-model="gender" required />
                        <label for="male">Male</label>
                    </div>
                    <div class="gender-female">
                        <input class="with-gap" name="gender" value="female" type="radio" id="female" v-model="gender" required />
                        <label for="female">Female</label>
                    </div>
                </div>

                <div class="input-field col s6">
                    <button class="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Register
            <i class="material-icons right">done</i>
          </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import inputField from "~/components/forms/inputs/inputField";
export default {
  components: {
    inputField
  },
  data() {
    return {
      inputValue: ""
    };
  },
  computed: {
    gender: {
      get() {
        return this.$store.state.gender;
      },
      set(value) {
        this.$store.commit("SET_GENDER", value);
      }
    },
    firstname: {
      get() {
        return this.$store.state.firstname;
      },
      set(value) {
        this.$store.commit("SET_FIRSTNAME", value);
      }
    },
    lastname: {
      get() {
        return this.$store.state.lastname;
      },
      set(value) {
        this.$store.commit("SET_LASTNAME", value);
      }
    }
  }
};
</script>

<style scoped>
.btn-large i {
  font-size: 1.6rem;
}

.btn i,
.btn-large i,
.btn-floating i,
.btn-large i,
.btn-flat i {
  font-size: 1.3rem;
  line-height: inherit;
}

i.right {
  float: right;
  margin-left: 15px;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.right {
  float: right !important;
}

.cf:after {
  content: "";
  display: table;
  clear: both;
}

.row .col.s6 {
  width: 50%;
  margin-left: 0;
  float: left;
}

.btn-large {
  height: 54px;
  line-height: 56px;
}

.btn,
.btn-large {
  text-decoration: none;
  color: #fff;
  background-color: #26a69a;
  text-align: center;
  letter-spacing: 0.5px;
  -webkit-transition: 0.2s ease-out;
  -moz-transition: 0.2s ease-out;
  -o-transition: 0.2s ease-out;
  -ms-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
  cursor: pointer;
}

.btn,
.btn-large,
.btn-flat {
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 50px;
  line-height: 36px;
  outline: 0;
  padding: 0 2rem;
  text-transform: uppercase;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
}

.z-depth-1,
nav,
.card-panel,
.card,
.toast,
.btn,
.btn-large,
.btn-floating,
.dropdown-content,
.collapsible,
.side-nav {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.wrapper {
  background-color: #fff;
  padding: 30px;
  max-width: 40em;
  margin: 0 auto;
}

.col.s6 > .btn {
  width: 100%;
}

.gender-male,
.gender-female {
  display: inline-block;
}

.gender-female {
  margin-left: 35px;
}

radio:required {
  border-color: red;
}

.container {
  animation: showUp 0.5s cubic-bezier(0.18, 1.3, 1, 1) forwards;
}

@keyframes showUp {
  0% {
    transform: scale(0);
  }
  100% {
    transoform: scale(1);
  }
}

.row {
  margin-bottom: 10px;
}

.ngl {
  position: absolute;
  top: -20px;
  right: -20px;
}
</style>