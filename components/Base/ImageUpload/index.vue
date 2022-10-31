<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="w-full h-[400px] bg-gray-200 flex items-center justify-center rounded-xl"
    @drop.prevent="onDrop"
  >
    <div class="text-center">
      <p class="text-lg mb-4">
        <strong>Drag and Drop</strong> gambar satu persatu
      </p>
      <p class="text-lg mb-4">
        atau
      </p>
      <input
        id="upload-button"
        type="file"
        hidden
        accept="image/*"
        @input="onInputFile"
      >
      <label
        for="upload-button"
        class="btn btn-sm btn-primary mb-2"
      >
        Klik di sini untuk memilih file
      </label>
      <p
        id="file-chosen"
        class="ml-2"
      >
        {{ props.filename }}
      </p>
    </div>
  </div>

  <div
    v-show="state.isError === 'NOT_IMAGE'"
    class="toast toast-top toast-end"
  >
    <div class="alert alert-error">
      <div>
        <span>Error! File yang anda masukan bukan Gambar!</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
const emit = defineEmits(['files-dropped'])

const props = defineProps({ filename: String })

const state = reactive({ isError: '' })

function onDrop(e) {
  if (!isImage(e.dataTransfer.files[0])) {
    state.isError = 'NOT_IMAGE'

    setTimeout(() => {
      state.isError = ''
    }, 2000);
    return 
  }

  emit('files-dropped', e.dataTransfer.files[0])
}

function onInputFile(e) {
  emit('files-dropped', e.target.files[0])
}

function preventDefaults(e) {
  e.preventDefault()
}

function isImage(file) {
  return file && file['type'].split('/')[0] === 'image'
}

const events = ['dragenter', 'dragover', 'dragleave', 'drop']

onMounted(() => {
  events.forEach((eventName) => {
      document.body.addEventListener(eventName, preventDefaults)
  })
})

onUnmounted(() => {
  events.forEach((eventName) => {
      document.body.removeEventListener(eventName, preventDefaults)
  })
})
</script>