<script lang="ts" setup>
  import Header from '@/views/layout/header/index.vue'
</script>

<template>
  <div class="w-full h-100vh">
    <!--头部-->
    <Header></Header>

    <div class="h-[calc(100vh-64px)] overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
