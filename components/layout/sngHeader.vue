<template>
    <header class="cf" v-bind:class="[scrolled ? smallClass: '']" v-on:scroll="handleScroll">
        <nav>
            <h1 class="logo">Logo</h1>
        </nav>
    </header>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      scrolled: false,
      smallClass: "small"
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
