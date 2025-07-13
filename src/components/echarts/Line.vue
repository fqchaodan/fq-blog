<script lang="ts" setup>
  import { onMounted } from 'vue'
  import * as echarts from 'echarts'

  const props = defineProps({
    option: {
      type: Object,
      default: () => ({})
    }
  })

  console.log(props.option, 1)

  // 图表
  const chartDom = ref<HTMLDivElement>()
  let myChart = echarts.init(chartDom.value)

  const initChart = () => {
    // myChart.setOption(props.option)
  }

  onMounted(() => {
    initChart()
  })

  onBeforeUnmount(() => {
    myChart.dispose()
  })
</script>

<template>
  <div ref="chartDom" class="h-200px"></div>
</template>

<style lang="scss" scoped></style>
