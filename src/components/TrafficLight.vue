<template>
  <div class="container">
    <h1>До переключения осталось {{ timeout }} секунд</h1>
    <div class="traffic-light">
      <div class="circle" :class="{ active: current == 'red', animated: current == 'red' && timeout < 4 }"></div>
      <div class="circle" :class="{ active: current == 'yellow', animated: current == 'yellow' && timeout < 4 }"></div>
      <div class="circle" :class="{ active: current == 'green', animated: current == 'green' && timeout < 4 }"></div>
    </div>
  </div>
</template>

<script>
//класс состояния
class State {
  constructor(name, dur, next) {
    this.name = name;
    this.dur = dur;
    this.next = next;
  }
}
//переключает цвета
class Controller {
  trigger(state, callback) {
    callback(state);
    setTimeout(() => {
      this.trigger(state.next, callback);
    }, state.dur * 1000);
  }
}
export default {
  props: ["start"],
  data() {
    return {
      current: "red",
      timeout: ''
    };
  },
  methods: {
    //получает таймер обратного отсчета
    getTimeOut(dur) {
      this.timeout = dur;
      let interval = setInterval(()=>{
        this.timeout --;
      }, 1000)
      setTimeout(()=> {
        clearInterval(interval)
      }, dur * 1000)
    },
    //менят цвет по заданным параметрам
    changeColors(color) {
      let controller = new Controller();

      controller.trigger(color, (state) => {
      this.current = state.name;
      this.getTimeOut(state.dur);
      if (this.$route.name != state.name) this.$router.push(state.name);
      })
    }
  },
  mounted() {
    //инициализирует состояния
    let red = new State("red", 10);
    let yellowToRed = new State("yellow", 3);
    let yellowToGreen = new State("yellow", 3);
    let green = new State("green", 15);
    //задает следующий цвет
    red.next = yellowToRed;
    yellowToRed.next = green;
    green.next = yellowToGreen;
    yellowToGreen.next = red;
    //переключает цвет
    if (this.start == 'red') {
      this.changeColors(red);
    }
    else if (this.start == 'yellow') {
      this.changeColors(yellowToRed);
    }
    else if (this.start == 'green') {
      this.changeColors(green);
    }
  },
};
</script>

<style scoped>
.timer {
  margin: 30px 0px;
}
.traffic-light {
  background: #373737;
  width: 150px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 10px;
  position: relative;
  margin-bottom: 225px;
}
.traffic-light:after {
  position: absolute;
  content: "";
  background-color: #b0bec5;
  bottom: -202px;
  left: 50%;
  transform: translateX(-50%);
  height: 200px;
  width: 25px;
}
.circle {
  width: 120px;
  height: 120px;
  border: 2px solid #000;
  border-radius: 50%;
  margin-bottom: 10px;
  opacity: 0.3;
}
.circle:nth-child(1) {
  background-color: #f44336;
}
.circle:nth-child(2) {
  background-color: #ffeb3b;
}
.circle:nth-child(3) {
  background-color: #4caf50;
}
.active {
  opacity: 1;
}
.animated {
  animation: blink 1s linear 3;
}
@keyframes blink {
  from {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0.3;
  }
}
</style>
