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
export default {
  setup() {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let signUp = () => {
      
    }

    return { displayName, email, password , signUp };
  }
}
</script>

<style>

</style>