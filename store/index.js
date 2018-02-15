import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      gender: '',
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      city: '',
      zip: ''
    },
    mutations: {
      SET_GENDER(state, gender) {
        state.gender = gender;
      },
      SET_FIRSTNAME(state, firstname) {
        state.firstname = firstname;
      },
      SET_LASTNAME(state, lastname) {
        state.lastname = lastname;
      },
      SET_EMAIL(state, email) {
        state.email = email;
      },
      SET_ADDRESS(state, address) {
        state.address = address;
      },
      SET_CITY(state, city) {
        state.city = city;
      },
      SET_ZIP(state, zip) {
        state.zip = zip;
      },
    }
  })
};

export default store
