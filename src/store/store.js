import { createStore } from "vuex";

export default createStore({
  state: {
    //manual component state
    counter: 0,
    
    //range component state
    range: [0, 0],
    interval: null
  },
  mutations: {
    //manual component mutations
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    setValue(state, newValue) {
      newValue != null? state.counter = newValue : "";
    },
    reset(state) {
      state.counter = 0;
    },

    //Range component mutations
    play(state, rangeEnd) {
      if(rangeEnd == 0) {return};
      state.range[1] = rangeEnd;
      let plusOrMinus = state.range[1] > 0? "+": "-"

      state.interval = setInterval(() => {
        if(plusOrMinus == "+") {
          if(state.range[0] != state.range[1]) {
            state.range[0]++;
          }else {
            clearInterval(state.interval);
            state.interval = null;
          }
        }else {
          if(state.range[0] != state.range[1]) {
            state.range[0]--;
          }else {
            clearInterval(state.interval);
            state.interval = null;
          }
        }
      }, 1000)
    },
    stop(state) {
      clearInterval(state.interval);
      state.interval = null;
    },
    rangeReset(state) {
      clearInterval(state.interval);
      state.interval = null;
      state.range[0] = 0;
    }
  }
});