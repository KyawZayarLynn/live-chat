<template>
  <h2>Sign up</h2>
    <form @submit.prevent="signUp">
      <input type="text" placeholder="display name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>Sign up</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import { auth } from "../../src/firebase/config"
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let error = ref(null);
    let signUp = async() => {
      try {
        let res = await createUserWithEmailAndPassword(auth, email.value, password.value);
        if (!res) {
          throw new Error("couldn't create a new user");
        }
        console.log(res.user)
      } catch (err) {
        const errorMessageMapping = {
      "auth/email-already-in-use": "Email already exists",
      };
        const errorCode = err.code;
        const friendlyErrorMessage = errorMessageMapping[errorCode];

        error.value = friendlyErrorMessage;
        console.log(error.value);
      }
    }

    return { displayName, email, password , signUp , error};
  }
}
</script>

<style>

</style>