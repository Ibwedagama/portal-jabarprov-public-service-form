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
      <form @submit.prevent="">
        <h1 class="mb-8 text-3xl font-bold">
          Upload Image
        </h1>
        <BaseImageUpload />
      </form>
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>