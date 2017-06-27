<template>
  <div class="root">
  
    <md-sidenav class="md-left" ref="sidenav">
  
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Application</h3>
        </div>
      </md-toolbar>
  
      <md-list>
        <md-list-item v-for="(r,i) in routes" :key="i">
          <router-link @click.native="toggleSidenav" :to="r.path">
            <md-icon>{{r.icon}}</md-icon>
            <span>{{r.text}}</span>
          </router-link>
        </md-list-item>
      </md-list>
  
    </md-sidenav>
  
    <md-toolbar>
      <md-button @click.native="toggleSidenav" class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
  
      <h2 class="md-title" style="flex: 1">{{$route.meta.title}}</h2>
  
      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
    <div class="root-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'root',

  data: () => ({
    routes: [{
      path: '/',
      text: 'User List',
      icon: 'account_box'
    }, {
      path: '/albums',
      text: 'Albums',
      icon: 'account_box'
    }]
  }),

  methods: {
    toggleSidenav() {
      this.$refs.sidenav.toggle()
    }
  }
}
</script>

<style>
.root-view {
  position: absolute;
  top: 64px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow-y: auto;
}
</style>
