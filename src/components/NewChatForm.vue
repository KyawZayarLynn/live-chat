<template>
  <form>
    <textarea @keypress.enter="handleSubmit" placeholder="Text message and hit enter to send" v-model="message"></textarea>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/composables/getUser';
import { Timestamp } from "firebase/firestore";
import useCollection from "../../src/composables/useCollection"

export default {
  setup() {
    let message = ref("");
    let { user } = getUser();
    let { error, addDoc } = useCollection("messages");
    let handleSubmit = async() => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at:Timestamp.now()
      }
      await addDoc(chat);
      message.value = "";
    }
    return {message,handleSubmit}
  }
}
</script>

<style>
form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
</style>