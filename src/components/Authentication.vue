<template>
  <div class="container">
    <div class="login-form">
      <Login />
    </div>
    <div class="greeting">
      <div class="greeting__title">VALUET</div>
      <div class="greeting__divider"></div>
      <div class="greeting__text">Your currency dashboard</div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
export default {
  name: "Authentication",
  data() {
    return {};
  },
  components: {
    Login,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: $grid-sm) {
    max-width: none;
    align-self: center;
    padding: 20px;
    flex-direction: column-reverse;
  }

  @media (max-width: $grid-md) {
    max-width: none;
    align-self: center;
    padding: 20px;
  }
  @media (max-width: $grid-lg) {
    max-width: 750px;
    align-self: center;
  }
  @media (max-width: $grid-xl) {
    max-width: 970px;
    align-self: center;
  }
}

.greeting {
  font-family: $font-mamily-base;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: $grid-sm) {
    padding-bottom: 50px;
  }

  &__title {
    font-weight: $font-weight-extra-bold;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(
      135deg,
      rgb(188, 211, 245),
      rgb(71, 160, 252),
      rgb(95, 177, 252)
    );
    font-size: 112px;

    @media (max-width: $grid-sm) {
      font-weight: $font-weight-bold;
      font-size: 50px;
    }

    @media (min-width: $grid-md) {
      font-weight: $font-weight-bold;
      font-size: 80px;
    }
  }

  &__divider {
    height: 1px;
    background: $blue;
    width: 275px;
  }

  &__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: $font-weight-light;
    font-size: 40px;
    line-height: 47px;

    color: $white;

    text-shadow: 0px 4px 20px rgba(1, 143, 255, 0.15);
    padding-top: 34px;

    @media (max-width: $grid-sm) {
      font-size: 20px;
      line-height: 25px;
      text-align: center;
    }

    @media (min-width: $grid-md) {
      font-size: 25px;
      line-height: 35px;
      text-align: center;
    }
  }
}
</style>
