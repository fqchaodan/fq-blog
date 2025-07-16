<script lang="ts" setup>
  import { useDark } from '@vueuse/core'
  import { commentData } from '@/mock'
  import { ReplyData } from '@/type'

  const isDark = useDark()

  // 评论数量
  const commentTotal = ref(0)
  const data = ref<ReplyData[]>([])

  // 分页
  const currentPage = ref(1)

  const handlePageChange = (page: number) => {
    currentPage.value = page
    data.value = commentData.data.list.slice((page - 1) * 10, page * 10)
  }

  onMounted(() => {
    setTimeout(() => {
      commentTotal.value = commentData.data.count

      // 每次获取数据根据currentPage截取十条评论
      data.value = commentData.data.list.slice((currentPage.value - 1) * 10, currentPage.value * 10)
    }, 500)
  })
</script>

<template>
  <div :class="isDark ? 'bg-dark' : 'bg-white'" class="h-664px overflow-auto rounded p-2">
    <div class="text-xl font-bold">
      <span>评论 </span>
      <span v-if="commentTotal">{{ commentTotal }}</span>
    </div>

    <Reply :data="data"></Reply>

    <el-pagination
      :current-page="currentPage"
      :total="commentTotal"
      background
      class="flex justify-center mt-4"
      hide-on-single-page
      layout="prev, pager, next"
      @current-change="handlePageChange"
    />
  </div>
</template>

<style scoped></style>
