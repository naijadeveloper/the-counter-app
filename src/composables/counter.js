import { useStore } from "vuex";
import { computed } from "vue";

const counter = () => {
  const store = useStore();
  
  return {
    //data for manual count component
    count: computed(() => store.state.counter),

    //data for range count component
    rangeStart: computed(() => store.state.range[0]),
    interval: computed(() => store.state.interval),

    //methods for manual count component
    increment() {
      store.commit("increment")
    },
    decrement() {
      store.commit("decrement")
    },
    setValue(newValue) {
      store.commit("setValue", newValue);
    },
    reset() {
      store.commit("reset");
    },

    //methods for range count component
    play(rangeEnd) {
      store.commit("play", rangeEnd);
    },
    stop() {
      store.commit("stop");
    },
    rangeReset() {
      store.commit("rangeReset");
    }
  }
}


export default counter;