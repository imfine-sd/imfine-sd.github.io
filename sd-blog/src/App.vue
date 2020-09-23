<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            :key="item.text"
            :to="item.path"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <v-toolbar-title>IMFINE SD</v-toolbar-title>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch class="switch" inset label="Dark Mode" v-model="darkStatus" @click="changeMode"></v-switch>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    methods: {
      changeMode() {
        console.log("DD = ", this.darkStatus)
        this.$vuetify.theme.dark = this.darkStatus
      }
    },
    data: () => ({
      darkStatus: false,
      drawer: null,
      items: [
        { icon: 'mdi-home', text: 'Main', path: '/' },
        { icon: 'mdi-archive', text: 'Archives', path: '/archives' },
        { icon: 'mdi-update', text: 'Clock', path: '/clock' },
        { icon: 'mdi-image', text: 'Image', path: '/image' },
        { icon: 'mdi-information', text: 'About', path: '/about' },
      ],
    }),
  }
</script>

<style scoped>

.switch {
  display: flex;
  top: 10px;
  position: relative;
  align-items: center;
  justify-content: center;
}

</style>