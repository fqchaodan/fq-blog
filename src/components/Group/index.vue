<script lang="ts" setup>
  import { useDark, useDateFormat, useNow } from '@vueuse/core'
  import { useGroupStore } from '@/store/group'
  import { GroupItem } from '@/type'
  import { storeToRefs } from 'pinia'
  import Table from '@/components/Group/components/Table.vue'

  const groupStore = useGroupStore()
  const { group, publishGroup, unPublishGroup } = storeToRefs(groupStore)

  const isDark = useDark()

  // 选中
  const selected = ref('全部')

  const onSelect = (val: string) => {
    selected.value = val
  }

  // 获取总和
  const getTotal = (arr: GroupItem[]) => {
    return arr.reduce((pre, cur) => pre + cur.value, 0)
  }

  // 新增
  const addPopover = ref()
  const inputAdd = ref('')
  const onConfirmAdd = () => {
    if (!inputAdd.value) {
      ElMessage.warning('请输入分组名称')
      return
    }

    groupStore.addGroup({
      id: group.value.length + 1,
      name: inputAdd.value,
      value: 1,
      state: 0,
      moment: useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss').value
    })

    addPopover.value.hide()
    inputAdd.value = ''
  }

  // 管理分组
  const dialogShow = ref(false)
</script>

<template>
  <div
    :class="isDark ? 'bg-dark' : 'bg-white'"
    class="flex items-center justify-between gap-2 rounded p-2 select-none cursor-pointer"
  >
    <!--标签-->
    <div class="flex gap-2 flex-wrap">
      <!--全部-->
      <div
        :class="[
          isDark
            ? selected === '全部'
              ? 'bg-#C6E2FF text-#337ECC'
              : 'bg-gray-9'
            : selected === '全部'
              ? 'bg-#C6E2FF text-#337ECC'
              : 'bg-gray-2'
        ]"
        class="w-150px flex items-center justify-center rounded-2xl p-1"
        @click="onSelect('全部')"
      >
        全部 {{ getTotal(group) }}
      </div>

      <!--已发布-->
      <div
        :class="[
          isDark
            ? selected === '已发布'
              ? 'bg-#C6E2FF text-#337ECC'
              : 'bg-gray-9'
            : selected === '已发布'
              ? 'bg-#C6E2FF text-#337ECC'
              : 'bg-gray-2'
        ]"
        class="w-150px flex items-center justify-center rounded-2xl p-1"
        @click="onSelect('已发布')"
      >
        已发布 {{ getTotal(publishGroup) }}
      </div>

      <!--未发布-->
      <div
        :class="[
          isDark
            ? selected === '未发布'
              ? 'bg-#C6E2FF text-#337ECC'
              : 'bg-gray-9'
            : selected === '未发布'
              ? 'bg-#C6E2FF text-#337ECC'
              : 'bg-gray-2'
        ]"
        class="w-150px flex items-center justify-center rounded-2xl p-1"
        @click="onSelect('未发布')"
      >
        未发布 {{ getTotal(unPublishGroup) }}
      </div>

      <!--其余-->
      <div
        v-for="item in group"
        :key="item.id"
        :class="[
          isDark
            ? selected === item.name
              ? 'bg-#C6E2FF text-#337ECC'
              : 'bg-gray-9'
            : selected === item.name
              ? 'bg-#C6E2FF text-#337ECC'
              : 'bg-gray-2'
        ]"
        class="w-150px flex items-center justify-center rounded-2xl p-1"
        @click="onSelect(item.name)"
      >
        {{ item.name }} {{ item.value }}
      </div>
    </div>

    <!--操作-->
    <div class="flex flex-nowrap">
      <el-popover ref="addPopover" :width="400" placement="bottom" trigger="click">
        <template #reference>
          <el-button icon="CirclePlusFilled" text type="primary">新建</el-button>
        </template>
        <div class="font-bold mb-2">请输入分组名称</div>
        <el-input v-model="inputAdd" clearable placeholder="请输入···" />
        <div class="flex gap-2 justify-end mt-2">
          <el-button round @click="addPopover.hide()">取消</el-button>
          <el-button round type="primary" @click="onConfirmAdd">确定</el-button>
        </div>
      </el-popover>
      <el-button icon="Tools" text type="primary" @click="dialogShow = true">管理分组</el-button>

      <el-dialog v-model="dialogShow" destroy-on-close title="管理分组">
        <Table></Table>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped></style>
