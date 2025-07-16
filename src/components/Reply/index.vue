<script lang="ts" setup>
  import { ReplyData } from '@/type'

  interface ReplyProps {
    data: ReplyData[]
    showAvatar: boolean
  }

  const props = withDefaults(defineProps<ReplyProps>(), {
    /*
     * data类型报错解决：改为函数返回
     * 使用函数返回默认值可以确保每次创建组件实例时都会得到一个新的数组，避免多个组件实例共享同一个数组引用。
     * 这种方式可以正确地推断类型，解决类型错误的问题。
     * */
    data: () => [
      {
        id: 0,
        article: {
          id: 0,
          name: ''
        },
        user: {
          id: 0,
          name: '',
          avatar: ''
        },
        comment: '',
        moment: '',
        complaint: 0
      }
    ],
    showAvatar: true
  })
</script>

<template>
  <div v-for="item in props.data" :key="item.id" class="flex items-start gap-2 mt-4">
    <el-avatar v-if="props.showAvatar" :size="40" :src="item.user.avatar" class="w-40px" />
    <div class="flex flex-col flex-1">
      <div class="font-bold">{{ item.user.name }}</div>
      <div class="text-14px text-gray mt-1">{{ item.moment }}</div>

      <div class="my-2 text-#606266">{{ item.comment }}</div>

      <div class="flex items-center gap-4">
        <el-tag>{{ item.article.name }}</el-tag>
        <div v-if="item.complaint" class="text-red text-xs">举报 {{ item.complaint }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
