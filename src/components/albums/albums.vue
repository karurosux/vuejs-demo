<template>
  <div class="module root-padding">
  
    <md-card>
  
      <md-card-content>
  
        <md-toolbar class="md-transparent">
          <h2 class="md-title">Select a user</h2>
          <md-input-container style="width:50%;">
            <md-select @change="getAlbums(selectedUser)" v-model="selectedUser">
              <md-option v-for="(u,i) in users" :key="i" :value="u.id">{{u.name}}</md-option>
            </md-select>
          </md-input-container>
        </md-toolbar>
  
      </md-card-content>
  
    </md-card>
  
    <md-card v-if="isAlbumsEmpty">
      <md-card-content>
        <p style="text-align:center;">Select a user to see his pictures.</p>
      </md-card-content>
    </md-card>
  
    <row style="padding-top:16px;">
      <column v-for="(a,i) in albums" :key="i" :size="2">
  
        <md-card style="width:200px;margin-bottom:16px;">
          <md-card-media-cover md-text-scrim>
            <md-card-media md-ratio="16:9">
              <img src="../../assets/album-default-cover.jpg" alt="Skyscraper">
            </md-card-media>
  
            <md-card-area>
              <md-card-header>
                <div class="md-title">{{a.title}}</div>
                <div class="md-subhead">No subtitle</div>
              </md-card-header>
  
              <md-card-actions>
                <md-button>delete</md-button>
                <md-button @click.native="$refs.albumDialog.openAlbum({albumId: a.id, albumName: a.title})" class="md-primary md-raised">open</md-button>
              </md-card-actions>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
  
      </column>
    </row>
  
    <album-dialog ref="albumDialog">
  
    </album-dialog>
  
  </div>
</template>

<script>
import { baseUrl } from '../../main.config.js'
import { Container, Row, Column } from "vue-layouts"
import albumDialog from './album-dialog'
export default {
  name: 'albums',

  created() {
    const component = this
    this.$http.get(`${baseUrl}/users`)
      .then(response => {
        component.users = response.body
      })
  },

  components: {
    Column,
    Container,
    Row,
    albumDialog
  },

  data: () => ({
    users: [],
    albums: [],
    selectedUser: 0
  }),

  methods: {

    getAlbums(userId) {
      const component = this
      this.$http.get(`${baseUrl}/albums`)
        .then(response => {
          component.albums = response.body
            .filter(a => a.userId === userId)
        })
    }

  },

  computed: {
    isAlbumsEmpty() {
      return this.albums.length === 0;
    }
  }

}
</script>

<style scoped>
.root-padding {
  padding: 16px;
}
</style>
