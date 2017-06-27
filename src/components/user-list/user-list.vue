<template>
  <div class="module root-padding">
  
    <md-card>
      <md-button id="buttonCreateUser" @click.native="addUser" class="md-fab md-primary right-fab">
        <md-icon>add</md-icon>
      </md-button>
      <user-table :users="users"></user-table>
    </md-card>
  
    <md-snackbar md-position="bottom center" ref="snackbar" md-duration="3000">
      <span>User created!</span>
      <md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">OK!</md-button>
    </md-snackbar>
  
    <md-dialog ref="newUserDialog" @close="cleanNewUser" md-open-from="#buttonCreateUser" md-close-to="#buttonCreateUser">
  
      <md-dialog-title>
        <md-icon>account</md-icon>
        <span>Add new User</span>
      </md-dialog-title>
  
      <md-dialog-content>
        <user-form ref="newUserForm"></user-form>
      </md-dialog-content>
  
      <md-dialog-actions>
  
        <md-button @click.native="$refs.newUserDialog.close()">
          Cancel
        </md-button>
  
        <md-button class="md-primary md-raised" @click.native="createNewUser()" :disabled="!formIsValid()">
          Create user
        </md-button>
  
      </md-dialog-actions>
  
    </md-dialog>
  </div>
</template>

<script>
import userForm from './user-form'
import userTable from './user-table'
import { baseUrl } from '../../main.config.js'

export default {
  name: 'userList',

  data() {
    return {
      users: []
    }
  },

  created() {
    const component = this
    this.$http.get(`${baseUrl}/users`)
      .then(response => {
        component.users = response.body
      })
  },

  components: {
    userForm,
    userTable
  },

  methods: {

    addUser() {
      this.$refs.newUserDialog.open()
    },

    cleanNewUser() {
      this.$refs.newUserForm.resetForm()
    },

    createNewUser() {
      this.users.push(this.$refs.newUserForm.getValues())
      this.$refs.newUserDialog.close()
      this.$refs.snackbar.open()
    },

    formIsValid() {
      return this.$refs.newUserForm ? this.$refs.newUserForm.isValid() : false
    }

  }

}
</script>

<style scoped>
.root-padding {
  padding: 16px;
}

.right-fab {
  position: absolute;
  right: 16px;
  top: 24px;
  z-index: 99999;
}

.md-error {
  opacity: 1;
  color: red;
  transform: translateY(0);
}
</style>
