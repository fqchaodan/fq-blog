<script lang="ts" setup>
  import Header from '@/views/layout/header/index.vue'
  import Menu from '@/views/layout/menu/index.vue'
</script>

<template>
  <div class="w-full h-100vh">
    <!--头部-->
    <Header></Header>

    <div class="h-[calc(100vh-64px)] flex gap-1 overflow-auto">
      <!--菜单-->
      <Menu></Menu>

      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
