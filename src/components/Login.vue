<template>
  <div class="form">
    <div class="form__title">Welcome!</div>
    <div class="form__inputs">
      <v-text-field
        v-model="email"
        label="E-mail or Login"
        filled
        dark
        :rules="[rules.required]"
        height="58"
        prepend-inner-icon="fa-user-circle"
        color="primary"
        background-color="#2E3558"
        width="500"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        filled
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required]"
        :type="show ? 'text' : 'password'"
        @click:append="show = !show"
        dark
        height="58"
        prepend-inner-icon="fa-lock"
        color="primary"
        background-color="#2E3558"
      ></v-text-field>
    </div>
    <div class="form__buttons">
      <v-btn color="info" dark @click="signUp()">SIGN UP </v-btn>
      <v-btn color="info" dark @click="signIn()">SIGN IN </v-btn>
    </div>

    <div class="form__resetPassword">Forgot your password?</div>
    <v-snackbar v-model="snackbar" app>
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      show: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      snackbar: false,
      text: "",
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.text = "Welcome";
          this.snackbar = true;
          this.$router.replace({ path: "/main" });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use") {
            this.text =
              "Account with the given email address is already exists ";
            this.snackbar = true;
          }
          console.error(error);
        });
    },
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          console.log(response);
          this.$router.replace({ path: "/main" });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/user-not-found") {
            this.text = "User not found";
            this.snackbar = true;
            return;
          }
          if (errorCode === "auth/wrong-password") {
            this.text = "Wrong password";
            this.snackbar = true;
            return;
          }

          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.form {
  max-width: 480px;
  min-width: 300px;
  max-height: 595px;
  min-height: 450px;
  background: linear-gradient(180deg, #1e1156 100%, rgba(28, 35, 64, 0) 100%);
  filter: drop-shadow(0px 25px 25px rgba(0, 3, 32, 0.5));
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  &__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    color: #ffffff;
    text-shadow: 0px 4px 20px rgba(1, 143, 255, 0.15);
  }

  &__inputs {
    margin: 0 30px;
  }

  &__buttons {
    width: 80%;
    display: flex;
    justify-content: space-around;
  }

  &__resetPassword {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #5fb2ff;
  }
}
</style>
