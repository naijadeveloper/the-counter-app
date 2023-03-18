<template>
  <div class="range">
    <div :class="countClass">
      <p>{{ rangeStart }}</p>
    </div>
    <div class="controls">
      <div class="form-input">
        <input type="number" placeholder="count up to" v-model="numberValue" :disabled="disableInput">
      </div>
      <div class="the-buttons">
        <button @click="handleCountOrReset" :class="countOrReset">{{ countOrReset }}</button>
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
    const countOrReset = ref("count");
    const disabledOrStop = computed(() => interval.value? "stop":"disabled");

    //this is just to determine the css style rules for
    //responsiveness to be given to the div.count-number
    //whenever the count.value number changes 
    const countClass = computed(() => {
      if(rangeStart.value >= 0 && rangeStart.value < 100) {
        return "count-number";
      }else if((rangeStart.value >= 100 && rangeStart.value < 1000) || (rangeStart.value < 0 && rangeStart.value >= -99)) {
        return "count-number hundred";
      } else if(rangeStart.value >= 1000 && rangeStart.value < 10000) {
        return "count-number thousand";
      } else if (rangeStart.value >= 10000) {
        return "count-number ten-thousand";
      } else {
        return "count-number ten-thousand";
      }
    });
    ///////////////

    const handleCountOrReset = () => {
      if(numberValue.value != null && countOrReset.value == "count") {
        play(numberValue.value);
        disableInput.value = true;
        countOrReset.value = "reset";
      }else if(countOrReset.value == "reset") {
        rangeReset();
        disableInput.value = false;
        numberValue.value = null;
        countOrReset.value = "count";
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

    return {
      numberValue,
      disableInput, 
      disabledOrStop, 
      countOrReset, 
      rangeStart, 
      handleCountOrReset, 
      handleStop,
      countClass
    }
  }
}
</script>