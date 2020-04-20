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

    <section class="hirexp-products">
      <div class="container">
        <div class="row">
          <div class="products-heading">
            Get ahead of the curve with our superior automation services.
          </div>

          <div class="row">
            <div class="tabs">
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >Recruitment Software</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    >Amara-AI Chatbot</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >Onboarding</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-worm"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >Keep Worm</a
                  >
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div class="tab-pane-wrap">
                    <div class="pane-content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Perferendis quod blanditiis consequatur voluptatum earum
                      pariatur voluptatibus magni odit itaque delectus quisquam
                      asperiores aut voluptatem, accusantium consectetur,
                      sapiente ex nisi tempora!
                    </div>
                    <div class="pane-img">
                      <img src="../assets/images/home/2.jpg" />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                  doloremque laborum cupiditate sapiente. Minus ex dolor dolorum
                  sapiente architecto neque repudiandae, minima reprehenderit
                  nemo mollitia earum porro corrupti, iure inventore.
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Similique molestiae dolorem, unde corrupti ipsa praesentium
                  iste voluptatum ipsam numquam deleniti corporis eveniet
                  inventore, recusandae culpa fugit animi voluptas id obcaecati.
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-worm"
                  role="tabpanel"
                  aria-labelledby="pills-wirm-tab"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Similique molestiae dolorem, unde corrupti ipsa praesentium
                  iste voluptatum ipsam numquam deleniti corporis eveniet
                  inventore, recusandae culpa fugit animi voluptas id obcaecati.
                </div>
              </div>
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
