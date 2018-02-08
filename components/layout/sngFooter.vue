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

<style scoped>
    .footer {
        position: relative;
        width: 100%;
        min-height: 230px;
        background: #000000;
        padding: 10px 0;
        z-index: 1;
    }
    
    .footer .social-area {
        margin-top: 90px;
        width: 40%;
    }
    
    .footer .credits {
        font-family: 'ProximaNovaBlack', helvetica, arial, sans-serif;
        font-weight: normal;
    }
    
    .footer .social-area ul {
        z-index: 1;
        display: block;
        width: 100%;
        padding: 0;
        text-align: right;
        position: absolute;
        right: 7%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    .footer .social-area ul li {
        display: inline-block;
        text-align: center;
        line-height: 0;
    }
    
    .footer .credits p {
        position: absolute;
        text-align: left;
        text-transform: uppercase;
        font-size: 20px;
        line-height: 1px;
        padding: 0;
        left: 9%;
    }
    
    .slice-footer {
        width: 100px;
        height: 135px;
        margin-top: -45px;
    }
    
    .footer-white {
        color: #fff;
        font-weight: normal;
    }
    
    .footer .social-area ul li a {
        font-size: 28px;
        font-weight: 600;
        text-transform: uppercase;
        color: #FFFFFF;
        text-decoration: none;
    }
    
    .footer .social-area ul li a span {
        display: none;
    }
    
    .footer .social-area ul li a i {
        /* position: absolute; */
        display: block;
        /* right: 0; */
        margin-left: 20px;
        /* width: 58px; */
        padding: 0 20px;
        text-align: center;
    }
    
    .footer .credits {
        position: absolute;
        width: 100%;
        color: #474747;
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        line-height: 1px;
        padding: 0;
        /* left: 9%; */
    }
    
    @media screen and (max-width: 59.9999em) {
        .footer {
            padding: 50px 0;
        }
        .footer {
            min-height: 100px;
        }
        .footer .social-area {
            display: none;
        }
        .footer .credits {
            font-size: 14px;
            margin-top: 0;
        }
        .shr-btn-facebook {
            background: none;
        }
        .shr-btn-instagram {
            background: none;
        }
        .shr-btn-behance {
            background: none;
        }
        .shr-btn-soundcloud {
            background: none;
        }
        .footer .credits p {
            text-align: center;
        }
        .footer .credits p {
            font-family: 'ProximaNovaBlack', helvetica, sans-serif;
            text-align: center;
            left: 0;
            width: 100%;
        }
        .slice-footer {
            display: none;
        }
    }
</style>