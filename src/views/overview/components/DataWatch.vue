<script lang="ts" setup>
  import { ref } from 'vue'
  import { useDark } from '@vueuse/core'
  import Chart from '@/components/echarts/Chart.vue'

  const isDark = useDark()

  // 分段器
  const dataType = ref('近一周')

  const options = ['近一周', '近一年']

  const typeChange = (val: string) => {
    chartOption1.value = val === '近一周' ? chartOptionWeek1.value : chartOptionYear1.value
    chartOption2.value = val === '近一周' ? chartOptionWeek2.value : chartOptionYear2.value
  }

  // 图表
  const chartOptionWeek1 = ref({
    grid: {
      // 减少留白
      top: '10%',
      bottom: '3%',
      left: '3%',
      right: '3%',
      containLabel: true // 确保坐标轴标签不被截断
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        color: isDark.value ? '#fff' : '#000'
      }
    },
    series: [
      {
        name: '设备',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: () => {
            return '设备数量' + '\n' + '\n' + '37台'
          },
          fontSize: 16,
          position: 'center',
          color: isDark.value ? '#fff' : '#000'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 10, name: '移动端' },
          { value: 27, name: '电脑端' }
        ]
      }
    ]
  })

  const chartOptionWeek2 = ref({
    grid: {
      // 减少留白
      top: '10%',
      bottom: '3%',
      left: '3%',
      right: '3%',
      containLabel: true // 确保坐标轴标签不被截断
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false
    },
    series: [
      {
        name: '访问',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: () => {
            return '访问总数' + '\n' + '\n' + '37台'
          },
          fontSize: 16,
          position: 'center',
          color: isDark.value ? '#fff' : '#000'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 4, name: '周一' },
          { value: 6, name: '周二' },
          { value: 3, name: '周三' },
          { value: 7, name: '周四' },
          { value: 5, name: '周五' },
          { value: 5, name: '周六' },
          { value: 7, name: '周日' }
        ]
      }
    ]
  })

  // 近一年数据
  const chartOptionYear1 = ref({
    grid: {
      // 减少留白
      top: '10%',
      bottom: '3%',
      left: '3%',
      right: '3%',
      containLabel: true // 确保坐标轴标签不被截断
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        color: isDark.value ? '#fff' : '#000'
      }
    },
    series: [
      {
        name: '设备',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: () => {
            return '设备数量' + '\n' + '\n' + '370台'
          },
          fontSize: 16,
          position: 'center',
          color: isDark.value ? '#fff' : '#000'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 150, name: '移动端' },
          { value: 220, name: '电脑端' }
        ]
      }
    ]
  })

  const chartOptionYear2 = ref({
    grid: {
      // 减少留白
      top: '10%',
      bottom: '3%',
      left: '3%',
      right: '3%',
      containLabel: true // 确保坐标轴标签不被截断
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false
    },
    series: [
      {
        name: '设备',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: () => {
            return '设备数量' + '\n' + '\n' + '87台'
          },
          fontSize: 16,
          position: 'center',
          color: isDark.value ? '#fff' : '#000'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 4, name: '1月' },
          { value: 6, name: '2月' },
          { value: 3, name: '3月' },
          { value: 7, name: '4月' },
          { value: 5, name: '5月' },
          { value: 5, name: '6月' },
          { value: 7, name: '7月' },
          { value: 8, name: '8月' },
          { value: 9, name: '9月' },
          { value: 10, name: '10月' },
          { value: 11, name: '11月' },
          { value: 12, name: '12月' }
        ]
      }
    ]
  })

  const chartOption1 = ref<any>(chartOptionWeek1.value)
  const chartOption2 = ref<any>(chartOptionWeek2.value)

  watch(
    () => isDark,
    () => {
      // 适配黑暗模式
      chartOptionWeek1.value.legend.textStyle.color = isDark.value ? '#fff' : '#000'
      chartOptionWeek1.value.series[0].label.color = isDark.value ? '#fff' : '#000'
      chartOptionWeek2.value.series[0].label.color = isDark.value ? '#fff' : '#000'
      chartOptionYear1.value.legend.textStyle.color = isDark.value ? '#fff' : '#000'
      chartOptionYear1.value.series[0].label.color = isDark.value ? '#fff' : '#000'
      chartOptionYear2.value.series[0].label.color = isDark.value ? '#fff' : '#000'

      chartOption1.value =
        dataType.value === '近一周' ? chartOptionWeek1.value : chartOptionYear1.value
      chartOption2.value =
        dataType.value === '近一周' ? chartOptionWeek2.value : chartOptionYear2.value
    },
    { deep: true }
  )
</script>

<template>
  <div :class="isDark ? 'bg-dark' : 'bg-white'" class="rounded p-2">
    <div class="flex items-center justify-between">
      <div class="text-xl font-bold">数据监测</div>
      <div class="custom-style">
        <el-segmented v-model="dataType" :options="options" @change="typeChange" />
      </div>
    </div>

    <div class="flex items-center">
      <Chart :option="chartOption1" />
      <Chart :option="chartOption2" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .custom-style .el-segmented {
    --el-segmented-item-selected-color: var(--el-text-color-primary);
    --el-segmented-item-selected-bg-color: #ffd100;
    --el-border-radius-base: 16px;
  }
</style>
