<template>
    <input :type="type" :name="name" :placeholder="placeholder" :id="id" v-model="inputVal" class="validate form-input" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: "text",
      required: true
    },
    required: {
      type: Boolean,
      default: false,
      required: false
    },
    inline: {
      type: Boolean,
      default: false,
      required: false
    },
    invalid: {
      type: Boolean,
      default: false,
      required: false
    },
    errorMessage: {
      type: String,
      required: false,
      default: null
    },
    value: {
      type: String,
      default: null,
      required: false
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      inputVal: this.value
    };
  },
  watch: {
    inputVal(val) {
      this.$emit("input", val);
    }
  },
  computed: {
    hasValue(value) {
      if (typeof this.value == "number") {
        return this.value !== null && typeof this.value !== "undefined";
      } else {
        return !!this.value;
      }
    }
  }
};
</script>