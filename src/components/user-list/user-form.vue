<template>
  <form>
    <md-input-container :class="{'md-input-invalid':$val.name.invalid}">
      <label>Name</label>
      <md-input required type="text" v-model.trim="newUser.name" @blur.native="$v.newUser.name.$touch()" />
  
      <span v-if="$val.name.required" class="md-error">This field is required</span>
      <span v-if="$val.name.minLength" class="md-error">This field min length is 3 chars</span>
      <span v-if="$val.name.alpha" class="md-error">This field just accepts letters</span>
    </md-input-container>
    <md-input-container :class="{'md-input-invalid':$val.email.invalid}">
      <label>Email</label>
      <md-input required type="email" v-model="newUser.email" @blur.native="$v.newUser.email.$touch()" />
  
      <span class="md-error" v-if="$val.email.required">This field is required</span>
      <span class="md-error" v-if="$val.email.email">Invalid email</span>
    </md-input-container>
    <md-input-container :class="{'md-input-invalid':$val.website.invalid}">
      <label>Website</label>
      <md-input required type="url" v-model="newUser.website" @blur.native="$v.newUser.website.$touch()" />
  
      <span class="md-error" v-if="$val.website.required">This field is required</span>
      <span class="md-error" v-if="$val.website.url">Invalid url</span>
    </md-input-container>
    <md-input-container :class="{'md-input-invalid':$val.company.invalid}">
      <label>Company Name</label>
      <md-input required type="text" v-model="newUser.company.name" @blur.native="$v.newUser.company.name.$touch()" />
  
      <span class="md-error" v-if="$val.company.required">This field is required</span>
      <span class="md-error" v-if="$val.company.minLength">This field min length is 3 chars</span>
    </md-input-container>
  </form>
</template>

<script>
import {
  required,
  minLength,
  email,
  url,
  alpha
} from '../../../node_modules/vuelidate/lib/validators'
import Vue from 'vue'
export default {
  name: 'user-form',

  data() {
    return {
      newUser: {
        name: '',
        email: '',
        website: '',
        company: {
          name: ''
        }
      }
    }
  },

  methods: {
    resetForm() {
      this.newUser = {
        name: '',
        email: '',
        website: '',
        company: {
          name: ''
        }
      }
      this.$v.newUser.$reset();
    },

    getValues() {
      return Vue.util.extend({}, this.newUser)
    },

    isValid() {
      return !this.$v.newUser.$invalid
    }
  },

  computed: {
    $val() {
      return {
        name: {
          required: !this.$v.newUser.name.required
          && this.$v.newUser.name.$dirty,

          minLength: this.$v.newUser.name.$dirty
          && !this.$v.newUser.name.minLength
          && this.$v.newUser.name.alpha,

          alpha: !this.$v.newUser.name.alpha
          && this.$v.newUser.name.$dirty,

          invalid: this.$v.newUser.name.$invalid
          && this.$v.newUser.name.$dirty
        },

        email: {
          required: !this.$v.newUser.email.required
          && this.$v.newUser.email.$dirty,

          email: this.$v.newUser.email.$dirty
          && !this.$v.newUser.email.email,

          invalid: this.$v.newUser.email.$invalid
          && this.$v.newUser.email.$dirty
        },

        website: {
          required: !this.$v.newUser.website.required
          && this.$v.newUser.website.$dirty,

          url: this.$v.newUser.website.$dirty
          && !this.$v.newUser.website.url,

          invalid: this.$v.newUser.website.$invalid
          && this.$v.newUser.website.$dirty
        },

        company: {
          required: !this.$v.newUser.company.name.required
          && this.$v.newUser.company.name.$dirty,

          minLength: this.$v.newUser.company.name.$dirty
          && !this.$v.newUser.company.name.minLength,

          invalid: this.$v.newUser.company.name.$invalid
          && this.$v.newUser.company.name.$dirty
        }
      }
    }
  },

  validations: {
    newUser: {
      name: {
        required,
        alpha,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      website: {
        required,
        url
      },
      company: {
        name: {
          required,
          minLength: minLength(3)
        }
      }
    }
  }

}
</script>

<style>

</style>
