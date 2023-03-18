<template>
  <div class="word">
    <p>
      <span :class="{show: showResult == true}">{{ wordNum }}</span>
      <span :class="{show: showResult == true}" @click="handleHideResult">X</span>
    </p>
    <div class="controls">
      <form class="form-input" @submit.prevent="handleCountWords">
        <textarea placeholder="Paste/write text" v-model="text"></textarea>
        <button>Count</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

  export default {
    name: "Word",
    setup() {
      const text = ref(null);
      const wordsCount = ref(0);
      const showResult = ref(false);

      const handleCountWords = () => {
        if(text.value != null) {
          wordsCount.value = text.value.split(" ").length;
          showResult.value = true;
        }
      }

      const handleHideResult = () => {
        showResult.value = false;
        text.value = null;
      }

      return {
        text,
        wordsCount, 
        handleCountWords,
        wordNum: computed(() => wordsCount.value > 1? `${wordsCount.value} words` : `${wordsCount.value} word`),
        showResult,
        handleHideResult
      }
    }
  }
</script>