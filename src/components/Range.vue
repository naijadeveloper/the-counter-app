<template>
  <div class="range">
    <div class="count-number">
      <p>{{ rangeStart }}</p>
    </div>
    <div class="controls">
      <div class="form-input">
        <input type="number" placeholder="count up to" v-model="numberValue" :disabled="disableInput">
      </div>
      <div class="the-buttons">
        <button @click="handlePlayOrReset" :class="playOrReset">{{ playOrReset }}</button>
        <button @click="handleStop" :class="disabledOrStop">Stop</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onUnmounted } from "vue";
import counter from "../composables/counter";

export default {
  name: "Range",
  setup() {
    const { rangeStart, interval, play, stop, rangeReset } = counter();
    const numberValue = ref(null);
    const disableInput = ref(false);
    const playOrReset = ref("play");
    const disabledOrStop = computed(() => interval.value? "stop":"disabled");

    const handlePlayOrReset = () => {
      if(numberValue.value != null && playOrReset.value == "play") {
        play(numberValue.value);
        disableInput.value = true;
        playOrReset.value = "reset";
      }else if(playOrReset.value == "reset") {
        rangeReset();
        disableInput.value = false;
        numberValue.value = null;
        playOrReset.value = "play";
      }
    }

    const handleStop = () => {
      if(disabledOrStop.value == "stop") {
        stop();
      }
    }

    onUnmounted(() => {
      rangeReset();
    });

    return {numberValue, disableInput, disabledOrStop, playOrReset, rangeStart, handlePlayOrReset, handleStop}
  }
}
</script>