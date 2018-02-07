<template>
    <header class="cf" v-bind:class="[scrolled ? smallClass: '']" v-on:scroll="handleScroll">
        <nav>
            <h1 class="logo">Logo</h1>
        </nav>
    </header>
</template>

<script>
export default {
    data () {
        return { 
            search: "",
            scrolled: false,
            smallClass: 'small',
        };
    },
  methods: {
    handleScroll () {
        this.scrolled = window.scrollY > 0
    }
  },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style>
    .cf:before,
    .cf:after {
        content: " ";
        display: table;
    }
    
    .cf:after {
        clear: both;
    }
    
    .cf {
        *zoom: 1;
    }
    /* Header Styles */
    
    header {
        text-align: center;
        width: 100%;
        height: 100px;
        background: #ee6e73;
        position: fixed;
        z-index: 2;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    }
    
    .small {
        height: 50px;
    }
    
    .small .logo {
        font-size: 2.6em;
        margin-top: 5px;
    }
    
    nav {
        width: 80%;
        margin: 0 auto;
        height: 100%;
        display: table;
    }
    
    .logo {
        font-size: 4em;
        font-weight: 400;
        color: #FFF;
        display: table-cell;
        vertical-align: middle;
    }
    /* Transitions */
    
    header,
    .logo {
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
</style>