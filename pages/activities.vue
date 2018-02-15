<template>
  <div class="page-wrap">
    <form class="inputbox">
      <input required="required" type="text" v-model="search" />
      <button class="del" type="reset" v-on:click="clearSearch"></button>
    </form>
    <div class="band">
      <div class="item" v-bind:class="{ featured: article.isFeatured }" v-for="article in filteredArticles" :key="article.id">
        <nuxt-link class="card" :to="'/activity/'+article.id">
          <div class="stories-item-tag" v-if="article.isFeatured">Featured</div>
          <div class="thumb" v-bind:style="{ 'background-image': 'url(' + article.backgroundImage + ')' }"></div>
          <article>
            <h1>{{ article.heading }}</h1>
            <p v-if="article.preamle != ''">{{ article.preamble }}</p>
            <span>{{ article.company }}</span>       
          </article>
        </nuxt-link>
        <fabShare></fabshare>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import fabShare from "~/components/fab/fabShare";

export default {
  components: {
    fabShare
  },
  data() {
    return {
      search: ""
    };
  },
  async asyncData({error}) {
    try {
    const { data } = await axios.get("http://localhost:3000/activities");
    return { articles: data };
    }
    catch (e) {
      error({ message: "Activities not found", statusCode: 404 });
    }
  },
  methods: {
    clearSearch: function() {
      this.search = "";
    }
  },
  computed: {
    filteredArticles: function() {
      var textSearch = this.search;
      return this.articles.filter(function(el) {
        return (
          el.company.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1 ||
          el.heading.toLowerCase().indexOf(textSearch.toLowerCase()) !== -1
        );
      });
    }
  }
};
</script>