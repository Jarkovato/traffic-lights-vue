<template>
  <div class="container">
    <!-- <h1>start:{{ this.start }}</h1> -->
    <div class="timer">
      Сейчас горит {{ russianCurrentColor }} цвет, через
      <b>{{ currentTime }}</b> сек будет гореть {{ russianNextColor }}
    </div>
    <div class="traffic-light">
      <div :class="currentColor === 'red' ? 'circle' : 'circle disabled'"></div>
      <div
        :class="currentColor === 'yellow' ? 'circle' : 'circle disabled'"
      ></div>
      <div
        :class="currentColor === 'green' ? 'circle' : 'circle disabled'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["start"],
  data() {
    return {
      colors: {
        red: "red",
        yellow: "yellow",
        green: "green",
      },
      currentColor: "",
      nextColor: "",
      currentTime: "",
    };
  },
  methods: {
    getInterval() {
      let interval = setInterval(() => {
        this.changeColors();
      }, 31000);
      setTimeout(()=>{
        clearInterval(interval)
      }, 3100000)
    },
    //переключает цвета по порядку
    changeColors() {
      const red = this.colors.red;
      const yellow = this.colors.yellow;
      const green = this.colors.green;
      if (this.start === red) {
        this.changeColor(10, red, yellow, 0);
        this.changeColor(3, yellow, green, 10000);
        this.changeColor(15, green, yellow, 13000);
        this.changeColor(3, yellow, red, 28000);
        setTimeout(() => {
          this.start = red;
        }, 30000);
      } else if (this.start === yellow) {
        this.changeColor(3, yellow, green, 0);
        this.changeColor(15, green, yellow, 3000);
        this.changeColor(3, yellow, red, 18000);
        this.changeColor(10, red, yellow, 21000);
        setTimeout(() => {
          this.start = yellow;
        }, 30000);
      } else if (this.start === green) {
        this.changeColor(15, green, yellow, 0);
        this.changeColor(3, yellow, red, 15000);
        this.changeColor(10, red, yellow, 18000);
        this.changeColor(3, yellow, green, 28000);
        setTimeout(() => {
          this.start = green;
        }, 30000);
      }
    },
    //переключает цвет
    changeColor(timer, color, newColor, seconds) {
      setTimeout(() => {
        //добавляет роут
        this.$router.push(color);
        //обновляет текущее время
        this.currentTime = timer;
        this.setTimer(timer);
        //задает цвета
        this.currentColor = color;
        this.nextColor = newColor;
      }, seconds);
    },
    //считает обратный отсчет
    setTimer(sec) {
      let seconds = sec - 1;
      const timer = setInterval(() => {
        this.currentTime = seconds;
        seconds--;
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
      }, seconds * 1000);
    },
  },
  //вызывает переключение цветов
  mounted() {
    //первый запуск светофора
    this.changeColors();
    this.getInterval();
  },
  computed: {
    // переводит на русский для заголовков текущего цвета
    russianCurrentColor() {
      let result;
      if (this.currentColor === "red") result = "красный";
      else if (this.currentColor === "yellow") result = "желтый";
      else if (this.currentColor === "green") result = "зеленый";
      return result;
    },
    // переводит на русский для заголовков следующего цвета
    russianNextColor() {
      let result;
      if (this.nextColor === "red") result = "красный";
      else if (this.nextColor === "yellow") result = "желтый";
      else if (this.nextColor === "green") result = "зеленый";
      return result;
    },
  },
};
</script>

<style scoped>
/* h1 {
  position: fixed;
  left: 150px;
} */
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
.disabled {
  filter: opacity(0.3);
}
</style>
