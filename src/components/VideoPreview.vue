<script setup lang="ts">
const videoId = '1dPhWNbfZ6I';
</script>

<template>
  <section class="container py-12">
    <div class="video-wrapper max-w-screen-lg mx-auto">
      <iframe
        width="100%"
        height="480"
        :src="'https://www.youtube.com/embed/' + videoId"
        title="Video de YouTube"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
