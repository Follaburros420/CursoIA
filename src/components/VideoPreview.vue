<script setup lang="ts">
const videoId = '1dPhWNbfZ6I';
</script>

<template>
  <section class="container py-12">
    <div class="max-w-screen-md mx-auto aspect-video w-full">
      <iframe
        class="w-full h-full"
        :src="'https://www.youtube.com/embed/' + videoId"
        title="Video de YouTube"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
