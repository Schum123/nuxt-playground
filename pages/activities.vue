<template>
    <div style="padding-top: 160px;">
        <form class="inputbox">
            <input required="required" type="text" v-model="search" />
            <button class="del" type="reset" v-on:click="clearSearch"></button>
        </form>
        <div class="band">
            <div class="item" v-bind:class="{ featured: article.isFeatured }" v-for="article in filteredArticles" :key="article.id">
                <a v-bind:href="article.href" class="card">
                    <div class="stories-item-tag" v-if="article.isFeatured">Featured</div>
                    <div class="thumb" v-bind:style="{ 'background-image': 'url(' + article.backgroundImage + ')' }"></div>
                    <article>
                        <h1>{{ article.heading }}</h1>
                        <p v-if="article.preamle != ''">{{ article.preamble }}</p>
                        <span>{{ article.company }}</span>
                    </article>
                </a>
            </div>
        </div>
        <nuxt-child/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            search: '',
            articles: [
                {
                    id: 1,
                    href: "https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281",
                    backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png",
                    heading: "Notes From Behind the Firewall: The State of Web Design in China",
                    preamble: "",
                    company: "Kendra Schaefer",
                    isFeatured: true,
                },
                {
                    id: 2,
                    href: "https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338",
                    backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg",
                    heading: "5 Inspirational Business Portraits and How to Make Your Own",
                    preamble: "",
                    company: "Rose",
                    isFeatured: false,
                },
                {
                    id: 3,
                    href: "https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139",
                    backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg",
                    heading: "5 Inspirational Business Portraits and How to Make Your Own",
                    preamble: "",
                    company: "Marie Gardiner",
                    isFeatured: false,
                },
                {
                    id: 4,
                    href: "https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826",
                    backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png",
                    heading: "How to Code a Scrolling “Alien Lander” Website",
                    preamble: "We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “AlienLander” making its way to touch down.",
                    company: "Kezz Bracey",
                    isFeatured: false,
                },
                {
                    id: 5,
                    href: "https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724",
                    backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg",
                    heading: "Created by You, July Edition",
                    preamble: "Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community!",
                    company: "Melody Nieves",
                    isFeatured: false,
                },
                {
                    id: 6,
                    href: "https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045",
                    backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png",
                    heading: "How to Conduct Remote Usability Testing",
                    preamble: "",
                    company: "Harry Brignull",
                    isFeatured: false,
                },
                 {
                    id: 7,
                    href: "https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852",
                    backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg",
                    heading: "International Artist Feature: Malaysia",
                    preamble: "",
                    company: "Mary Winkler",
                    isFeatured: false,
                },
            ]
            }
        },
         methods: {
             clearSearch: function () {
                 this.search = "";
             }
         },
        computed:
        {
            filteredArticles:function()
            {
                var self=this;
                return this.articles.filter(function(art){return art.heading.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
            }
        }
    }
</script>

<style>
    .stories-item-tag {
        background: #F2F2F2;
        color: #373737;
    }
    
    .stories-item-tag {
        padding: 10px 25px 10px 15px;
        white-space: nowrap;
        position: absolute;
        top: 0;
        right: 0;
        text-transform: uppercase;
        line-height: 1;
        width: auto;
        height: auto;
        text-align: center;
        font-size: 18px;
        z-index: 1;
    }
    
    .stories-item-tag:before {
        border-color: transparent #F2F2F2 transparent transparent;
    }
    
    .stories-item-tag:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 100%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 40px 38px 0;
    }
    
    .item {
        position: relative;
        transition: all 1s ease;
        -webkit-transition: all 1s ease;
    }
    
    .band {
        width: 90%;
        max-width: 1240px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: 20px;
    }
    
    @media only screen and (min-width: 500px) {
        .band {
            grid-template-columns: 1fr 1fr;
        }
        .featured {
            grid-column: 1/ span 2;
        }
        .featured h1 {
            font-size: 30px;
        }
    }
    
    @media only screen and (min-width: 850px) {
        .band {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
    /* card */
    
    .card {
        min-height: 100%;
        background: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: #444;
        position: relative;
        top: 0;
        transition: all .1s ease-in;
    }
    
    .card:hover {
        top: -2px;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    }
    
    .card article {
        padding: 20px;
        display: flex;
        flex: 1;
        justify-content: space-between;
        flex-direction: column;
    }
    
    .card .thumb {
        padding-bottom: 60%;
        background-size: cover;
        background-position: center center;
    }
    
    .card p {
        flex: 1;
        /* make p grow to fill available space*/
        line-height: 1.4;
        margin: 1em 0;
    }
    /* typography */
    
    h1 {
        font-size: 20px;
        margin: 0;
        color: #333;
    }
    
    .card span {
        font-size: 12px;
        font-weight: bold;
        color: #999;
        text-transform: uppercase;
        letter-spacing: .05em;
        margin: 2em 0 0 0;
    }
    
    .inputbox {
        height: 50px;
        width: 300px;
        position: relative;
        top: 50%;
        left: 50%;
        margin-bottom: 20px;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    
    .inputbox input {
        width: 100%;
        min-width: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 16px;
        padding: 16.5px 0;
        border: 0;
        background: none;
        width: 50px;
        position: absolute;
        top: 0;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        border-radius: 100%;
        -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out, padding 0.2s;
        transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out, padding 0.2s;
        -webkit-transition-delay: 0s, 0.4s, 0s;
        transition-delay: 0s, 0.4s, 0s;
        -webkit-box-shadow: 0 0 0 1px currentColor;
        box-shadow: 0 0 0 1px currentColor;
        color: inherit;
        cursor: pointer;
        padding: 16.5px 0;
        padding-right: 50px;
        font-weight: lighter;
        font-family: "Roboto";
    }
    
    .inputbox input:focus,
    .inputbox input:valid {
        width: 100%;
        -webkit-transition-delay: 0.4s, 0s, 0.4s;
        transition-delay: 0.4s, 0s, 0.4s;
        outline: 0;
        border-radius: 0;
        cursor: text;
        padding-left: 16.5px;
    }
    
    .inputbox input:focus + .del,
    .inputbox input:valid + .del {
        pointer-events: all;
        left: calc(100% - 25px);
        -webkit-transition-delay: 0.4s;
        transition-delay: 0.4s;
    }
    
    .inputbox input:focus + .del:focus,
    .inputbox input:valid + .del:focus {
        -webkit-box-shadow: 0 0 0 1px currentColor;
        box-shadow: 0 0 0 1px currentColor;
        height: 37.5px;
        width: 37.5px;
    }
    
    .inputbox input:focus + .del:before,
    .inputbox input:valid + .del:before {
        -webkit-transform: translate(-50%, -50%) rotate(-45deg) scaleY(0.7);
        transform: translate(-50%, -50%) rotate(-45deg) scaleY(0.7);
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
    }
    
    .inputbox input:focus + .del:after,
    .inputbox input:valid + .del:after {
        -webkit-transform: translate(-50%, -50%) rotate(45deg) scaleY(0.7);
        transform: translate(-50%, -50%) rotate(45deg) scaleY(0.7);
        -webkit-transition-delay: 0.2s;
        transition-delay: 0.2s;
    }
    
    .inputbox .del {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        height: 50px;
        width: 50px;
        padding: 0;
        background: none;
        border-radius: 100%;
        border: 0;
        pointer-events: none;
        -webkit-transition: left 0.4s ease-in-out;
        transition: left 0.4s ease-in-out;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
        color: inherit;
        cursor: pointer;
    }
    
    .inputbox .del:focus {
        outline: none;
    }
    
    .inputbox .del:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        background: currentColor;
        width: 1px;
        height: 37.5px;
        -webkit-transform: translate(32.25px, 32.25px) translate(-50%, -50%) rotate(-45deg) scaleY(1);
        transform: translate(32.25px, 32.25px) translate(-50%, -50%) rotate(-45deg) scaleY(1);
        -webkit-transition: -webkit-transform 0.2s ease-in-out;
        transition: -webkit-transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
        -webkit-transition-delay: 0.6s;
        transition-delay: 0.6s;
    }
    
    .inputbox .del:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        background: currentColor;
        width: 1px;
        height: 37.5px;
        -webkit-transform: translate(-50%, -50%) rotate(45deg) scaleY(0);
        transform: translate(-50%, -50%) rotate(45deg) scaleY(0);
        -webkit-transition: -webkit-transform 0.2s ease-in-out;
        transition: -webkit-transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
        -webkit-transition-delay: 0.4s;
        transition-delay: 0.4s;
    }
</style>