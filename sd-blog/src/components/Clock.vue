<template>
  <div class="container">
    <div class="time_item" id="clock_bg">
      <div>
        <p class="time hour" :style="{ fontSize: font_scale * 0.7 + 'vh' }">
          {{ date_info }}
        </p>
        <p class="time min" :style="{ fontSize: font_scale * 0.7 + 'vh' }">
          {{ time_info }}
        </p>
        <p class="time sec" :style="{ fontSize: font_scale + 'vh' }">
          {{ sec_info }}
        </p>
      </div>
    </div>
    <div class="btn add" @click="setFontScaleValue(1)">
      <v-btn color="primary" fab x-large dark>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <div class="btn remove" @click="setFontScaleValue(-1)">
      <v-btn color="primary" fab x-large dark>
        <v-icon>mdi-minus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
let clock_bg = null;
let colors = ["#EC7063", "#D2B4DE", "#85C1E9", "#F9E79F", "#73C6B6", "#BFC9CA"];

export default {
  data() {
    return {
      date_info: "",
      time_info: "",
      sec_info: "",
      timer: "",
      font_scale: 20,
    };
  },
  created() {
    let last_sec = -1;
    let index = 0;
    console.log(colors, last_sec);

    this.$nextTick(() => {
      clock_bg = document.getElementById("clock_bg");
    });

    clearInterval(this.timer);

    this.timer = setInterval(() => {
      const timestamp = new Date();

      const y = timestamp.getFullYear();
      let m = timestamp.getMonth() + 1;
      let d = timestamp.getDate();
      if (m <= 9) m = "0" + m;
      if (d <= 9) d = "0" + d;
      this.date_info = `${y}/${m}/${d}`;

      let hour = timestamp.getHours();
      let min = timestamp.getMinutes();
      let sec = timestamp.getSeconds();
      if (hour <= 9) hour = "0" + hour;
      if (min <= 9) min = "0" + min;
      if (sec <= 9) sec = "0" + sec;
      this.time_info = `${hour}:${min}:${sec}`;

      let ss = timestamp.getMilliseconds();
      if (ss <= 9) ss = "00" + ss;
      else if (ss <= 99) ss = "0" + ss;

      this.sec_info = `${sec}.${ss}`;

      if (last_sec != sec) {
        if (last_sec == -1) {
          last_sec = sec;
          index = 0;
          console.log("II", last_sec);
        } else if (sec % 5 == 0) {
          console.log(sec, last_sec);
          last_sec = sec;

          if (index == colors.length - 1) {
            index = 0;
          } else {
            index++;
          }
          console.log(index);
          this.setColor(last_sec)
        }
        // console.log(time_sec)
      }
    }, 1);
  },
  methods: {
    setFontScaleValue(value) {
      this.font_scale += value;
      console.log(value);
    },
    setColor(change_sec) {
      if (change_sec % 30 == 0) {
        clock_bg.style.backgroundColor = colors[0];
      } else if (change_sec % 30 == 5) {
        clock_bg.style.backgroundColor = colors[1];
      } else if (change_sec % 30 == 10) {
        clock_bg.style.backgroundColor = colors[2];
      } else if (change_sec % 30 == 15) {
        clock_bg.style.backgroundColor = colors[3];
      } else if (change_sec % 30 == 20) {
        clock_bg.style.backgroundColor = colors[4];
      } else if (change_sec % 30 == 25) {
        clock_bg.style.backgroundColor = colors[5];
      }
    },
  },
};
</script>

let colors = ["#EC7063", "#D2B4DE", "#85C1E9", "#F9E79F", "#73C6B6", "#BFC9CA"];


<style scoped>

.aa {
  background-color: #EC7063;
}

.aa {
  background-color: #D2B4DE;
}


.aa {
  background-color: #85C1E9;
}


.aa {
  background-color: #F9E79F;
}

.aa {
  background-color: #73C6B6;
  background-color: #BFC9CA;
}

.container {
  padding: 0;
  margin: 0;

}


.time_item {
  background-color: bisque;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.time {
  display: flex;
  justify-content: center;
}

.btn {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}

.remove {
  position: absolute;
  left: 0;
  bottom: 0;
}

.add {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>