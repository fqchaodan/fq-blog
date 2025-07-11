<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import router from '@/router'

  const route = useRoute()

  const checkedName = ref('总览')

  const menuList = ref([
    {
      name: '总览',
      path: '/overview',
      icon: 'HomeFilled'
    },
    {
      name: '本地文件',
      path: '/localfile',
      icon: 'UploadFilled'
    },
    {
      name: '博客文章',
      path: '/article',
      icon: 'Management'
    },
    {
      name: '摄影图库',
      path: '/gallery',
      icon: 'CameraFilled'
    },
    {
      name: '随笔随记',
      path: '/diary',
      icon: 'Comment'
    },
    {
      name: '设置',
      path: '/setting',
      icon: 'Setting'
    }
  ])

  // 选择菜单
  const chooseMenu = (item: any) => {
    checkedName.value = item.name
    if (item.path) router.push({ path: item.path })
  }

  // 监听路由
  watchEffect(() => {
    if (route.path === '/') checkedName.value = '总览'
    else {
      const menu = menuList.value.find((item: any) => item.path === route.path)
      if (menu) checkedName.value = menu.name
    }
  })
</script>

<template>
  <div class="w-160px flex flex-col gap-4 p-2">
    <div
      v-for="item in menuList"
      :key="item.name"
      :class="
        checkedName === item.name
          ? 'bg-#409EFF text-white'
          : 'hover:bg-white hover:text-black  text-gray-6'
      "
      class="flex items-center gap-4 rounded-lg px-4 py-2 cursor-pointer font-500"
      @click="chooseMenu(item)"
    >
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>

      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<style scoped></style>
