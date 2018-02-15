<template>
    <div class="container">
        <div class="row">
          <div class="head-wrapper">
            <h1>{{ heading }}</h1>
          </div>
            <registerForm>
            </registerform>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import registerForm from "~/components/forms/registerForm";
export default {
  components: {
    registerForm
  },
  data() {
    return {
      active: false
    };
  },
  validate({ params }) {
    return !isNaN(+params.id);
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/activities/${+params.id}`
      );
      return data;
    } catch (e) {
      error({ message: "Activity not found", statusCode: 404 });
    }
  }
};
</script>

<style scoped>
.head-wrapper {
  background-color: #fff;
  padding: 30px;
  max-width: 40em;
  margin: 0 auto;
}
</style>