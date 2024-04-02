<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div class="single"  v-for="message in formattedMessages" :key="message.id">
        <span class="created-at">{{ message.created_at }} ago</span>
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import {collection,onSnapshot, orderBy,query}  from "firebase/firestore"
import { computed, onUpdated, ref } from 'vue';
import { formatDistanceToNow } from "date-fns";
export default {
  setup() {
    let messages = ref([]);
    //auto scrolling feature
    let msgBox = ref(null);
    onUpdated(() => {
      msgBox.value.scrollTop = msgBox.value.scrollHeight
    })

    let formattedMessages = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate())
        return {...msg,created_at:formatTime}
      })
    })
    let q = query(collection(db,"messages"),orderBy("created_at"));
    onSnapshot(q, (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        let document = { id: doc.id, ...doc.data() };
          doc.data().created_at && results.push(document);
      })
      messages.value = results;
    })
    return { formattedMessages , msgBox };
  }
}
</script>

<style>
 .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>