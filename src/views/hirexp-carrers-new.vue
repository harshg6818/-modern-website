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
                  <b-nav-item href="#culture"
                    >Culture & Celebrations</b-nav-item
                  >
                  <b-nav-item href="#tech">Tech @ HireXP</b-nav-item>
                </b-navbar-nav>
                <b-button href="#openings" size="sm" class="my-2 my-sm-0">
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
              <a class="fadeIn" href="#openings">
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
        <div class="row p-0 m-0">
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
        <b-row class="p-0 m-0">
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
        <b-row class="p-0 m-0">
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

    <!-- hirexp values section start -->
    <section class="hirexp-core-values">
      <b-container class="hirexp-core-values-container">
        <b-row class="p-0 m-0">
          <b-col>
            <div class="hirexp-core-values-content-wrap">
              <div class="core-values-icon">
                <img src="../assets/values-icon.png" alt="values icon" />
              </div>
              <h2 class="core-values-heading">Our values</h2>
              <div class="core-value-sub">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
                possimus ex. Deserunt est reiciendis necessit atibus harum.
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="p-0 m-0">
          <b-col class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div
                  class="front"
                  style="background-image: url(https://images.unsplash.com/photo-1584910643800-540e9e31ce32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=401&ixlib=rb-1.2.1&q=80&w=300);"
                >
                  <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
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
          </b-col>
          <b-col class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div
                  class="front"
                  style="background-image: url(https://images.unsplash.com/photo-1584910643800-540e9e31ce32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=401&ixlib=rb-1.2.1&q=80&w=300);"
                >
                  <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
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
          </b-col>
          <b-col class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div
                  class="front"
                  style="background-image: url(https://images.unsplash.com/photo-1584910643800-540e9e31ce32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=401&ixlib=rb-1.2.1&q=80&w=300);"
                >
                  <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
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
          </b-col>
          <b-col class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div
                  class="front"
                  style="background-image: url(https://images.unsplash.com/photo-1584910643800-540e9e31ce32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=401&ixlib=rb-1.2.1&q=80&w=300);"
                >
                  <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
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
          </b-col>
          <b-col class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div
                  class="front"
                  style="background-image: url(https://images.unsplash.com/photo-1584910643800-540e9e31ce32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=401&ixlib=rb-1.2.1&q=80&w=300);"
                >
                  <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
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
          </b-col>
          <b-col class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div
                  class="front"
                  style="background-image: url(https://images.unsplash.com/photo-1584910643800-540e9e31ce32?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=401&ixlib=rb-1.2.1&q=80&w=300);"
                >
                  <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
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
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- hirexp values section end -->

    <!-- hirexp tech stack section start -->
    <section id="tech">
      <div class="tech-stack-wrap">
        <b-container>
          <b-row class="p-0 m-0">
            <b-col>
              <div class="stack-content-wrap">
                <div class="stack-icon">
                  <img src="../assets/stack.png" alt="stack icon" />
                </div>
                <h2 class="tech-stach-heading">Tech Stack At HireXP</h2>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="tech-stack-icons">
        <div
          id="balloon_wrapper_1"
          class="balloon-slider sm-active-balloon animated"
          style="height: 600px"
        >
          <div class="slider-wrapper">
            <div class="balloon-item 1812">
              <div>
                <div class="balloon-image android"></div>
              </div>
            </div>
            <div class="balloon-item 1813">
              <div>
                <div class="balloon-image angular"></div>
              </div>
            </div>
            <div class="balloon-item 1814">
              <div>
                <div class="balloon-image aws"></div>
              </div>
            </div>
            <div class="balloon-item 1815">
              <div>
                <div class="balloon-image django"></div>
              </div>
            </div>
            <div class="balloon-item 1816">
              <div>
                <div class="balloon-image javascript"></div>
              </div>
            </div>
            <div class="balloon-item 1817">
              <div>
                <div class="balloon-image mysql"></div>
              </div>
            </div>
            <div class="balloon-item 1818">
              <div>
                <div class="balloon-image postgres"></div>
              </div>
            </div>
            <div class="balloon-item 1821">
              <div>
                <div class="balloon-image python"></div>
              </div>
            </div>
            <div class="balloon-item 1831">
              <div>
                <div class="balloon-image redis"></div>
              </div>
            </div>
            <div class="balloon-item 2937">
              <div>
                <div class="balloon-image selenium"></div>
              </div>
            </div>
            <div class="balloon-item 2981">
              <div>
                <div class="balloon-image vuejs"></div>
              </div>
            </div>
            <div class="balloon-item 3068">
              <div>
                <div class="balloon-image webpack"></div>
              </div>
            </div>
          </div>
          <div class="slider-wrapper">
            <div class="balloon-item 1812">
              <div>
                <div class="balloon-image android"></div>
              </div>
            </div>
            <div class="balloon-item 1813">
              <div>
                <div class="balloon-image angular"></div>
              </div>
            </div>
            <div class="balloon-item 1814">
              <div>
                <div class="balloon-image aws"></div>
              </div>
            </div>
            <div class="balloon-item 1815">
              <div>
                <div class="balloon-image django"></div>
              </div>
            </div>
            <div class="balloon-item 1816">
              <div>
                <div class="balloon-image javascript"></div>
              </div>
            </div>
            <div class="balloon-item 1817">
              <div>
                <div class="balloon-image mysql"></div>
              </div>
            </div>
            <div class="balloon-item 1818">
              <div>
                <div class="balloon-image postgres"></div>
              </div>
            </div>
            <div class="balloon-item 1821">
              <div>
                <div class="balloon-image python"></div>
              </div>
            </div>
            <div class="balloon-item 1831">
              <div>
                <div class="balloon-image redis"></div>
              </div>
            </div>
            <div class="balloon-item 2937">
              <div>
                <div class="balloon-image selenium"></div>
              </div>
            </div>
            <div class="balloon-item 2981">
              <div>
                <div class="balloon-image vuejs"></div>
              </div>
            </div>
            <div class="balloon-item 3068">
              <div>
                <div class="balloon-image webpack"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- hirexp tech stack section end -->

    <!-- hirexp culture section start -->
    <section id="culture" class="gallery-swiper animated fadeIn">
      <div class="culture-wrap">
        <b-container>
          <b-row class="p-0 m-0">
            <b-col>
              <div class="culture-content-wrap">
                <h2 class="culture-heading">Culture At HireXP</h2>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="culture-slider">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <p>tag line for slide one</p>
            <div class="gallery animated fadeInRightBig">
              <div class="image-one">
                <img
                  src="../assets/images/culture/culture-1.png"
                  alt="culture-1"
                />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <p>tag line for slide two</p>
            <div class="gallery animated fadeInRightBig">
              <div class="image-two">
                <img
                  src="../assets/images/culture/culture-2.png"
                  alt="culture-2"
                />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <p>tag line for slide three</p>
            <div class="gallery animated fadeInRightBig">
              <div class="image-three">
                <img
                  src="../assets/images/culture/culture-3.png"
                  alt="culture-3"
                />
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </section>
    <!-- hirexp culture section end -->

    <!-- hirexp team section start -->
    <section id="team">
      <b-container class="hirexp-team">
        <b-row class="p-0 m-0">
          <b-col>
            <div class="team-content-wrap">
              <h2 class="team-heading">Team of HireXP</h2>
            </div>
          </b-col>
        </b-row>
        <b-row class="p-0 m-0">
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-one-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-two-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-three-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-four-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-five-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-six-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-seven-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-eight-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-nine-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-ten-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-eleven-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-tweleve-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-thirteen-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-fourteen-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-fifteen-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-sixteen-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-seventeen-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-eighteen-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-nineteen-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front team-twenty-card">
                  <!-- <p>Lorem ipsum dolor sit amet consectetur adipisi.</p> -->
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
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- hirexp team section end -->

    <!-- hirexp job openings section start -->
    <section id="openings">
      <b-container class="hirexp-openings-section">
        <b-row class="p-0 m-0">
          <b-col>
            <div class="hirexp-opening-icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <h2 class="hirexp-openings-heading">Job openings</h2>
          </b-col>
        </b-row>
        <b-row class="p-0 m-0">
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div class="hirexp-location">
              <img src="../assets/svg/banglore.svg" alt="banglore" />
            </div>
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div class="hirexp-location">
              <img src="../assets/svg/dubai.svg" alt="dubai" />
            </div>
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div class="hirexp-location">
              <img src="../assets/svg/gurugram.svg" alt="gurugram" />
            </div>
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div class="hirexp-location">
              <img src="../assets/svg/manila.svg" alt="manila" />
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="hirexp-jobs">
        <b-row>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <a class="job-card-wrap" href="/">
              <div class="job-card-container">
                <div class="job-card">
                  <div class="job-card-title">
                    <h2>Product Manager</h2>
                  </div>
                  <div class="job-card-details">
                    <p class="job-card-location">
                      <i class="fas fa-map-marker-alt"></i>
                      Gurgaon
                    </p>
                    <p class="job-card-stack">
                      <i class="fas fa-users"></i>
                      Tech
                    </p>
                    <p class="job-card-exp">
                      <i class="fas fa-briefcase"></i>
                      3 years
                    </p>
                  </div>
                  <div class="job-card-button">
                    <span>View job</span>
                  </div>
                </div>
              </div>
            </a>
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <a class="job-card-wrap" href="/">
              <div class="job-card-container">
                <div class="job-card">
                  <div class="job-card-title">
                    <h2>Product Manager</h2>
                  </div>
                  <div class="job-card-details">
                    <p class="job-card-location">
                      <i class="fas fa-map-marker-alt"></i>
                      Gurgaon
                    </p>
                    <p class="job-card-stack">
                      <i class="fas fa-users"></i>
                      Tech
                    </p>
                    <p class="job-card-exp">
                      <i class="fas fa-briefcase"></i>
                      3 years
                    </p>
                  </div>
                  <div class="job-card-button">
                    <span>View job</span>
                  </div>
                </div>
              </div>
            </a>
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <a class="job-card-wrap" href="/">
              <div class="job-card-container">
                <div class="job-card">
                  <div class="job-card-title">
                    <h2>Product Manager</h2>
                  </div>
                  <div class="job-card-details">
                    <p class="job-card-location">
                      <i class="fas fa-map-marker-alt"></i>
                      Gurgaon
                    </p>
                    <p class="job-card-stack">
                      <i class="fas fa-users"></i>
                      Tech
                    </p>
                    <p class="job-card-exp">
                      <i class="fas fa-briefcase"></i>
                      3 years
                    </p>
                  </div>
                  <div class="job-card-button">
                    <span>View job</span>
                  </div>
                </div>
              </div>
            </a>
          </b-col>
          <b-col class="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <a class="job-card-wrap" href="/">
              <div class="job-card-container">
                <div class="job-card">
                  <div class="job-card-title">
                    <h2>Product Manager</h2>
                  </div>
                  <div class="job-card-details">
                    <p class="job-card-location">
                      <i class="fas fa-map-marker-alt"></i>
                      Gurgaon
                    </p>
                    <p class="job-card-stack">
                      <i class="fas fa-users"></i>
                      Tech
                    </p>
                    <p class="job-card-exp">
                      <i class="fas fa-briefcase"></i>
                      3 years
                    </p>
                  </div>
                  <div class="job-card-button">
                    <span>View job</span>
                  </div>
                </div>
              </div>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- hirexp job openings section end -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "HirexpCarrers",

  components: {
    SwiperSlide,
    Swiper
  },

  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_hirexp_carrer_new.scss";
</style>

<style scoped>
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
.balloon-slider {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
}
.balloon-slider > .slider-wrapper {
  transform: translateX(0);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 600px;
}
.balloon-slider.sm-active-balloon > .slider-wrapper {
  animation: transition 35s linear infinite;
}
.balloon-slider .balloon-item {
  display: block;
  transition: all 0.3s ease-in-out;
}
.balloon-slider .balloon-item .balloon-image {
  -webkit-background-size: 70%;
  -moz-background-size: 70%;
  -o-background-size: 70%;
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
}
@keyframes transition {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.balloon-slider .balloon-item div {
  transition: all 5.75s ease-in-out;
}
.balloon-slider .balloon-item div div {
  background: #fff;
  border-radius: 50%;
  height: 180px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
  position: relative;
  margin: auto;
  transition: all 0.3s ease-in-out;
  animation: bubbles-first 5s ease-in-out infinite;
}
#balloon_wrapper_1 .slider-wrapper {
  min-width: 50vw;
}
#balloon_wrapper_2 .slider-wrapper {
  min-width: 100vw;
}
#balloon_wrapper_1.balloon-slider .balloon-item div div {
  /* height: 150px; */
  /* width: 150px; */
}
.balloon-slider .balloon-item:nth-child(2n) div div {
  animation: bubbles-second 5s ease-in-out infinite;
}
.balloon-slider .balloon-item:nth-child(3n + 2) div div {
  animation: bubbles-third 5s ease-in-out infinite;
}
.balloon-slider .balloon-item:nth-child(6n + 2) div div {
  animation: bubbles-fourth 5s ease-in-out infinite;
}
.balloon-slider .balloon-item:nth-child(3n + 2) div {
  transform: translateX(-200px);
}
.balloon-slider .balloon-item:nth-child(3n + 3) {
  top: 368px;
}
.balloon-slider .balloon-item:nth-child(3n + 2) {
  top: 188px;
}
.balloon-slider .balloon-item:nth-child(3n + 1) {
  top: 8px;
}
.balloon-slider .balloon-item:nth-child(2n + 1) div {
  transform: scale(0.8);
}
.balloon-slider .balloon-item:nth-child(4n + 2) div,
.balloon-slider .balloon-item:nth-child(4n + 4) div {
  transform: scale(0.7);
}
.balloon-slider .balloon-item:nth-child(7n) div {
  transform: scale(0.8);
}
.balloon-slider .balloon-item:nth-child(7n + 1) div {
  transform: scale(0.7);
}
.balloon-slider .balloon-item:nth-child(8n + 4) div {
  transform: scale(0.8);
}
.balloon-slider .balloon-item:nth-child(10n) div {
  transform: scale(0.7);
}
@keyframes bubbles-first {
  0%,
  100% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(5px, 8px);
  }
  80% {
    transform: translate(-5px, 4px);
  }
}
@keyframes bubbles-second {
  0%,
  100% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(-5px, -8px);
  }
  80% {
    transform: translate(5px, -4px);
  }
}
@keyframes bubbles-third {
  0%,
  100% {
    transform: translate(145px, 5px);
  }
  40% {
    transform: translate(150px, -4px);
  }
  80% {
    transform: translate(155px, -5px);
  }
}
@keyframes bubbles-fourth {
  0%,
  100% {
    transform: translate(150px, 2px);
  }
  40% {
    transform: translate(145px, -8px);
  }
  80% {
    transform: translate(155px, 3px);
  }
}
</style>
