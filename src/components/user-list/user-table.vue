<template>
  <md-table>
  
    <md-table-header>
      <md-table-row>
        <md-table-head>
          <b>Name</b>
        </md-table-head>
        <md-table-head>Email</md-table-head>
        <md-table-head>Website</md-table-head>
        <md-table-head>Working at</md-table-head>
      </md-table-row>
    </md-table-header>
  
    <md-table-body>
      <md-table-row v-for="(u,i) in users" :key="i">
        <md-table-cell>
          <b>{{u.name}}</b>
        </md-table-cell>
        <md-table-cell>{{u.email}}</md-table-cell>
        <md-table-cell>
          <a v-bind:href="`https://www.${u.website}`" target="_blank">{{u.website}}</a>
        </md-table-cell>
        <md-table-cell>{{u.company.name}}</md-table-cell>
      </md-table-row>
    </md-table-body>
  
  </md-table>
</template>

<script>
export default {
  name: 'user-table',

  props: {
    users: {
      type: Array,
      defaultValue: []
    }
  }

}
</script>

<style>

</style>
