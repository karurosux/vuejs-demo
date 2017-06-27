<template>
  <md-dialog class="md-dialog-container" ref="dialog">
    <md-dialog-title>{{title}}</md-dialog-title>
    <md-dialog-content class="dialog">
      <row>
        <div class="picture-frame" v-bind:style="{'background':`url(${selectedPicture})`}">
        </div>
      </row>
      <row class="thumbnail-container">
        <div>
          <div v-for="(p,i) in pictures" :key="i" v-on:click="selectPicture({url:p.url})" class="thumbnail" v-bind:style="{'background':`url(${p.thumbnailUrl})`}"></div>
        </div>
      </row>
    </md-dialog-content>
  </md-dialog>
</template>

<script>
import { baseUrl } from '../../main.config.js'
import { Row, Column } from 'vue-layouts'
export default {
  name: 'album-dialog',

  components: {
    Row,
    Column
  },

  data: () => ({
    title: '',
    pictures: [],
    selectedPicture: ''
  }),

  methods: {

    selectPicture(params) {
      const {
        url
      } = params;
      this.selectedPicture = url;
    },

    openAlbum(params) {
      const component = this
      const {
        albumId,
        albumName
      } = params

      component.title = albumName
      this.$http.get(`${baseUrl}/photos`)
        .then(response => {
          component.pictures = response.body
            .filter(a => a.albumId === albumId)
          component.selectedPicture = component.pictures[0].url
          component.$refs.dialog.open()
        })
    }
  }
}
</script>

<style scoped>
.picture-frame {
  background-color: gray;
  background-size: cover !important;
  background-position: center !important;
  height: 290px;
  width: 100%;
}

.thumbnail-container {
  white-space: nowrap;
  overflow-x: auto;
}

.thumbnail {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-size: cover !important;
}

.thumbnail:hover {
  cursor: pointer;
}
</style>

<style>
.md-dialog-container .md-dialog {
  width: 450px;
}
</style>

