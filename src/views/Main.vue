<template>
  <v-app app dark>
    <v-navigation-drawer app v-model="drawer" class="navigation">
      <v-list subheader>
        <v-subheader>
          <div class="navigationTitle">
            valuet
            <div class="divider"></div>
          </div>
        </v-subheader>
        <v-list-item-group
          mandatory
          color="#616A8B"
          active-class="border"
          v-model="model"
        >
          <v-list-item v-for="(item, index) in menuItem" :key="index">
            <v-list-item-icon>
              <v-icon color="primary">mdi-message-text</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-divider> </v-divider>
        <v-list-item-group color="#616A8B" active-class="border">
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">mdi-message-text</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider> </v-divider>
    </v-navigation-drawer>

    <v-app-bar app elevate-on-scroll class="app-bar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <div style="height: 100%"></div>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      drawer: true,
      model: 1,
      menuItem: ["Overview", "Wallets", "Transictions", "Exchange", "Market"],
    };
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.navigation::v-deep {
  background: radial-gradient(
    63.88% 129.61% at 25.55% 31.91%,
    #20135c 0%,
    #140739 92.82%
  );
  filter: drop-shadow(0px -5px 25px rgba(0, 3, 32, 0.5));

  .v-subheader {
    justify-content: center;
  }

  .divider {
    border: 1px solid #1288e8;
    width: 100px;
  }

  .navigationTitle {
    font-style: normal;
    font-weight: $font-weight-extra-bold;
    font-size: 24px;
    line-height: 28px;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(
      135deg,
      rgb(56, 134, 252) 100%,
      rgb(71, 160, 252) 100%,
      rgb(95, 177, 252) 100%
    );

    letter-spacing: 0.05em;
    text-transform: uppercase;

    text-shadow: 0px 5px 12px rgba(6, 5, 19, 0.25);
  }

  .border {
    background: #32395e;
    border-radius: 5px;
    border-bottom: 1px solid #1288e8;
  }
}

.app-bar {
  background: radial-gradient(
    63.88% 129.61% at 25.55% 31.91%,
    #20135c 0%,
    #140739 92.82%
  );
  border-bottom: 1px groove #2d317a;
}
</style>
