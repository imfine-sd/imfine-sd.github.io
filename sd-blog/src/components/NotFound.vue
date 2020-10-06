<template>
  <div>
      Not Found
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.location.href.indexOf('access_token') != -1) {
      const query = window.location.href.split('/')[4]
      const token = query.split('&')[0].replace('access_token=', '')

      this.$store.commit('SET_TOKEN', token)
      this.$router.push('/android')
    }
  }

}
</script>

<style>

</style>