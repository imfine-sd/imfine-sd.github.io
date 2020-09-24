<template>
    <div
        class="ma-10">
        <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        color="red"
        vertical
        >
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn
            text
            v-bind="attrs"
            @click="snackbar = false"
            >
            Close
            </v-btn>
        </template>
        </v-snackbar>
    
    <v-text-field
        v-model="api_key"
        label="API_KEY"
        ></v-text-field>
    <v-btn outlined color="indigo" @click="getList">GET_LIST</v-btn>

    <template>
    <v-simple-table height="300px">
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">User</th>
            <th class="text-left">Chat ID</th>
            <th class="text-left">Message</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in chat_list" :key="item.index">
            <td>{{ item.message.chat.first_name }}</td>
            <td>{{ item.message.chat.id }}</td>
            <td>{{ item.message.text }}</td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
    </template>

    <v-text-field
    v-model="chat_id"
    label="Chat ID"
    ></v-text-field>
    <v-text-field
    v-model="message"
    label="Message"
    ></v-text-field>
    <v-btn outlined color="indigo" @click="sendMessage">SEND_MESSAGE</v-btn>

  </div>
</template>

<script>
import axois from "axios";

export default {

    data: () => {
        return {
            chat_list: [],
            api_key: '',
            chat_id: '',
            message: '',
            snackbar: false,
            text: 'API KEY를 확인해주세요.',
            timeout: 2000,
        }
    },
    methods: {
        getList() {
            console.log("GET_LIST")
            console.log(this.api_key, this.api_key.length)

            if (this.api_key.length === 0) {
                this.snackbar = true
                return
            }

            axois.get(`https://api.telegram.org/bot${this.api_key}/getUpdates`)
            .then(response => {
                if (response.status == 200) {
                    this.chat_list = response.data.result
                    console.log(response.data.result)
                }
            })
            .catch(err => {
                console.log(err)
                this.snackbar = true
            })
        },
        sendMessage() {
            console.log(this.chat_id, this.message)
            axois.get(`https://api.telegram.org/bot${this.api_key}/sendMessage?chat_id=${this.chat_id}&text=${this.message}`)
            .then(response => {
                if (response.status == 200) {
                    this.chat_id = ''
                    this.message = ''
                }
            })
            .catch(err => {
                console.log(err)
                this.snackbar = true
            })
        }



    }

}
</script>

<style>

</style>