<script lang="ts" setup>
  import { CardProps } from '@/type.js'

  const props = withDefaults(defineProps<CardProps>(), {
    path: '',
    name: '标题',
    bgColor: '#6f86d6',
    total: 0,
    showPlus: true
  })
</script>

<template>
  <div
    :style="{ backgroundColor: props.bgColor }"
    class="flex items-center justify-between h-150px rounded p-x-4"
  >
    <div class="flex flex-col gap-2">
      <div :class="props.name === '本地文件' ? 'text-white' : 'text-#606266'">{{ props.name }}</div>
      <div class="text-4xl font-bold">{{ props.total }}</div>
    </div>

    <div
      v-if="props.showPlus"
      class="w-50px h-50px flex items-center justify-center bg-[rgba(0,0,0,0.1)] rounded"
    >
      <el-icon :size="30" color="white">
        <Plus />
      </el-icon>
    </div>
  </div>
</template>

<style scoped></style>
