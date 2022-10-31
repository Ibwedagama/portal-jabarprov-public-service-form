<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="bg-gray-100 pb-[150px]">
    <div class="navbar bg-primary text-neutral-content">
      <a
        href="/"
        class="btn btn-ghost normal-case text-xl"
      >
        Input Form
      </a>
      <a
        href="/upload"
        class="btn btn-ghost normal-case text-xl"
        target="_blank"
      >
        Upload Image
      </a>
    </div>
    <div class="w-full max-w-screen-xl container mx-auto p-8 bg-white mt-[80px] rounded-xl shadow-sm">
      <form
        enctype="multipart/form-data"
        @submit.prevent="handleUpload"
      >
        <h1 class="mb-8 text-3xl font-bold">
          Upload Image
        </h1>
        <section class="w-full min-w-0 grid-cols-1 grid md:grid-cols-2 gap-8">
          <BaseImageUpload
            :filename="filename"
            @files-dropped="handleImageDrop"
          />

          <div class="grid gap-8">
            <div class="rounded-xl overflow-hidden">
              <img
                :src="imagePreviewURL || '/img/image-preview.png'"
                :class="{
                  'w-full h-[400px] bg-gray-200': true,
                  'object-cover': !imagePreviewURL,
                  'object-contain': imagePreviewURL,
                }"
              >
            </div>
            <div class="w-full flex gap-4 justify-center mt-4">
              <button
                class="btn btn-outline btn-primary"
                type="button"
                @click="resetUpload"
              >
                Reset
              </button>
              <button
                class="btn btn-primary"
                :disabled="isFileEmpty"
                type="submit"
              >
                {{ uploadStatus === 'LOADING' ? 'Loading...' : 'Upload' }}
              </button>
            </div>
          </div>
        </section>
      </form>

      <section class="w-full min-w-0 p-8 mt-8 flex justify-center items-center">
        <p class="p-3 min-h-12  border border-gray-200 rounded-lg text-gray-700 mr-2 min-w-full">
          {{ fileUploadLink }}
        </p>
        <button
          class="btn btn-primary"
          @click="copyLinkToClipboard"
        >
          Copy
        </button>
      </section>
    </div>

    <!-- Success Toast -->
    <div
      v-show="uploadStatus === 'SUCCESS'"
      class="toast toast-top toast-end"
    >
      <div class="alert alert-success">
        <div>
          <span>Berhasil Upload Gambar!</span>
        </div>
      </div>
    </div>

    <!-- Error Toast -->
    <div
      v-show="uploadStatus === 'ERROR'"
      class="toast toast-top toast-end"
    >
      <div class="alert alert-error">
        <div>
          <span>Gagal Upload Gambar</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      fileUploadLink: '',
      uploadStatus: ''
    }
  },
  computed: {
    filename() {
      console.log(this.file)
      return this.file?.name ?? 'No file choosen'
    },
    isFileEmpty() {
      return this.file === null
    },
    imagePreviewURL() {
      if (this.file) {
        return URL.createObjectURL(this.file)
      }
      
      return null
    }
  },
  methods: {
    handleImageDrop(file) {
      this.file = file
    },
    handleUpload() {
      this.uploadStatus = "LOADING"

      const formData = new FormData();
      formData.append('file', this.file, this.file.name); 

      const fetchRequest = fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/media/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
        },
        body: formData
      })

      fetchRequest.then((response) => {
        return response.json()
      }).then((res) => {
        this.fileUploadLink = res.file_download_uri
        setTimeout(() => {
          this.uploadStatus = "SUCCESS"
        }, 1000);
      }).catch((err) => {
        this.uploadStatus = "ERROR"
        console.log(err)
      }).finally(() => {
        setTimeout(() => {
          this.uploadStatus = ""
        }, 3000);
      })
    },
    resetUpload () {
      this.file = null,
      this.fileUploadLink = '',
      this.uploadStatus = ''
    },
    copyLinkToClipboard() {
      navigator.clipboard.writeText(this.fileUploadLink)
    }
  },
}

</script>

<style lang="scss" scoped>

</style>