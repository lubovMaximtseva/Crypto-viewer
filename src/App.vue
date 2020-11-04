<template>
  <v-app>
    <div class="appMain">
      <router-view> </router-view>
    </div>
  </v-app>
</template>
-
<script>
export default {
  name: "App",

  data: () => ({
    //
  }),

  computed: {},
};
</script>

<style lang="scss" scoped>
@import "./scss/variables";

.appMain {
  height: 100%;
  display: flex;
  background: radial-gradient(
    63.88% 129.61% at 25.55% 31.91%,
    #20135c 0%,
    #140739 92.82%
  );
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.25);
}
</style>
