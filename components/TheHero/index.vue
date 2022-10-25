<template>
  <div
    class="hero min-h-screen"
    style="background-image: url(https://images.unsplash.com/photo-1666126452579-f032d653c7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80);"
  >
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-lg">
        <h1 class="text-5xl font-bold uppercase">
          Portal Jabarprov
        </h1>
        <h2 class="text-2xl font-bold mt-4 mb-2 uppercase">
          Public Service Input Form
        </h2>
        <p class="py-6">
          Cahaya cinta terkadang menyilaukan, itulah mimpi kehidupan kedua. <br> Mimpi itu, darimana datangnya?
        </p>
        <NuxtLink
          to="/input"
          class="btn btn-primary"
        >
          Masuk
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHero',
}
</script>