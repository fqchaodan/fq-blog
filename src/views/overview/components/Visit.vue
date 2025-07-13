<script lang="ts" setup>
  import { ref } from 'vue'
  import Line from '@/components/echarts/Line.vue'

  // 分段器
  const value = ref('近一周')

  const options = ['近一周', '近一月']

  // 图表
  const chartDom = document.getElementById('main')
  let myChart = echarts.init(chartDom)
  let option

  const chartOption = ref({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  })
</script>

<template>
  <div class="h-300px bg-white rounded p-2">
    <div class="flex items-center justify-between">
      <div class="text-xl font-bold">访问量</div>
      <div class="custom-style">
        <el-segmented v-model="value" :options="options" />
      </div>
    </div>

    <Line :option="chartOption" />
  </div>
</template>

<style lang="scss" scoped>
  .custom-style .el-segmented {
    --el-segmented-item-selected-color: var(--el-text-color-primary);
    --el-segmented-item-selected-bg-color: #ffd100;
    --el-border-radius-base: 16px;
  }
</style>
