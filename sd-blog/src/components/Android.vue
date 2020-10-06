<template>
  <div class="ma-5">
      <div v-if="!this.getToken">
        <v-btn outlined color="primary" @click="googleLogin">
            GENERATE TOKEN
        </v-btn>
      </div>
      <div v-else>
        <v-btn outlined color="primary" @click="getList">
            GET LIST
        </v-btn>
        <v-data-table
            v-model="selected_list"
            :headers="headers"
            :items="device_list"
            item-key="name"
            show-select
            class="mt-5 elevation-1"
        >
        </v-data-table>
        <v-btn outlined color="primary" @click="lock">
            LOCK
        </v-btn>
        <v-btn outlined color="primary" @click="reboot">
            REBOOT
        </v-btn>
      </div>

      <!-- <v-text-field
        v-model="client_id"
        label="CLIENT_KEY"
        required
        ></v-text-field> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as api from '../apis/index.js'

export default {
    data() {
        return {
            client_id: '',
            device_list: [],
            selected_list: [],
            headers: [
                {
                    text: 'Model',
                    align: 'start',
                    value: 'hardwareInfo.model',
                },
                { text: 'API Level', value: 'apiLevel' },
                { text: 'Update Info', value: 'softwareInfo.systemUpdateInfo.updateStatus' },
                { text: 'Hardware', value: 'hardwareInfo.hardware' },
                { text: 'Serial', value: 'hardwareInfo.hardware' },
                { text: 'Enrollment Time', value: 'hardwareInfo.serialNumber' },
                { text: 'State', value: 'state' },
                { text: 'Ownership', value: 'ownership' },
            ],
        }
    },
    computed: {
        ...mapGetters(['getToken'])
    },
    methods: {
        googleLogin: function() {
            api.oauthSignIn()
        },
        getList: function() {
            api.getList(this.getToken)
            .then(result => {
                this.device_list = result.data.devices
            })
            // .catch(error => {
            //     console.log(error)
            // })
        },
        lock: function() {
            this.selected_list.map(item => {
                api.lock(this.getToken, item.name)
                // .then(result => {
                //     console.log(result)
                // })
                // .catch(error => {
                //     console.log(error)
                // })
            })
        },
        reboot: function() {
            // axios.headers.common['Authorization'] = `Bearer ${this.$store.state.token}`
            // axios.get('https://androidmanagement.googleapis.com/v1/enterprises/LC03qonbzr/devices')
            // .then(result => {
            //     this.device_list = result.data.devices
            //     console.log(result)
            // })
            // .catch(error => {
            //     console.log(error)
            // })
        }
    }
}
</script>

<style>

</style>