<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <form class="form">
            <DropZone
              class="drop-area"
              @files-dropped="addFiles"
              #default="{ dropZoneActive }"
            >
              <label for="file-input">
                <v-icon x-large color="teal darken-2" size="400">mdi-cloud-upload-outline</v-icon>
                <span v-if="dropZoneActive">
                  <span>Drop your files here</span>
                  <span class="smaller">to add them</span>
                </span>
                <span v-else>
                  <span>Drag & Drop Your Files Here</span>
                  <span class="smaller">
                    or <strong><em>Click here</em></strong> to select files
                  </span>
                </span>
                <input
                  type="file"
                  id="file-input"
                  name="filesArray"
                  multiple
                  @change="onInputChange"
                />
              </label>
              <v-divider class="mt-4" v-show="filesArray.length"></v-divider>
              <div class="file-list" v-show="filesArray.length">
                <FilePreview
                  v-for="file in filesArray"
                  :key="file.id"
                  :file="file"
                  tag="div"
                  @remove="removeFile"
                />
              </div>
            </DropZone>
          </form>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h3>Testing out components</h3>
        <v-divider></v-divider>
        <Category v-show="false"/>
        <LoginDialog />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Testing out all the components
// import createUploader from "@/compositions/file-uploader";
import UploadableFiles from "@/utils/util";
import DropZone from "../components/DropZone.vue";
import FilePreview from "../components/FilePreview.vue";
import Category from "../components/Category.vue";
import LoginDialog from "../components/Auth/LoginDialog.vue"
// import RegisterDialog from "../components/Auth/RegisterDialog.vue"

export default {
  name: "Playground",
  components: {
    DropZone,
    FilePreview,
    Category,
    LoginDialog,
  },

  data() {
    return {
      files: [],
      filesArray: [],
      chip: true,
    };
  },

  created() {},

  methods: {
    onInputChange(e) {
      this.addFiles(e.target.files);
      // this.filesArray = e.target.files;
      e.target.value = null;
    },

    // Testing
    showFiles() {
      for (const i of Object.keys(this.filesArray)) {
        console.log(this.filesArray[i].name);
      }
    },

    onChange(e) {
      this.filesArray = e.target.files;
    },

    onUpload() {
      console.log("Files: ", this.filesArray);
    },

    addFiles(newFiles) {
      let newUploadableFiles = [...newFiles]
        .map((file) => new UploadableFiles(file))
        .filter((file) => !this.fileExists(file.id));
      this.filesArray = this.filesArray.concat(newUploadableFiles);
    },

    // check if a file exists
    fileExists(otherId) {
      return this.filesArray.some(({ id }) => id === otherId);
    },

    removeFile(file) {
      const index = this.filesArray.indexOf(file);
      if (index > -1) this.filesArray.splice(index, 1);
    },
  },
};

// Where to upload the files
// const { uploadFiles } = createUploader("@/images/");
</script>

<style lang="scss">
.file-list {
  display: flex;
  flex-wrap: wrap;
  // background-color: rgb(68, 183, 68);
}

.drop-area {
  border: 3px dotted teal;
}

</style>
