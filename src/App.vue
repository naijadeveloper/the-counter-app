<template>
  <header class="header">
    <h1>
      <p>THE</p>
      <p>COUNTER APP</p>
    </h1>
    <p class="email">mmejuenoch@gmail.com</p>
  </header>
  <main class="main">
    <form class="form-options" @submit.prevent="handleSelect">
      <select class="select" @change="handleSelect">
        <option value="manual">Manual Count</option>
        <option value="range">Range Count</option>
        <option value="word">Word Count</option>
        <option value="info">Count Info</option>
      </select>
    </form>
  </main>
</template>

<script>
  export default {
    name: "App",
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