<script lang="ts" setup>
  import Title from '@/components/Title.vue'
  import Group from '@/components/Group/index.vue'
</script>

<template>
  <div
    class="flex flex-col gap-2 h-[calc(100%-24px)] m-y-2 m-r-2 overflow-auto hover:cursor-pointer"
  >
    <Title :showSearch="false" title="本地文件">
      <template #default>
        <div class="flex items-center gap-2">
          <div class="text-sm text-gray">图片、视频、音频大小不超过20M</div>
          <el-button icon="Upload" round type="primary">上传</el-button>
        </div>
      </template>
    </Title>

    <!--分组-->
    <Group></Group>
  </div>
</template>

<style scoped></style>
