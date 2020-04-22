<template>
  <div>
    <!-- hirexp navbar start -->
    <header>
      <div>
        <b-navbar toggleable="lg" fixed="top" class="hirexp-nav">
          <div class="container p-0">
            <b-navbar-brand href="/" class="hirexp-logo">
              <img src="../assets/logo-light.png" alt="logo-light" />
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                  <b-nav-item href="/">Home</b-nav-item>
                  <b-nav-item href="#about">About Us</b-nav-item>
                  <b-nav-item href="#">Culture & Celebrations</b-nav-item>
                  <b-nav-item href="#">Tech @ HireXP</b-nav-item>
                </b-navbar-nav>
                <b-button size="sm" class="my-2 my-sm-0">
                  Get Started
                </b-button>
              </b-navbar-nav>
            </b-collapse>
          </div>
        </b-navbar>
      </div>
    </header>
    <!-- hirexp navbar end -->

    <!-- hirexp header start-->
    <section class="hirexp-intro">
      <div class="animated fadeIn">
        <div class="intro-container">
          <div class="leftandin animated container p-0" id="leftandin1">
            <div class="outer-left">
              <h1 class="title animated bounceInLeft">
                <span>We are an architect</span>
                <br />
                <span>of experience.</span>
              </h1>
              <p class="description animated fadeInDown delay-06s">
                Come build with us.
              </p>
              <a class="fadeIn">
                <button class="cta animated pulse">
                  <p class="animated fadeIn delay-06s">View Openings</p>
                </button>
              </a>
            </div>
            <div class="inner animated fadeIn" id="inner1"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- hirexp header end -->

    <!-- hirexp stats start -->
    <section class="hirexp-stats">
      <div class="container">
        <div class="row">
          <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 stats">
            <h1 class="hirexp-stats-num">1 Million+</h1>
            <div class="hirexp-stats-sub">Applications Processed</div>
          </div>
          <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 stats">
            <h1 class="hirexp-stats-num">95K+</h1>
            <div class="hirexp-stats-sub">Chats Initiated</div>
          </div>
          <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 stats">
            <h1 class="hirexp-stats-num">27K+</h1>
            <div class="hirexp-stats-sub">Onboardings Completed</div>
          </div>
        </div>
      </div>
    </section>
    <!-- hirexp stats end -->

    <!-- hirexp about us start -->
    <section id="about" class="about">
      <b-container class="hirexp-about-wrap">
        <b-row class="p-0 m-0">
          <b-col class="hirexp-about-content-wrap">
            <h1 class="hirexp-about-heading">About Us</h1>
            <div class="hirexp-about-head-sub">
              At hireXP our most valuable resource is people! We have been able
              to change the landscape of HR technologies, benchmark our products
              and put customer-first only because of the brilliant ideas by our
              people and never give-up attitude.
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- hirexp about us end -->

    <!-- hirexp join section start -->
    <section id="join">
      <b-container class="hirexp-join-wrap">
        <b-row>
          <b-col>
            <div class="hirexp-join-content-wrap">
              <div class="hirexp-join-icon">
                <img src="../assets/images/join-icon.jpg" alt="join icon" />
              </div>
              <h1 class="hirexp-join-heading">Join the winning team</h1>
              <div class="hirexp-join-heading-sub">
                If you wish to be a part of an energetic group relentlessly
                working to fast-forward into the future, in a transparent and
                holistic work environment, you are at the right place to realize
                your synergies.
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content card-one">
              <a class="card" href="#!">
                <div class="front card-one-img"></div>
                <div class="back">
                  <div class="content">
                    <p>
                      Work related challenges are an opportunity to brainstorm
                      and come up with innovative ideas. Help is always at an
                      arm’s distance as our teams believe in collaborative
                      energies.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </b-col>
          <b-col class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content card-two">
              <a class="card" href="#!">
                <div class="front card-two-img"></div>
                <div class="back">
                  <div class="content">
                    <p>
                      We are a chosen startup for the creative lot who likes to
                      work in an environment that gives them an opportunity to
                      learn, venture into new zones, take risks and
                      think-out-of-the-box.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </b-col>
          <b-col class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content card-three">
              <a class="card" href="#!">
                <div class="front card-three-img"></div>
                <div class="back">
                  <div class="content">
                    <p>
                      We hireXpians share a common passion- give full attention
                      to every client’s small and big wish, this has helped us
                      to enhance our own knowledge and is the key factor that
                      separates us from our competitors.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </b-col>
          <b-col class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content card-four">
              <a class="card" href="#!">
                <div class="front card-four-img"></div>
                <div class="back">
                  <div class="content">
                    <p>
                      How are we different&nbsp;?
                    </p>
                    <p>
                      We are happy working! Since we love what we do, we derive
                      satisfaction from our work and that gives us a superior
                      quality of life.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- hirexp join section end -->
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_hirexp_carrer_new.scss";
</style>
