<template>
    <div class="container">
        <div>
            <img class="banner-fluid" :src="backgroundImage" />
        </div>
        <div>
            <h2>Details</h2>
            <h1>{{ heading }}</h1>
            <h3>{{ company }}</h3>
            <p>{{ preamble }}</p>
            <nuxt-link to="/">List of articles</nuxt-link>
        </div>
    </div>
</template>

{ id: 1, href: "https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281",
backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png", heading: "Notes From Behind the Firewall:
The State of Web Design in China", preamble: "", company: "Kendra Schaefer", isFeatured: true },

<script>
import axios from 'axios'

export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(`http://localhost:3000/articles/${+params.id}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        max-width: 1240px;
        margin: 0 auto;
        padding-top: 110px;
        font-family: sans-serif;
    }
    
    .container > div {
        flex: 1;
        width: 100%;
        max-width: 100%;
    }
    
    .article h1 {
        margin-top: 10px;
    }
    
    .banner-fluid {
        max-width: 100%;
        height: auto;
    }
    
    img {
        vertical-align: middle;
        border-style: none;
    }
    /* Portrait tablet to landscape and desktop */
    
    @media (min-width: 769px) {
        .container {
            flex-direction: row-reverse;
        }
        .container > div {
            flex: 1 1 50%;
            max-width: 50%;
            width: 50%;
        }
    }
</style>