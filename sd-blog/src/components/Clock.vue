<template>
  <div class="container">
    <div class="time_item">
      <div>
        <p class="time hour" :style="{fontSize: font_scale*0.7+'vh'}">{{ date_info }}</p>
        <p class="time min" :style="{fontSize: font_scale*0.7+'vh'}">{{ time_info }}</p>
        <p class="time sec" :style="{fontSize: font_scale+'vh'}">{{ sec_info }}</p>
      </div>
    </div>
    <div class="btn add">
      <md-button class="md-fab" @click="setFontScaleValue(1);">
        <md-icon>add</md-icon>
      </md-button>
    </div>
    <div class="btn remove" @click="setFontScaleValue(-1);">
      <md-button class="md-fab">
        <md-icon>remove</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date_info: '',
      time_info: '',
      sec_info: '',
      timer: '',
      font_scale: 10
    }
  },
  methods: {
    setFontScaleValue(value) {
      this.font_scale += value;
      console.log(value);
    }
  },
  created() {
    clearInterval(this.timer)

    this.timer = setInterval(() => {
      const timestamp = new Date();

      const y = timestamp.getFullYear();
      let m = timestamp.getMonth()+1;
      let d = timestamp.getDate();
      if (m<=9) m = '0' + m
      if (d<=9) d = '0' + d
      this.date_info = `${y}/${m}/${d}`

      let hour = timestamp.getHours();
      let min = timestamp.getMinutes();
      let sec = timestamp.getSeconds();
      if (hour <= 9) hour = '0' + hour
      if (min <= 9) min = '0' + min
      if (sec <= 9) sec = '0' + sec
      this.time_info = `${hour}:${min}:${sec}`

      let ss = timestamp.getMilliseconds();
      if (ss <= 9) ss = '00'+ss;
      else if (ss <= 99) ss = '0'+ss;
      
      this.sec_info = `${sec}.${ss}`;

      // console.log(time_sec)
    }, 1)
  }
}
</script>

<style scoped>

.container {
  width: 100%;
  height: 100%;
}

.time_item {
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
  bottom: 0;
}

.add {
  position: absolute;
  bottom: 0;
  right: 0;
}

</style>