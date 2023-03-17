<template>
  <div class="word">
    <div class="controls">
      <form class="form-input" @submit.prevent="handleCountWords">
        <textarea placeholder="Paste/write text" v-model="text"></textarea>
        <button>Count</button>
      </form>
    </div>
    <div class="modal-popup">
      <div class="popup-box"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

  export default {
    name: "Word",
    setup() {
      const text = ref(null);
      const wordsCount = ref(0);

      const handleCountWords = () => {
        wordsCount.value = text.value.split(" ").length;
        text.value = null;
      }

      return {text, wordsCount, handleCountWords}
    }
  }
</script>