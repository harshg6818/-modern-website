<template>
  <div>
    <section class="hirexp-customers-nav">
      <nav class="navbar fixed-top navbar-expand-lg">
        <div class="container">
          <div class="hirexp-logo">
            <img src="../assets/logo-light.png" alt="hirexp-logo" />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="">Home</a>
            </div>
          </div>
        </div>
      </nav>
    </section>

    <section class="hirexp-header">
      <div class="container-fluid p-0">
        <div class="customers-bg">
          <div class="overlay-text">
            <h1>Our Customer</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="hirexp-images-videos">
      <div class="container-fluid gallery">
        <figure class="gallery__item gallery__item--1">
          <img
            src="../assets/images/life/demo.jpg"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--2">
          <img
            src="../assets/images/life/demo.jpg"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--3">
          <img
            src="../assets/images/life/demo.jpg"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--4">
          <img
            src="../assets/images/life/demo.jpg"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--5">
          <img
            src="../assets/images/life/demo.jpg"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--6">
          <img
            src="../assets/images/life/demo.jpg"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--7">
          <img
            src="../assets/images/life/demo.jpg"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--8">
          <img
            src="../assets/images/life/demo.jpg"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
        <figure class="gallery__item gallery__item--9">
          <img
            src="../assets/images/life/demo.jpg"
            alt="Gallery image 1"
            class="gallery__img"
          />
        </figure>
      </div>
    </section>

    <section class="hirexp-clients">
      <div class="container-fluid">
        <div class="row">
          <div class="col-7">
            <img
              src="../assets/images/client-logo.png"
              alt="clients"
              width="100%"
            />
          </div>
          <div class="col-5">
            <l-map
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              style="height: 100%"
            >
              <l-tile-layer :url="url">
                <l-marker :lat-lng="dubai">
                  <l-icon
                    :icon-size="dynamicSize"
                    :icon-anchor="dynamicAnchor"
                    icon-url="../assets/images/location.png"
                /></l-marker>
                <l-marker :lat-lng="manila">
                  <l-icon
                    :icon-size="dynamicSize"
                    :icon-anchor="dynamicAnchor"
                    icon-url="../assets/images/location.png"
                  />
                </l-marker>
                <l-marker :lat-lng="banglore"
                  ><l-icon
                    :icon-size="dynamicSize"
                    :icon-anchor="dynamicAnchor"
                    icon-url="../assets/images/location.png"
                  />
                </l-marker>
                <l-marker :lat-lng="gurugram">
                  <l-icon
                    :icon-size="dynamicSize"
                    :icon-anchor="dynamicAnchor"
                    icon-url="../assets/images/location.png"
                /></l-marker>
              </l-tile-layer>
            </l-map>
          </div>
        </div>
      </div>
    </section>

    <section class="hirexp-case-study">
      <div class="container-fluid">
        <div class="hirexp-case-study-head">
          How companies grow with HireXP&nbsp;?
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="case-study-card">
              <div class="row">
                <div class="col-5 p-0 case-study-card-left">
                  <div class="case-study-company-icon">
                    <!-- <img
                      src="../assets/images/testImage.jpg"
                      alt="comany-icon"
                    /> -->
                    Company Logo
                  </div>
                  <div class="case-study-company-img">
                    <img
                      src="../assets/images/testImage.jpg"
                      alt="comany-icon"
                    />
                  </div>
                </div>
                <div class="col-7 p-0 case-study-card-right">
                  <div class="case-study-heading">
                    Company name
                  </div>
                  <div class="case-study-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum sequi quod consequuntur necessitatibus,
                    atque eius velit optio officia reprehenderit aut omnis error
                    quia recusandae. Impedit nostrum labore hic quia.
                  </div>
                  <div class="case-study-card-button">
                    <span class="card-btn">Read more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="case-study-card">
              <div class="row">
                <div class="col-5 p-0 case-study-card-left">
                  <div class="case-study-company-icon">
                    <!-- <img
                      src="../assets/images/testImage.jpg"
                      alt="comany-icon"
                    /> -->
                    Company Logo
                  </div>
                  <div class="case-study-company-img">
                    <img
                      src="../assets/images/testImage.jpg"
                      alt="comany-icon"
                    />
                  </div>
                </div>
                <div class="col-7 p-0 case-study-card-right">
                  <div class="case-study-heading">
                    Company name
                  </div>
                  <div class="case-study-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum sequi quod consequuntur necessitatibus,
                    atque eius velit optio officia reprehenderit aut omnis error
                    quia recusandae. Impedit nostrum labore hic quia.
                  </div>
                  <div class="case-study-card-button">
                    <span class="card-btn">Read more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 pt-2"></div>
        <div class="row">
          <div class="col">
            <div class="case-study-card">
              <div class="row">
                <div class="col-5 p-0 case-study-card-left">
                  <div class="case-study-company-icon">
                    <!-- <img
                      src="../assets/images/testImage.jpg"
                      alt="comany-icon"
                    /> -->
                    Company Logo
                  </div>
                  <div class="case-study-company-img">
                    <img
                      src="../assets/images/testImage.jpg"
                      alt="comany-icon"
                    />
                  </div>
                </div>
                <div class="col-7 p-0 case-study-card-right">
                  <div class="case-study-heading">
                    Company name
                  </div>
                  <div class="case-study-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum sequi quod consequuntur necessitatibus,
                    atque eius velit optio officia reprehenderit aut omnis error
                    quia recusandae. Impedit nostrum labore hic quia.
                  </div>
                  <div class="case-study-card-button">
                    <span class="card-btn">Read more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="case-study-card">
              <div class="row">
                <div class="col-5 p-0 case-study-card-left">
                  <div class="case-study-company-icon">
                    <!-- <img
                      src="../assets/images/testImage.jpg"
                      alt="comany-icon"
                    /> -->
                    Company Logo
                  </div>
                  <div class="case-study-company-img">
                    <img
                      src="../assets/images/testImage.jpg"
                      alt="comany-icon"
                    />
                  </div>
                </div>
                <div class="col-7 p-0 case-study-card-right">
                  <div class="case-study-heading">
                    Company name
                  </div>
                  <div class="case-study-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium rerum sequi quod consequuntur necessitatibus,
                    atque eius velit optio officia reprehenderit aut omnis error
                    quia recusandae. Impedit nostrum labore hic quia.
                  </div>
                  <div class="case-study-card-button">
                    <span class="card-btn">Read more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta cta--default">
      <div class="container">
        <!-- <div class="cta__details">
          <div
            class="detail__ball detail__ball--purple detail__ball--small ball-one"
          ></div>
          <div
            class="detail__ball detail__ball--blue detail__ball--smallest ball-two"
          ></div>
          <div
            class="detail__ball detail__ball--green detail__ball--medium ball-three"
          ></div>
          <div
            class="detail__ball detail__ball--blue detail__ball--large ball-four"
          ></div>
          <div
            class="detail__ball detail__ball--blue detail__ball--small ball-five"
          ></div>
        </div> -->

        <div class="get-started">
          <h1 class="bold">Ready to get <span>started</span>?</h1>
          <h3>Create a free account in just <strong>2 minutes</strong></h3>

          <div class="get-started__actions">
            <div class="get-started__action get-started__action--primary">
              <a class="btn btn--primary btn--large" href="#">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hirexp-customers">
      <div class="container">
        <div class="row">
          <div class="col content">
            <a class="card" href="#!">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1584910643800-540e9e31ce32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=401&ixlib=rb-1.2.1&q=80&w=300);"
              >
                <p>Our Story</p>
              </div>
              <div class="back">
                <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <button class="button">Click Here</button>
                </div>
              </div>
            </a>
          </div>
          <div class="col content">
            <a class="card" href="#!">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1584910643800-540e9e31ce32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=401&ixlib=rb-1.2.1&q=80&w=300);"
              >
                <p>Our Core Values</p>
              </div>
              <div class="back">
                <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <button class="button">Click Here</button>
                </div>
              </div>
            </a>
          </div>
          <div class="col content">
            <a class="card" href="#!">
              <div
                class="front"
                style="background-image: url(https://images.unsplash.com/photo-1584910643800-540e9e31ce32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=401&ixlib=rb-1.2.1&q=80&w=300);"
              >
                <p>Leadership</p>
              </div>
              <div class="back">
                <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>
                    Provident consectetur natus voluptatem quis tenetur sed
                    beatae eius sint.
                  </p>
                  <button class="button">Click Here</button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data() {
    return {
      zoom: 13,
      center: latLng(28.457905, 77.026819),
      url:
        "https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=zBZEk6NvIza1pWNbwoDc",
      dubai: latLng(25.19568, 55.271653),
      manila: latLng(14.59, 120.98),
      gurugram: latLng(28.457905, 77.026819),
      banglore: latLng(12.979387, 77.594537),
      mapOptions: {
        zoomSnap: 0.5
      },
      iconSize: 64
    };
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_hirexp_customer.scss";
</style>
