<template>
    <div>
        <section class="probootstrap-cover mb-5 overflow-hidden relative" style="background-image: url('/assets/images/bg_1.jpg');" data-stellar-background-ratio="0.5"
            id="section-home">
            <div class="overlay"></div>
            <div class="container">
                <div class="row align-items-center text-center">
                    <div class="col-md">
                        <h2 class="heading mb-2 display-4 font-light probootstrap-animate-custom">Group Tour asd</h2>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row text-center mb-5 ">
                    <div class="col-md-12">
                        <h2 class="display-4 border-bottom probootstrap-section-heading">Top Tour Package</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-3">
                        <a href="#">
                            <img src="/assets/images/package/AUSTRALIA-1-300x300.jpg" alt="Free Template by Techstring IT"
                                class="img-fluid">
                            <div class="probootstrap-text mt-3">
                                <h5>Australia Tour</h5>
                                <span>$15,000.00</span>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-3">
                        <a href="#">
                            <img src="/assets/images/package/CANADA-01-300x300.jpg" alt="Free Template by Techstring IT"
                                class="img-fluid">
                            <div class="probootstrap-text mt-3">
                                <h5>Canada Tour</h5>
                                <span>$1,25,000.00</span>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-3">
                        <a href="#">
                            <img src="/assets/images/package/BALI-TOUR-300x300.jpg" alt="Free Template by Techstring IT"
                                class="img-fluid">
                            <div class="probootstrap-text mt-3">
                                <h5>Bali Tour</h5>
                                <span>$25,000.00</span>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-3">
                        <a href="#">
                            <img src="/assets/images/package/DUBAIEGYPT-300x300.jpg" alt="Free Template by Techstring IT"
                                class="img-fluid">
                            <div class="probootstrap-text mt-3">
                                <h5>Dubai Egypt Tour</h5>
                                <span>$75,000.00</span>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>

    </div>

</template>

<script>
    export default {
        name: 'Instant',
        mounted() {

            const script8 = document.createElement('script');
            script8.src = './assets/js/main.js';
            document.head.appendChild(script8);

            window.scrollTo(0, 0);
        }

    }
</script>