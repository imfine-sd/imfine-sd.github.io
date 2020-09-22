<template>
  <div class="container">
    <div class="logo">
      <img id="icon" src="../../src/assets/sd.png" />
    </div>
    <div class="info">
      <b>Technical Inquiry</b>
      <div>jongun.won@im-fine.co.kr</div>
      <div>suyoung.kim@im-fine.co.kr</div>
      <br />
      <b>Project Inquiry</b>
      <div>pilsun.yang@im-fine.co.kr</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      "mouse_on": false
    }
  },
  mounted() {
    const container = document.querySelector('.container')
    console.log(container)
    const ic = document.querySelector('#icon')
    console.log(ic)

  },
  methods: {
    onMouseDown() {
      console.log("onMouseDown")
      this.mouse_on = true;
    },
    onMouseMove() {
      if (!this.mouse_on) return
      console.log("onMouseMove")
    },
    onMouseUp() {
      console.log("onMouseUp")
      this.mouse_on = false;
    }
  }
}
</script>

<style scoped>

.container {
  width: 100%;
  height: 100%;
}

.logo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info {
  position: absolute;
  bottom: 0;
  margin: 50px;
  font-size: 16px;
}

</style>