<template>
  <div class="manual">
    <div :class="countClass">
      <p>{{ count }}</p>
      <button @click="reset">Reset</button>
    </div>
    <div class="controls">
      <form class="form-input" @submit.prevent="handleSetValue">
        <input type="number" placeholder="Set counter" v-model="numberValue">
        <button>Set</button>
      </form>
      <div class="the-buttons">
        <button @click="increment" class="increment">+</button>
        <button @click="decrement" class="decrement">-</button>
      </div>
    </div>
  </div>
</template>

<script>
//composables
import counter from "../composables/counter";
import { ref, computed, watch } from "vue";

  export default {
    name: "Manual",
    setup() {
      const {count, increment, decrement, setValue, reset} = counter();
      const numberValue = ref(null);
      
      //this is just to determine the css style rules for
      //responsiveness to be given to the div.count-number
      //whenever the count.value number changes 
      const countClass = computed(() => {
        if(count.value >= 0 && count.value < 100) {
          return "count-number";
        }else if((count.value >= 100 && count.value < 1000) || (count.value < 0 && count.value >= -99)) {
          return "count-number hundred";
        } else if(count.value >= 1000 && count.value < 10000) {
          return "count-number thousand";
        } else if (count.value >= 10000) {
          return "count-number ten-thousand";
        } else {
          return "count-number ten-thousand";
        }
      });
      ///////////////

      const handleSetValue = () => {
        setValue(numberValue.value);
        numberValue.value = null;
      }

      return {
        handleSetValue,
        numberValue,
        count,
        increment,
        decrement,
        reset,
        countClass
      }
    }
  }
</script>