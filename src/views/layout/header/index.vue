<script lang="ts" setup>
  import { getOssUrl } from '@/utils/index.js'
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
  <div
    :class="isDark ? 'bg-dark' : 'bg-white'"
    class="h-64px w-full flex items-center justify-between p-x-4"
  >
    <!--左侧-->
    <div class="flex items-center gap-1">
      <img :height="40" alt="" src="@/assets/imgs/tomato.png" />
      <div class="text-xl font-600">番茄博客</div>
    </div>

    <!--右侧-->
    <div class="flex items-center gap-4">
      <el-icon color="gray" size="24">
        <ChatRound />
      </el-icon>

      <el-avatar :size="30" :src="getOssUrl('avatar.png')" />

      <el-icon
        :color="isDark ? 'rgb(51.2, 126.4, 204)' : '#E6A23C'"
        size="24"
        @click="toggleDark()"
      >
        <Moon v-if="isDark" />
        <Sunny v-else />
      </el-icon>

      <el-button round type="primary">退出</el-button>
    </div>
  </div>
</template>

<style scoped></style>
