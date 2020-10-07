<template>
  <div class="qr">
      <qr-code :text="value"/>
  </div>
</template>

<script>

export default {
    data() {
        return {
            value: ''
        }
    },
    mounted() {
        this.value = this.$route.params.value
    }
}
</script>

<style>
.qr {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>