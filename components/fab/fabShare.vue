<template>
    <div class="fab-toolbar" :id="id" v-on:click="shareIsActive" v-bind:class="{ active: isActive }">
        <ul class="toolbar">
            <li>
                <a role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                </a>
            </li>
            <li>
                <a role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                            fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
        </ul>

        <a role="button" class="fab" id="share">
            <i class="material-icons">share</i>
        </a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isActive: false,
            id: null
        }
    },
    mounted () {
        this.id = this._uid
    },
    methods: {
        shareIsActive: function () {
            this.isActive = !this.isActive
        },
    },
}
</script>

<style>
    .tile {
        background-color: #ffffff;
        border-radius: .1rem;
        -webkit-box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.2), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2);
        box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.2), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2);
        position: relative;
        width: 100%;
        min-width: 320px;
        max-width: 24rem;
        overflow: hidden;
    }
    
    .tile .tile-body {
        padding: 1rem 2rem 5rem 2rem;
    }
    
    .tile .tile-header {
        background-image: url("https://res.cloudinary.com/dgmilxzy7/image/upload/c_scale,w_500,o_75,b_rgb:748cab/v1496587375/Portfolio/KennyVann_JIDWA87324.jpg");
        background-position: center;
        background-size: cover;
        height: 11rem;
    }
    /**
 * Fab & toolbar
 */
    
    .fab-toolbar {
        --fab-shadow: 0 5px 15px 0 rgba(0, 0, 0, .25);
        --fab-width: 4rem;
        --fab-zindex: 100;
        --ft-ease-in: cubic-bezier(.42, 0, 1, 1);
        --ft-ease-in-2: cubic-bezier(.15, 0, 1, 1);
        --ft-ease-out: cubic-bezier(0, 0, .58, 1);
        --ft-ease-out-2: cubic-bezier(0, 0, .85, 1);
        position: absolute;
        text-align: center;
        right: 0;
        bottom: 0;
        overflow: hidden;
        width: calc(var(--fab-width) + 2rem);
        height: calc(var(--fab-width) + 1rem);
        -webkit-transition: width 0.2s 0.2s var(--ft-ease-out), height 0.2s 0.2s var(--ft-ease-out-2);
        transition: width 0.2s 0.2s var(--ft-ease-out), height 0.2s 0.2s var(--ft-ease-out-2);
    }
    
    .fab-toolbar.active {
        width: 100%;
        height: var(--fab-width);
        -webkit-transition: width 0.2s var(--ft-ease-in), height 0.2s var(--ft-ease-in-2);
        transition: width 0.2s var(--ft-ease-in), height 0.2s var(--ft-ease-in-2);
    }
    
    .fab-toolbar.active .fab::after {
        -webkit-transition: opacity .01s .2s, -webkit-transform .2s .2s;
        transition: opacity .01s .2s, -webkit-transform .2s .2s;
        transition: transform .2s .2s, opacity .01s .2s;
        transition: transform .2s .2s, opacity .01s .2s, -webkit-transform .2s .2s;
        -webkit-transform: scale(10);
        transform: scale(10);
        opacity: 1;
    }
    
    .fab-toolbar.active .toolbar {
        pointer-events: auto;
        -webkit-transition: opacity .01s .2s;
        transition: opacity .01s .2s;
        opacity: 1;
        z-index: calc(var(--fab-zindex) - 1);
    }
    
    .fab-toolbar .fab {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #748cab;
        -webkit-box-shadow: var(--fab-shadow);
        box-shadow: var(--fab-shadow);
        border-radius: 50%;
        color: #ffffff;
        height: var(--fab-width);
        width: var(--fab-width);
        z-index: var(--fab-zindex);
    }
    
    .fab-toolbar .fab:hover {
        background-color: #647fa1;
    }
    
    .fab-toolbar .fab::after {
        content: "";
        background-color: #748cab;
        width: var(--fab-width);
        height: var(--fab-width);
        border-radius: 50%;
        position: absolute;
        -webkit-transition: opacity .01s .2s, -webkit-transform .2s;
        transition: opacity .01s .2s, -webkit-transform .2s;
        transition: transform .2s, opacity .01s .2s;
        transition: transform .2s, opacity .01s .2s, -webkit-transform .2s;
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0;
    }
    
    .fab-toolbar .toolbar {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        pointer-events: none;
        top: 0;
        left: 0;
        right: 0;
        margin: 0;
        padding: 0;
        height: var(--fab-width);
        -webkit-transition: opacity .01s .2s;
        transition: opacity .01s .2s;
        opacity: 0;
        z-index: var(--fab-zindex);
    }
    
    .fab-toolbar .toolbar li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        list-style-type: none;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #ffffff;
    }
    
    .fab-toolbar .toolbar li svg {
        fill: #ffffff;
    }
    
    .fab-toolbar .toolbar li a {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    
    .fab-toolbar .toolbar li a:hover {
        background-color: #647fa1;
    }
    
    .fab-toolbar i {
        font-size: 2rem;
    }
</style>