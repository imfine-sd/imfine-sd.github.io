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
        <v-btn outlined color="primary" class="ml-4" @click="register">
            REGISTER
        </v-btn>
        <v-btn outlined color="primary" class="ml-4" @click="unregister">
            UNREGISTER
        </v-btn>

        <v-data-table
            v-model="selected_list"
            :headers="headers"
            :items="device_list"
            item-key="name"
            show-select
            class="mt-12 mb-5 elevation-1"
        >
        </v-data-table>
        <v-row class="ml-2 mb-4">
            <v-btn outlined color="primary" @click="lock">
                LOCK
            </v-btn>
            <v-btn class="ml-4" outlined color="primary" @click="reboot">
                REBOOT
            </v-btn>
        </v-row>

        <v-textarea
          ref="policy_area"
          class="mt-15"
          outlined
          :error="!canJsonParse"
          name="input-7-4"
          label="Device Policy"
          @keyup="checkPolicy"
          v-model="policy_json"
        ></v-textarea>
        <v-btn class="ml-2" outlined color="primary" @click="customAction">
            CHANGE POLICY TO ALL
        </v-btn>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as api from '../apis/index.js'

export default {
    data() {
        return {
            canJsonParse: true,
            client_id: '',
            device_list: [],
            selected_list: [],
            headers: [
                {
                    text: 'Model',
                    align: 'start',
                    value: 'hardwareInfo.model',
                },
                { text: 'State', value: 'state' },
                { text: 'API Level', value: 'apiLevel' },
                { text: 'Update Info', value: 'softwareInfo.systemUpdateInfo.updateStatus' },
                { text: 'Hardware', value: 'hardwareInfo.hardware' },
                { text: 'Serial', value: 'hardwareInfo.hardware' },
                { text: 'Enrollment Time', value: 'hardwareInfo.serialNumber' },
                { text: 'Name', value: 'name' },
                { text: 'Policy', value: 'policyName' },
                { text: 'Ownership', value: 'ownership' },
            ],
            policy_json:
`{
    "applications": [
        {
            "packageName": "com.google.samples.apps.iosched",
            "installType": "FORCE_INSTALLED"
        }
    ],
    "cameraDisabled": true,
    "debuggingFeaturesAllowed": true
}`
        }
    },
    filters: {
        pretty: function(value) {
            return JSON.stringify(JSON.parse(value), null, 2);
        }
    },
    computed: {
        ...mapGetters(['getToken'])
    },
    mounted() {
        if (this.getToken != undefined && this.getToken.length != 0) this.getList()
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
            .catch(() => {
                this.$store.commit('SET_TOKEN', '')
                this.$router.push('/android')
            })
        },
        register: function() {
            api.enroll(this.getToken)
            .then(result => {
                window.open(`http://imfine-sd.github.io/#/qr/${result.data.value}`)
            })
        },
        unregister: function() {
            this.selected_list.map(item => {
                api.unreigster(this.getToken, item.name)
            })
        },
        lock: function() {
            this.selected_list.map(item => {
                api.lock(this.getToken, item.name)
            })
        },
        reboot: function() {
            this.selected_list.map(item => {
                api.reboot(this.getToken, item.name)
            })
        },
        customAction: function() {
            if (!this.canJsonParse) return
            api.runPolicy(this.getToken, this.policy_json)
        },
        checkPolicy: function() {
            // const value = this.policy_json
            // console.log(typeof(this.policy_json), value)
            // console.log(this.policy_json.toString().replace(/(^\s*)|(\s*$)/gi, ""))
            // JSON.stringify(JSON.parse(value), undefined, "\t")
            try {
                // console.log('OK')
                JSON.parse(this.policy_json)
                this.canJsonParse = true
            }
            catch (_) {
                // console.log('ERROR')
                this.canJsonParse = false
            }
        }
    }
}
</script>

<style>

</style>