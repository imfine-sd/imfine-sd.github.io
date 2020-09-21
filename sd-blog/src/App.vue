
<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-accent">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <router-link to="/">
          <span class="md-title">
            IMFINE SD
          </span>
        </router-link>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Menu</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <router-link to="/archives">
            <md-list-item>
              <md-icon>archive</md-icon>
              <span class="md-list-item-text">Archive</span>
            </md-list-item>
          </router-link>

          <router-link to="/clock">
            <md-list-item>
              <md-icon>access_time</md-icon>
              <span class="md-list-item-text">Clock</span>
            </md-list-item>
          </router-link>

          <router-link to="/about">
            <md-list-item>
                <md-icon>info</md-icon>
                <span class="md-list-item-text">About</span>
            </md-list-item>
          </router-link>

        </md-list>
      </md-app-drawer>

      <md-app-content class="contents">
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style scoped> 
  .page-container {
    margin: 0 auto;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .md-app {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .contents {
    position: sticky;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>