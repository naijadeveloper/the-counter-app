<template>
  <div class="manual">
    <div class="count-number">
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
import { ref } from "vue";

  export default {
    name: "Manual",
    setup() {
      const {count, increment, decrement, setValue, reset} = counter();
      const numberValue = ref(null);

      const handleSetValue = () => {
        setValue(numberValue.value);
        numberValue.value = null;
      }


      return {handleSetValue, numberValue, count, increment, decrement, reset}
    }
  }
</script>