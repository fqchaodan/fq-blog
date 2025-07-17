import { defineStore } from 'pinia'
import { GroupItem } from '@/type'
import { groupData } from '@/mock'

export const useGroupStore = defineStore('group', () => {
  const group = ref<GroupItem[]>([])

  const publishGroup = computed(() => group.value.filter((item) => item.state === 1))
  const unPublishGroup = computed(() => group.value.filter((item) => item.state === 0))

  const getGroupData = () => {
    group.value = groupData.data.list
  }

  getGroupData()

  const addGroup = (item: GroupItem) => {
    group.value.push(item)
  }

  const delGroup = (id: number) => {
    group.value = group.value.filter((item) => item.id !== id)
  }

  const clearGroupData = () => {
    group.value = []
  }

  return {
    group,
    publishGroup,
    unPublishGroup,
    addGroup,
    delGroup,
    clearGroupData
  }
})
