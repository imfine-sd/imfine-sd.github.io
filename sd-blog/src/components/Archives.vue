<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Project</th>
            <th class="text-left">Platform</th>
            <th class="text-left">Version</th>
            <th class="text-left">File</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in files" :key="item.name">
            <td>{{ item.project }}</td>
            <td>{{ item.platform }}</td>
            <td>{{ item.version }}</td>
            <td>
              <a v-if="item.version > 0" :href="item.file">FILE</a>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [
        {
          project: 'IMDevice',
          platform: 'Mobile',
          version: 2081,
          file: 'https://github.com/imfine-sd/SD_ARCHIVES/raw/master/IMDevice/imdevice.apk',
        },
        {
          project: 'IMDevice',
          platform: 'Server',
          version: 0,
          file: '',
        },
        {
          project: 'Facade',
          platform: 'Mobile',
          version: 0,
          file: '',
        },
        {
          project: 'Facade',
          platform: 'Setting',
          version: 0,
          file: '',
        },
        {
          project: 'Facade',
          platform: 'Server',
          version: 0,
          file: '',
        },
      ]
    }
  },
}
</script>

<style>

</style>