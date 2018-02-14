<template>
    <footer class="footer">
        <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
        <div class="social-area">
            <ul>
                <li><a href="https://www.facebook.com/blackpizza?fref=ts" target="_blank" title="Join us on Facebook" class="shr-btn-facebook"><span>Facebook</span><i class="icon-facebook"></i></a></li>
                <li><a href="http://instagram.com/blackpizzastudio" target="_blank" title="Join us on Instagram" class="shr-btn-instagram"><span>Instagram</span><i class="icon-instagram"></i></a></li>
                <li><a href="https://www.behance.net/blackpizza" target="_blank" title="Join us on Behance" class="shr-btn-behance"><span>Behance</span><i class="icon-behance"></i></a></li>
                <li><a href="https://soundcloud.com/dailydose-sound" target="_blank" title="Join us on Soundcloud" class="shr-btn-soundcloud"><span>Soundcloud</span><i class="icon-soundcloud"></i></a></li>
            </ul>
        </div>
        <div class="credits">
            <p>© 2018 <span class="footer-white">Text</span></p><span class="slice-footer">LOGO</span>
            <!--<img class="slice-footer" src="http://blackpizza.com/wp-content/uploads/2014/12/slice-pizza.png"
                alt="Pizz and love">-->
        </div>
    </footer>
</template>

<script>
    export default {
        data () {
            return {
                showFooter: null
            }
        }
    }
</script>