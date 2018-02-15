import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      gender: '',
      firstname: '',
      lastname: '',
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
    }
  })
};

export default store
