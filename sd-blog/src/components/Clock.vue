<template>
  <div class="contents">
    <div>
      <p class="time hour">{{ date_info }}</p>
      <p class="time min">{{ time_info }}</p>
      <p class="time sec">{{ sec_info }}</p>
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
      timer: ''
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

.contents {
  display: flex;
  justify-content: center;
  align-items: center;
}

.time {
  font-size: 10vh;
  display: flex;
  justify-content: center;
}
</style>