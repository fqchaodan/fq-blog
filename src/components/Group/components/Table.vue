<script lang="ts" setup>
  import { useGroupStore } from '@/store/group'

  const groupStore = useGroupStore()
</script>

<template>
  <el-table :data="groupStore.group" style="width: 100%">
    <el-table-column align="center" label="序号" type="index" width="60px" />
    <el-table-column align="center" label="分组名称" prop="name" />
    <el-table-column align="center" label="状态" prop="state">
      <template #default="{ row }">
        <el-tag :type="row.state === 1 ? 'primary' : 'warning'"
          >{{ row.state === 1 ? '已发布' : '未发布' }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column align="center" label="关联文章数" prop="value" />
    <el-table-column align="center" label="创建时间" prop="moment" />

    <el-table-column align="center" label="操作">
      <template #default="{ row }">
        <el-popconfirm
          cancel-button-text="否"
          confirm-button-text="是"
          title="确定要删除?"
          @confirm="groupStore.delGroup(row.id)"
        >
          <template #reference>
            <el-button circle icon="Delete" type="danger"></el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped></style>
