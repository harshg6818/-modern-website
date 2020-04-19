<template>
  <div>
    <section class="hirexp-nav">
      <nav class="navbar fixed-top navbar-expand-lg">
        <div class="container">
          <div class="hirexp-logo">
            <img src="../assets/logo-light.png" alt="hirexp-logo" />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkupRoi"
            aria-controls="navbarNavAltMarkupRoi"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkupRoi">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="">Home</a>
            </div>
          </div>
        </div>
      </nav>
    </section>

    <section class="hirexp-header">
      <div class="main">
        <div class="slider" id="slider">
          <div class="slides current">
            <div class="slide">
              <img src="../assets/images/home/slide-1.jpg" alt="slide-1" />
            </div>
            <div class="slidesInfo">
              <div class="line"></div>
              <h1>Slide One</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div class="slides">
            <div class="slide">
              <img src="../assets/images/home/2.jpg" />
            </div>
            <div class="slidesInfo">
              <div class="line"></div>
              <h1>Slide Two</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div class="slides">
            <div class="slide">
              <img src="../assets/images/home/3.jpg" />
            </div>
            <div class="slidesInfo">
              <div class="line"></div>
              <h1>Slide Three</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div class="slides">
            <div class="slide">
              <img src="../assets/images/home/4.jpg" />
            </div>
            <div class="slidesInfo">
              <div class="line"></div>
              <h1>Slide Four</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div class="sliderBtn">
          <a class="prev" id="prev">&lt;</a>
          <a class="next" id="next">&gt;</a>
        </div>
      </div>
    </section>

    <section class="hirexp-clients">
      <div class="container">
        <div class="clients-heading">
          Enterprises that we are proud to associate with.
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 pt-3">
            <div class="client-img">
              <img src="../assets/images/home/comviva.png" />
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 pt-3">
            <div class="client-img">
              <img src="../assets/images/home/cpplus.png" />
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 pt-3">
            <div class="client-img">
              <img src="../assets/images/home/philips.png" />
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2 pt-3">
            <div class="client-img">
              <img src="../assets/images/home/policy.png" />
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
            <div class="client-img">
              <img src="../assets/images/home/sapient.png" />
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-2">
            <div class="client-img">
              <img src="../assets/images/home/swiggy.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",

  mounted() {
    window.onload = function() {
      const prevBtn = document.getElementById("prev");
      const nextBtn = document.getElementById("next");

      const automaticSlide = setInterval(() => nextSlide(), 4000);

      prevBtn.addEventListener("click", function() {
        clearInterval(automaticSlide);
        prevSlide();
      });
      nextBtn.addEventListener("click", function() {
        clearInterval(automaticSlide);
        nextSlide();
      });
    };
    let slideNo = 0;
    const prevSlide = () => {
      const slider = document.getElementById("slider");
      const slides = slider.getElementsByClassName("slides");
      const currentSlide = slider.querySelector(".slides.current");

      // logic
      currentSlide.classList.remove("current");
      if (slideNo == 0) {
        slideNo = slides.length - 1;
      } else {
        slideNo = slideNo - 1;
      }
      slides[slideNo].classList.add("current");
    };
    const nextSlide = () => {
      const slider = document.getElementById("slider");
      const slides = slider.getElementsByClassName("slides");
      const currentSlide = slider.querySelector(".slides.current");

      // logic
      currentSlide.classList.remove("current");
      if (slideNo == slides.length - 1) {
        slideNo = 0;
      } else {
        slideNo = slideNo + 1;
      }
      slides[slideNo].classList.add("current");
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_hirexp_home.scss";
</style>
