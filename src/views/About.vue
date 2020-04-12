<template>
  <div class="about">
    <h1>This is an about page</h1>

    <section class="hirexp-section">
      <div class="container">
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
                  Provident consectetur natus voluptatem quis tenetur sed beatae
                  eius sint.
                </p>
                <button class="button">Click Here</button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hirexp-section {
  .content {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;
    .card {
      color: inherit;
      cursor: pointer;
      width: calc(33% - 2rem);
      min-width: calc(33% - 2rem);
      height: 400px;
      min-height: 400px;
      perspective: 1000px;
      margin: 1rem;
      position: relative;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      &:hover .front {
        transform: rotateY(180deg);
      }
      &:hover .back {
        transform: rotateY(0deg);
      }
      &:nth-child(even) .back .button {
        background: linear-gradient(135deg, #e61a80, #e61a3c);
      }
      &:nth-child(even) .back .button:before {
        box-shadow: 0 0 10px 10px rgba(230, 26, 60, 0.25);
        background-color: rgba(230, 26, 60, 0.25);
      }
      .front,
      .back {
        display: flex;
        border-radius: 6px;
        background-position: center;
        background-size: cover;
        text-align: center;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100%;
        width: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transition: ease-in-out 600ms;
      }
      .front {
        background-size: cover;
        padding: 2rem;
        font-size: 1.618rem;
        font-weight: 600;
        color: #fff;
        overflow: hidden;
        &:before {
          position: absolute;
          display: block;
          content: "";
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #1a9be6, #1a57e6);
          opacity: 0.25;
          z-index: -1;
        }
      }
      .back {
        background: #ffffff;
        color: #333;
        transform: rotateY(-180deg);
        padding: 0 2em;
        .button {
          transform: translateZ(40px);
          cursor: pointer;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          font-weight: bold;
          color: #fff;
          padding: 0.5em 1em;
          border-radius: 100px;
          border: none;
          position: relative;
          transform-style: preserve-3d;
          transition: 300ms ease;
          background: linear-gradient(135deg, #1a9be6, #1a57e6);
          &:before {
            transition: 300ms ease;
            position: absolute;
            display: block;
            content: "";
            transform: translateZ(-40px);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            height: calc(100% - 20px);
            width: calc(100% - 20px);
            border-radius: 100px;
            left: 10px;
            top: 16px;
            box-shadow: 0 0 10px 10px rgba(26, 87, 230, 0.25);
            background-color: rgba(26, 87, 230, 0.25);
          }
          &:hover {
            transform: translateZ(55px);
          }
          &:hover:before {
            transform: translateZ(-55px);
          }
          &:active {
            transform: translateZ(20px);
          }
          &:active:before {
            transform: translateZ(-20px);
            top: 12px;
          }
        }
      }
    }
  }
}
</style>
