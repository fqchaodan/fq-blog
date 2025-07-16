<script lang="ts" setup>
  import { TitleProps } from '@/type.js'

  const props = withDefaults(defineProps<TitleProps>(), {
    title: '标题',
    showSearch: true
  })

  const emits = defineEmits(['search'])

  const searchVal = ref('')
</script>

<template>
  <div class="h-40px flex items-center justify-between">
    <!--标题-->
    <div class="text-2xl font-bold">{{ props.title }}</div>

    <!--搜索-->
    <el-input
      v-if="props.showSearch"
      v-model="searchVal"
      class="!w-240px"
      clearable
      placeholder="搜索"
      @clear="emits('search', '')"
      @keyup.enter="emits('search', searchVal)"
    >
      <template #append>
        <el-button icon="Search" @click="emits('search', searchVal)" />
      </template>
    </el-input>
  </div>
</template>

<style scoped></style>
