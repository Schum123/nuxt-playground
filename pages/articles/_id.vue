<template>
    <div class="container">
        <div class="wrapper card">
            <div class="item img">
                <img class="banner-fluid" :src="backgroundImage" style="width: 100%;" />
            </div>
            <div class="item info article">
                <div class="article--info">
                    <h1>{{ heading }}</h1>
                    <h3>{{ company }}</h3>
                    <!--<p>{{ preamble }}</p> use later-->
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis tincidunt libero, ut sollicitudin
                        elit. Duis vel tincidunt lorem. In ante neque, auctor nec orci id, molestie malesuada purus. Aenean
                        vel scelerisque eros. Etiam non dolor commodo, tincidunt ante eu, molestie est. Orci varius natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc at neque tempor, viverra
                        purus nec, ornare massa. Sed rhoncus enim vel erat egestas, eget gravida mi sollicitudin.</p>
                </div>
                <div class="article--footer">
                    <nuxt-link to="/">Back to list</nuxt-link>
                </div>
            </div>
        </div>
        <maps name="google"></maps>
    </div>
</template>

<script>
import axios from 'axios'
import maps from '~/components/maps/maps'

export default {
    components: {
        maps
    },
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
  },
}
</script>

<style scoped>
    .card {
        min-height: 100%;
        background: white;
        -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
        box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    }
    
    .container {
        max-width: 90%;
        max-width: 1240px;
        margin: 0 auto;
        padding-top: 110px;
        font-family: sans-serif;
    }
    
    .wrapper {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-columns: 100%;
        padding: 20px;
        grid-gap: 20px;
    }
    
    .item.img {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 1;
    }
    
    .item.info {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 2;
    }
    
    .article h1,
    .article h2,
    .article h3 {
        margin-bottom: 20px;
    }
    
    .article h1 {
        line-height: 31px;
    }
    
    .article h3 {
        word-break: break-word;
        line-height: 24px;
    }
    
    .article p {
        margin-bottom: 20px;
    }
    
    .banner-fluid {
        max-width: 100%;
        height: auto;
    }
    
    img {
        vertical-align: middle;
        border-style: none;
    }
    /* Portrait tablet to landscape and desktop*/
    
    @media (min-width: 769px) {
        .wrapper {
            margin: 0 auto;
            grid-template-columns: 50% 50%;
            padding: 0;
            grid-gap: 0px;
        }
        .item {
            padding: 20px;
        }
        .item.img {
            grid-column-start: 2;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;
        }
        .item.info {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
</style>