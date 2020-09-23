<template>
  <div class="container">
    <div class="logo">
      <img id="icon" src="../../src/assets/sd.png" />
    </div>
    <div class="information">
      <b>Technical Inquiry</b>
      <div>jongun.won@im-fine.co.kr</div>
      <div>suyoung.kim@im-fine.co.kr</div>
      <br />
      <b>Project Inquiry</b>
      <div>pilsun.yang@im-fine.co.kr</div>
    </div>
    <canvas id="canvas"></canvas>
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
    let isDrawing = false;
    let x = 0;
    let y = 0;

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    canvas.setAttribute('width', window.innerWidth)
    canvas.setAttribute('height', window.innerHeight - 100)
    canvas.style.width = window.innerWidth
    canvas.style.height = window.innerHeight - 100

    canvas.addEventListener('mousedown', e => {
      x = e.offsetX;
      y = e.offsetY;
      isDrawing = true;
    });

    canvas.addEventListener('mousemove', e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
      }
    });

    window.addEventListener('mouseup', e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
      }
    });

    window.addEventListener('mouseout', e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
      }
    })

    function drawLine(context, x1, y1, x2, y2) {
      context.beginPath();
      context.strokeStyle = 'red';
      context.lineWidth = 1;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }
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
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.information {
  pointer-events: none;
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 50px;
  font-size: 16px;
}

canvas {
  position: absolute;
  z-index: 2;
}
</style>