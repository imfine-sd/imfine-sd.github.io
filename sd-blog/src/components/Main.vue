<template>
  <div class="contents">
    <imfine-card id="icon" @mouseover="false"></imfine-card>
    <!-- <img id="icon" src="../../src/assets/imfine_4.png" @mouseover="false"> -->
  </div>
</template>

<script>
import ImfineCard from '@/components/ImfineCard.vue';

export default {
  components: {
    ImfineCard
  },
  mounted() {
    let isDrag = false;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const image = document.getElementById('icon')
    window.addEventListener('mousedown', (e) => {
      let top = Number(image.style.top.replace("px", ""))
      let left = Number(image.style.left.replace("px", ""))
      let isMouseOver = (e.offsetX - left) <= 200 && (e.offsetX - left) >= 0
       && (e.offsetY - top) <= 200 && (e.offsetY - top) >= 0

      if (!isMouseOver) return
      x = e.offsetX;
      y = e.offsetY;
      isDrag = true
    })

    window.addEventListener('mousemove', (e) => {
      if (isDrag) {
        x = e.offsetX;
        y = e.offsetY;
        setImagePosition();
      }
    })

    window.addEventListener('mouseup', () => {
      if (!isDrag) return

      isDrag = false;
      setImagePosition();
      x = 0;
      y = 0;
    })

    setImagePosition()
    function setImagePosition() {
      image.style.left = x-100+'px';
      image.style.top = y-100+'px';
    }

  }
}
</script>

<style scoped>
#icon {
  pointer-events: none;
  position: absolute;
  width: 200px;
  height: 200px;
}
</style>