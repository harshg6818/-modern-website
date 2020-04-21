<template>
  <div>
    <!-- hirexp navbar start -->
    <header>
      <div>
        <b-navbar toggleable="lg" fixed="top" class="hirexp-nav">
          <div class="container p-0">
            <b-navbar-brand href="#" class="hirexp-logo">
              <img src="../assets/logo-light.png" alt="logo-light">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                  <b-nav-item href="#">Home</b-nav-item>
                  <b-nav-item href="#">About Us</b-nav-item>
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
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_hirexp_carrer_new.scss";
</style>
