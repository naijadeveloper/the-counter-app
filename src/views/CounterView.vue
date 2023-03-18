<template>
  <header class="header">
    <h1>
      <p>THE</p>
      <p>COUNTER APP</p>
    </h1>
    <p class="email">❤mmejuenoch@gmail.com❤</p>
  </header>
  <main class="main">
    <form class="form-options" @submit.prevent="handleSelect">
      <select class="select" @change="handleSelect">
        <option value="manual">Manual Count</option>
        <option value="range">Range Count</option>
        <option value="word">Word Count</option>
      </select>
    </form>
    <!-- So there are basically 3 kind of counter in this app.
      (1) Is called 'manual' and that means, you count by yourself with
          the plus and minus buttons. [[This is basically the Altschool counter project]]
      (2) This is according to a range, you start counting and it counts up to
          the range you specified, it either counts up to a positive number
          or counts down to a negative number
      (3) This just counts the number of words in the text it got
          from the textarea  -->
    <Manual v-if="selected == 'manual'"/>
    <Range v-else-if="selected == 'range'"/>
    <Word v-else/>
  </main>
</template>

<script>
//components
import Manual from "../components/Manual";
import Range from "../components/Range";
import Word from "../components/Word";

export default {
  name: "CounterView",
  components: {Manual, Range, Word},
  data(){
    return {
      selected: "manual",
    }
  },
  methods: {
    handleSelect(event) {
      this.selected = event.target.value;
    }
  }
}
</script>