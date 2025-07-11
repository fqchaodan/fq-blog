<script lang="ts" setup>
  import { ref } from 'vue'
  import Title from '@/components/Title.vue'
  import Card, { CardProps } from '@/views/overview/components/Card.vue'
  import { overviewData } from '@/mock/index.js'

  //  总览列表
  const overviewList = ref<CardProps[]>([
    {
      path: '',
      name: '本地文件',
      total: '0M',
      bgColor: '#3E66EC',
      showPlus: false
    },
    {
      path: '',
      name: '博客文章',
      total: 0,
      bgColor: '#FAD2C5',
      showPlus: true
    },
    {
      path: '',
      name: '摄影图库',
      total: 0,
      bgColor: '#CBEAF5',
      showPlus: true
    },
    {
      path: '',
      name: '随笔笔记',
      total: 0,
      bgColor: '#CFF0CB',
      showPlus: true
    }
  ])

  const getData = () => {
    const data = overviewData.data

    overviewList.value[0].total = data.file
    overviewList.value[1].total = data.article
    overviewList.value[2].total = data.gallery
    overviewList.value[3].total = data.diary
  }

  getData()
</script>

<template>
  <div class="flex flex-col gap-2 h-[calc(100%-24px)] m-y-2 m-r-2 overflow-auto">
    <Title title="总览"></Title>

    <div class="grid grid-cols-4 gap-6">
      <Card
        v-for="item in overviewList"
        :key="item.name"
        :bg-color="item.bgColor"
        :name="item.name"
        :show-plus="item.showPlus"
        :total="item.total"
      ></Card>
    </div>
  </div>
</template>

<style scoped></style>
