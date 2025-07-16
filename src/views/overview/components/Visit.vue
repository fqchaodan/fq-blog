<script lang="ts" setup>
  import { ref } from 'vue'
  import Chart from '@/components/echarts/Chart.vue'

  // 分段器
  const visitType = ref('近一周')

  const options = ['近一周', '近一年']

  const typeChange = (val: string) => {
    chartOption.value = val === '近一周' ? chartOptionWeek.value : chartOptionYear.value
  }

  // 图表
  const chartOptionWeek = ref({
    grid: {
      // 减少留白
      top: '10%',
      bottom: '3%',
      left: '3%',
      right: '3%',
      containLabel: true // 确保坐标轴标签不被截断
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [13, 32, 12, 33, 21, 9, 3],
        type: 'line',
        smooth: true
      }
    ]
  })

  // 近一年数据
  const chartOptionYear = ref({
    grid: {
      // 减少留白
      top: '10%',
      bottom: '3%',
      left: '3%',
      right: '3%',
      containLabel: true // 确保坐标轴标签不被截断
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [13, 32, 12, 33, 21, 9, 3, 13, 32, 12, 33, 21],
        type: 'line',
        smooth: true
      }
    ]
  })

  const chartOption = ref(chartOptionWeek.value)
</script>

<template>
  <div class="bg-white rounded p-2">
    <div class="flex items-center justify-between">
      <div class="text-xl font-bold">访问量</div>
      <div class="custom-style">
        <el-segmented v-model="visitType" :options="options" @change="typeChange" />
      </div>
    </div>

    <Chart :option="chartOption" class="w-full" />
  </div>
</template>

<style lang="scss" scoped>
  .custom-style .el-segmented {
    --el-segmented-item-selected-color: var(--el-text-color-primary);
    --el-segmented-item-selected-bg-color: #ffd100;
    --el-border-radius-base: 16px;
  }
</style>
