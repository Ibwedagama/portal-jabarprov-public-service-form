<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="w-full h-[500px] bg-gray-200 flex items-center justify-center rounded-xl"
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
        No file chosen
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
const emit = defineEmits(['files-dropped'])

function onDrop(e) {
    emit('files-dropped', [...e.dataTransfer.files])
    console.log([...e.dataTransfer.files])
}

function onInputFile(e) {
    emit('files-dropped', [...e.target.files])
    console.log([...e.target.files])
}

function preventDefaults(e) {
    e.preventDefault()
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