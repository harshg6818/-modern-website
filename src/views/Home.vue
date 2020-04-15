<template>
  <div class="main">
    <header>
      <div class="container-fluid nav-wrap">
        <b-navbar>
          <div class="container">
            <b-navbar-brand href="/" class="hirexp-logo">
              <img src="../assets/logo-light.png" alt="hirexp logo" />
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="hirexp-nav">
              <b-navbar-nav>
                <b-nav-item href="#header-section" class="hirexp-nav-item"
                  >Home</b-nav-item
                >
                <b-nav-item href="#hirexp-about" class="hirexp-nav-item"
                  >About Us</b-nav-item
                >
                <b-nav-item href="#hirexp-culture" class="hirexp-nav-item"
                  >Culture & Celebrations</b-nav-item
                >
                <b-nav-item href="#hirexp-team" class="hirexp-nav-item"
                  >Tech@HireXP</b-nav-item
                >
                <b-nav-item
                  href="#hirexp-openings-section"
                  class="hirexp-nav-item"
                  >View Openings</b-nav-item
                >
              </b-navbar-nav>
            </b-collapse>
          </div>
        </b-navbar>
      </div>
    </header>

    <section class="header-section" id="header-section">
      <b-container fluid>
        <b-row>
          <b-col cols="5">
            <b-container class="header-wrap">
              <div class="main-title-text animated fadeInLeft">
                We are an architect<br />of experience
              </div>
              <div class="main-sub-text">
                Come build with us
              </div>
              <diV class="main-button">
                <a class="fadeIn">
                  <button class="cta animated pulse">
                    <p class="animated fadeIn delay-06s">View Openings</p>
                  </button>
                </a>
              </diV>
            </b-container>
          </b-col>
          <b-col cols="7">
            <div class="image-bg">
              <div class="inner animated fadeIn" id="inner1"></div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="hirexp-stats">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <h1 class="hirexp-stats-num">1 Million+</h1>
            <div class="hirexp-stats-sub">Applications Processed</div>
          </div>
          <div class="col-lg-4">
            <h1 class="hirexp-stats-num">95K+</h1>
            <div class="hirexp-stats-sub">Chats Initiated</div>
          </div>
          <div class="col-lg-4">
            <h1 class="hirexp-stats-num">27K+</h1>
            <div class="hirexp-stats-sub">Onboardings Completed</div>
          </div>
        </div>
      </div>
    </section>

    <section class="hirexp-about" id="hirexp-about">
      <b-container>
        <b-row>
          <b-col class="hirexp-about-content-wrap">
            <h1 class="hirexp-about-heading">About Us</h1>
            <div class="hirexp-about-head-sub">
              We dreamt of creating a highly usable, intuitive solution that
              would take away your day-to-day recruitment worries, streamline
              standard hiring processes, and provide you with insightful
              analytics on your systems. But most importantly, free up your
              recruiters’ time and creativity to engage candidates in more
              impactful ways.
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="hirexp-join">
      <b-container class="hirexp-join-container">
        <b-row cols-lg="1">
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
          <b-col class="p-0 m-0">
            <div class="content card-one">
              <a class="card" href="#!">
                <div class="front card-one-img"></div>
                <div class="back">
                  <div>
                    <p>
                      Consectetur adipisicing elit. Possimus, praesentium?
                    </p>
                    <p>
                      Provident consectetur natus voluptatem quis tenetur sed
                      beatae eius sint.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </b-col>
          <b-col class="p-0 m-0">
            <div class="content card-two">
              <a class="card" href="#!">
                <div class="front card-two-img"></div>
                <div class="back">
                  <div>
                    <p>
                      Consectetur adipisicing elit. Possimus, praesentium?
                    </p>
                    <p>
                      Provident consectetur natus voluptatem quis tenetur sed
                      beatae eius sint.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </b-col>
          <b-col class="p-0 m-0">
            <div class="content card-three">
              <a class="card" href="#!">
                <div class="front card-three-img"></div>
                <div class="back">
                  <div>
                    <p>
                      Consectetur adipisicing elit. Possimus, praesentium?
                    </p>
                    <p>
                      Provident consectetur natus voluptatem quis tenetur sed
                      beatae eius sint.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </b-col>
          <b-col class="p-0 m-0">
            <div class="content card-four">
              <a class="card" href="#!">
                <div class="front card-four-img"></div>
                <div class="back">
                  <div>
                    <p>
                      Consectetur adipisicing elit. Possimus, praesentium?
                    </p>
                    <p>
                      Provident consectetur natus voluptatem quis tenetur sed
                      beatae eius sint.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="hirexp-core-values">
      <b-container class="hirexp-core-values-container">
        <b-row cols-lg="1">
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
        <b-row cols-lg="3">
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
        <b-row cols-lg="3">
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
    <section class="hirexp-tech-stack">
      <b-container>
        <b-row>
          <b-col>
            <div class="tech-stach-icon">
              <img src="../assets/stack.png" alt="stack" />
            </div>
            <div class="tech-stach-heading">Tech Stack At HireXP</div>
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid>
        <b-row>
          <b-col>
            <div class="tech-stack-card-wrap android">
              <div class="tech-android">
                <img src="../assets/images/tech/android.png" alt="android" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap angular">
              <div class="tech-angular">
                <img src="../assets/images/tech/angular.png" alt="angular" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap aws">
              <div class="tech-aws">
                <img src="../assets/images/tech/aws.png" alt="aws" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap django">
              <div class="tech-django">
                <img src="../assets/images/tech/django.png" alt="django" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap javascript">
              <div class="tech-javascript">
                <img src="../assets/images/tech/javascript.svg" alt="js" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap mysql">
              <div class="tech-mysql">
                <img src="../assets/images/tech/mysql.png" alt="mysql" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap postgres">
              <div class="tech-postgres">
                <img src="../assets/images/tech/postgres.png" alt="postgress" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap python">
              <div class="tech-python">
                <img src="../assets/images/tech/python.png" alt="python" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap redis">
              <div class="tech-redis">
                <img src="../assets/images/tech/redis.jpg" alt="redis" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap selenium">
              <div class="tech-selenium">
                <img src="../assets/images/tech/selenium.png" alt="selenium" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap vue">
              <div class="tech-vue">
                <img src="../assets/images/tech/vuejs.png" alt="vue" />
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="tech-stack-card-wrap webpack">
              <div class="tech-webpack">
                <img src="../assets/images/tech/webpack.png" alt="webpack" />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="hirexp-culture" id="hirexp-culture">
      <b-container>
        <b-row>
          <div class="hirexp-culture-content-wrap">
            <div class="hirexp-culture-heading">Culture At HireXP</div>
          </div>
        </b-row>
      </b-container>
    </section>

    <section class="gallery-swiper animated fadeIn">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <p>tag line for slide one</p>
          <div class="gallery animated fadeInRightBig">
            <figure class="gallery__item gallery__item--1">
              <img
                src="../assets/images/culture/img01.jpg"
                alt="Gallery image 1"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--2">
              <img
                src="../assets/images/culture/img02.jpg"
                alt="Gallery image 2"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--3">
              <img
                src="../assets/images/culture/img03.jpg"
                alt="Gallery image 3"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--4">
              <img
                src="../assets/images/culture/img04.jpg"
                alt="Gallery image 4"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--5">
              <img
                src="../assets/images/culture/img05.jpg"
                alt="Gallery image 5"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--6">
              <img
                src="../assets/images/culture/img06.jpg"
                alt="Gallery image 6"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--7">
              <img
                src="../assets/images/culture/img07.jpg"
                alt="Gallery image 7"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--8">
              <img
                src="../assets/images/culture/img08.jpg"
                alt="Gallery image 8"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--9">
              <img
                src="../assets/images/culture/img09.jpg"
                alt="Gallery image 9"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--10">
              <img
                src="../assets/images/culture/img10.jpg"
                alt="Gallery image 10"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--11">
              <img
                src="../assets/images/culture/img11.jpg"
                alt="Gallery image 11"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--12">
              <img
                src="../assets/images/culture/img12.jpg"
                alt="Gallery image 12"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--13">
              <img
                src="../assets/images/culture/img13.jpg"
                alt="Gallery image 13"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--14">
              <img
                src="../assets/images/culture/img14.jpg"
                alt="Gallery image 14"
                class="gallery__img"
              />
            </figure>
          </div>
        </swiper-slide>
        <swiper-slide>
          <p>tag line for slide two</p>
          <div class="gallery animated fadeInRightBig">
            <figure class="gallery__item gallery__item--1">
              <img
                src="../assets/images/culture/img15.jpg"
                alt="Gallery image 1"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--2">
              <img
                src="../assets/images/culture/img27.jpg"
                alt="Gallery image 2"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--3">
              <img
                src="../assets/images/culture/img17.jpg"
                alt="Gallery image 3"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--4">
              <img
                src="../assets/images/culture/img18.jpg"
                alt="Gallery image 4"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--5">
              <img
                src="../assets/images/culture/img19.jpg"
                alt="Gallery image 5"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--6">
              <img
                src="../assets/images/culture/img20.jpg"
                alt="Gallery image 6"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--7">
              <img
                src="../assets/images/culture/img21.jpg"
                alt="Gallery image 7"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--8">
              <img
                src="../assets/images/culture/img22.jpg"
                alt="Gallery image 8"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--9">
              <img
                src="../assets/images/culture/img23.jpg"
                alt="Gallery image 9"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--10">
              <img
                src="../assets/images/culture/img24.jpg"
                alt="Gallery image 10"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--11">
              <img
                src="../assets/images/culture/img25.jpg"
                alt="Gallery image 11"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--12">
              <img
                src="../assets/images/culture/img26.jpg"
                alt="Gallery image 12"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--13">
              <img
                src="../assets/images/culture/img16.jpg"
                alt="Gallery image 13"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--14">
              <img
                src="../assets/images/culture/img28.jpg"
                alt="Gallery image 14"
                class="gallery__img"
              />
            </figure>
          </div>
        </swiper-slide>
        <swiper-slide>
          <p>tag line for slide three</p>
          <div class="gallery animated fadeInRightBig">
            <figure class="gallery__item gallery__item--1">
              <img
                src="../assets/images/culture/img29.jpg"
                alt="Gallery image 1"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--2">
              <img
                src="../assets/images/culture/img30.jpg"
                alt="Gallery image 2"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--3">
              <img
                src="../assets/images/culture/img31.jpg"
                alt="Gallery image 3"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--4">
              <img
                src="../assets/images/culture/img32.jpg"
                alt="Gallery image 4"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--5">
              <img
                src="../assets/images/culture/img33.jpg"
                alt="Gallery image 5"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--6">
              <img
                src="../assets/images/culture/img34.jpg"
                alt="Gallery image 6"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--7">
              <img
                src="../assets/images/culture/img07.jpg"
                alt="Gallery image 7"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--8">
              <img
                src="../assets/images/culture/img08.jpg"
                alt="Gallery image 8"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--9">
              <img
                src="../assets/images/culture/img09.jpg"
                alt="Gallery image 9"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--10">
              <img
                src="../assets/images/culture/img10.jpg"
                alt="Gallery image 10"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--11">
              <img
                src="../assets/images/culture/img11.jpg"
                alt="Gallery image 11"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--12">
              <img
                src="../assets/images/culture/img12.jpg"
                alt="Gallery image 12"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--13">
              <img
                src="../assets/images/culture/img13.jpg"
                alt="Gallery image 13"
                class="gallery__img"
              />
            </figure>
            <figure class="gallery__item gallery__item--14">
              <img
                src="../assets/images/culture/img14.jpg"
                alt="Gallery image 14"
                class="gallery__img"
              />
            </figure>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>

    <section class="hirexp-team" id="hirexp-team">
      <b-container>
        <b-row cols-lg="1">
          <b-col>
            <div class="hirexp-team-content-wrap">
              <h1 class="hirexp-team-heading">Team of HireXP</h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row cols-lg="5">
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
        </b-row>
      </b-container>
      <b-container>
        <b-row cols-lg="5">
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
        </b-row>
      </b-container>
      <b-container>
        <b-row cols-lg="5">
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
        </b-row>
      </b-container>
      <b-container>
        <b-row cols-lg="5">
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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
          <b-col class="p-0 m-0">
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

    <section class="hirexp-openings-section" id="hirexp-openings-section">
      <b-container class="hirexp-opening-container"></b-container>
      <b-container>
        <b-row cols-lg="1">
          <b-col>
            <div class="hirexp-opening-icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <div class="hirexp-openings-heading">Job openings</div>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row cols-lg="4">
          <b-col>
            <div class="hirexp-location">
              <img src="../assets/svg/banglore.svg" alt="banglore" />
            </div>
          </b-col>
          <b-col>
            <div class="hirexp-location">
              <img src="../assets/svg/dubai.svg" alt="dubai" />
            </div>
          </b-col>
          <b-col>
            <div class="hirexp-location">
              <img src="../assets/svg/gurugram.svg" alt="gurugram" />
            </div>
          </b-col>
          <b-col>
            <div class="hirexp-location">
              <img src="../assets/svg/manila.svg" alt="manila" />
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="hirexp-jobs">
        <b-row cols-lg="4">
          <b-col>
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
          <b-col>
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
          <b-col>
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
          <b-col>
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

    <section class="hirexp-perks-section">
      <div class="container hirexp-perks-head">
        <div class="hirexp-perks-heading">Perks and Benefits</div>
        <p class="hirexp-perks-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          provident commodi enim eveniet accusamus.
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 perks-card">
            <div class="perks-card-icon">
              <i class="fas fa-store-alt"></i>
            </div>
            <h4 class="perks-card-heading">Environment</h4>
            <p class="perks-card-sub">
              Our modern offices are comfortable, light and thoughtfully
              designed. Both sites offer creative work spaces, a well-stocked
              communal kitchen, and good access to transport links and city
              life.
            </p>
          </div>
          <div class="col-lg-4 perks-card">
            <div class="perks-card-icon">
              <i class="fas fa-store-alt"></i>
            </div>
            <h4 class="perks-card-heading">Equipment</h4>
            <p class="perks-card-sub">
              Our modern offices are comfortable, light and thoughtfully
              designed. Both sites offer creative work spaces, a well-stocked
              communal kitchen, and good access to transport links and city
              life.
            </p>
          </div>
          <div class="col-lg-4 perks-card">
            <div class="perks-card-icon">
              <i class="fas fa-store-alt"></i>
            </div>
            <h4 class="perks-card-heading">Rewards</h4>
            <p class="perks-card-sub">
              Our modern offices are comfortable, light and thoughtfully
              designed. Both sites offer creative work spaces, a well-stocked
              communal kitchen, and good access to transport links and city
              life.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 perks-card">
            <div class="perks-card-icon">
              <i class="fas fa-store-alt"></i>
            </div>
            <h4 class="perks-card-heading">Environment</h4>
            <p class="perks-card-sub">
              Our modern offices are comfortable, light and thoughtfully
              designed. Both sites offer creative work spaces, a well-stocked
              communal kitchen, and good access to transport links and city
              life.
            </p>
          </div>
          <div class="col-lg-4 perks-card">
            <div class="perks-card-icon">
              <i class="fas fa-store-alt"></i>
            </div>
            <h4 class="perks-card-heading">Equipment</h4>
            <p class="perks-card-sub">
              Our modern offices are comfortable, light and thoughtfully
              designed. Both sites offer creative work spaces, a well-stocked
              communal kitchen, and good access to transport links and city
              life.
            </p>
          </div>
          <div class="col-lg-4 perks-card">
            <div class="perks-card-icon">
              <i class="fas fa-store-alt"></i>
            </div>
            <h4 class="perks-card-heading">Rewards</h4>
            <p class="perks-card-sub">
              Our modern offices are comfortable, light and thoughtfully
              designed. Both sites offer creative work spaces, a well-stocked
              communal kitchen, and good access to transport links and city
              life.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="hirexp-awards">
      <b-container class="hirexp-awards-content">
        <div class="hirexp-awards-icon">
          <i class="fas fa-trophy"></i>
        </div>
        <div class="hirexp-awards-heading">
          Media and Awards
        </div>
      </b-container>
      <b-container class="hirexp-awards-container">
        <b-row>
          <b-col class="p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front awards-one"></div>
                <div class="back">
                  <div>
                    <p>
                      hireXP: Rendering quality HR Services through
                      state-of-the-art technology.
                    </p>
                    <button class="button">Click Here</button>
                  </div>
                </div>
              </a>
            </div>
            <p>
              hireXP: Rendering quality HR Services through state-of-the-art
              technology.
            </p>
          </b-col>
          <b-col class="p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front awards-two"></div>
                <div class="back">
                  <div>
                    <p>
                      20 most promising recruitment technology solution
                      providers.
                    </p>
                    <button class="button">Click Here</button>
                  </div>
                </div>
              </a>
            </div>
            <p>20 most promising recruitment technology solution providers.</p>
          </b-col>
          <b-col class="p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front awards-three"></div>
                <div class="back">
                  <div>
                    <p>
                      Knowlarity CEO invests in recruitment startup HireXP
                    </p>
                    <button class="button">Click Here</button>
                  </div>
                </div>
              </a>
            </div>
            <p>Knowlarity CEO invests in recruitment startup HireXP</p>
          </b-col>
          <b-col class="p-0 m-0">
            <div class="content">
              <a class="card" href="#!">
                <div class="front awards-four"></div>
                <div class="back">
                  <div>
                    <p>
                      India Dealbook: HireXP, Magicpin raise funds; Marico exits
                      Bellezimo
                    </p>
                    <button class="button">Click Here</button>
                  </div>
                </div>
              </a>
            </div>
            <p>
              India Dealbook: HireXP, Magicpin raise funds; Marico exits
              Bellezimo
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Home",

  components: {
    SwiperSlide,
    Swiper
  },

  data() {
    return {
      swiperOption: {
        autoplay: {
          // delay: 5000,
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
@import "../assets/scss/_hirexp.scss";
</style>
