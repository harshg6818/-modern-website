<template>
  <div>
    <section class="hirexp-about-nav">
      <nav class="navbar navbar-expand-lg">
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
        <div class="about-bg">
          <div class="overlay-text">
            <h1>About HireXP</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="hirexp-about">
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

    <section class="hirexp-timeline">
      <div class="container">
        <img src="../assets/images/timeline1.jpeg" alt="timeline" />
        <img src="../assets/images/timeline2.jpeg" alt="timeline" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_hirexp_about.scss";
</style>
