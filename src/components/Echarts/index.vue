<script lang="ts" setup>
  import { onMounted } from 'vue'
  import * as echarts from 'echarts'

  const props = defineProps({
    option: {
      type: Object,
      default: () => ({})
    }
  })
  // 图表
  const chartRef = ref<HTMLHtmlElement>(null)
  let myChart = null

  const initChart = () => {
    myChart = echarts.init(chartRef.value)
    myChart.setOption(props.option)
  }

  watch(
    () => props.option,
    () => {
      myChart ? myChart.setOption(props.option) : initChart()
    },
    {
      deep: true
    }
  )

  onMounted(() => {
    initChart()

    // 监听窗口变化
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  })

  onBeforeUnmount(() => {
    // 取消监听
    window.removeEventListener('resize', () => {
      myChart.resize()
    })

    myChart.dispose()
  })
</script>

<template>
  <div ref="chartRef" class="w-full h-280px"></div>
</template>

<style lang="scss" scoped></style>
