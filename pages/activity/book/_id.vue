<template>
    <div class="container">
        <div class="row">
            <h1>{{ heading }}</h1>
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