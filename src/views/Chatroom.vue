<template>
  <div class="container">
    <Navbar></Navbar>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'

export default {
  components: {
    NewChatForm, Navbar },
  setup() {
    let router = useRouter();
    let { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    })
  }
}
</script>

<style>

</style>