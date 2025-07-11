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

      <div class="w-[calc(100vw-160px)]">
        <transition name="el-fade-in-linear">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
