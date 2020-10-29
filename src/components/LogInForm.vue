<template>
  <div class="form">
    <div class="formTitle">Welcome!</div>
    <div class="formInputs">
      <v-text-field
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
    <div class="formButtons">
      <v-btn color="info" dark @click="$router.push({ path: '/main' })"
        >SIGN UP
      </v-btn>
      <v-btn color="info" dark>SIGN IN </v-btn>
    </div>

    <div class="formResetPassword">Forgot your password?</div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
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
}

.formTitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;

  color: #ffffff;

  text-shadow: 0px 4px 20px rgba(1, 143, 255, 0.15);
}

.formInputs {
  margin: 0 30px;
}

.formButtons {
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.formResetPassword {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  text-decoration-line: underline;

  color: #5fb2ff;
}
</style>
