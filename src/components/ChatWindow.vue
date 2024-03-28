<template>
  <div class="chat-window">
    <div class="messages">
      <div class="single">
        <span class="created-at">3mins ago</span>
        <span class="name">Kyawzayarlynn</span>
        <span class="message">Hello</span>
      </div>
      <div class="single">
        <span class="created-at">1mins ago</span>
        <span class="name">AungAung</span>
        <span class="message">Hi</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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