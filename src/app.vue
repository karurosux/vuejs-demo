<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.root {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
}

.module {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

