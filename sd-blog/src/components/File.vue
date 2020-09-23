<template>
  <div>
    <div class="formDiv">
        <h2>Donwload</h2>
        <v-text-field
          v-model="fileName"
          label="File Name"
        ></v-text-field>
        <v-textarea
        counter
        v-model="fileContents"
        label="File Contents"
        ></v-textarea>
        <v-btn class="ma-2" outlined color="indigo" @click="downloadFile">DOWNLOAD</v-btn>

        <v-file-input accept="file/*" type="file" label="File input"  @change="loadTextFromFile"></v-file-input>
    </div>
  </div>
</template>

<script>

export default {
    data: () => ({
        fileName: 'test.txt',
        fileContents: ''
    }),
    methods: {
        downloadFile: function() {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.fileContents));
            element.setAttribute('download', this.fileName);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        },
        loadTextFromFile(ev) {
            const file = ev;
            const reader = new FileReader();

            reader.onload = e => {
                this.fileName = file.name
                this.fileContents = e.target.result
            }
            reader.readAsText(file);
        }
    }
}
</script>

<style scoped>

.formDiv {
    display: block;
    margin: 20px;
    width: 100%;
}

</style>