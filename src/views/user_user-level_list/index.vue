<template>
  <div>
    <el-card>
      <div class="hang1">
        <el-button type="primary" size="small">新增</el-button>
        <el-icon><Refresh /></el-icon>
      </div>
      <Table :cols="cols" :data="LevelList">
        <template #active>
          <el-popconfirm title="是否要删除该公告?">
            <template #reference>
              <el-button link type="primary" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </Table>
    </el-card>
  </div>
</template>

<script setup>
import Table from '../../components/Table.vue'
import { reactive, ref } from 'vue'
import UsersApi from '../../api/users'
const current = ref(1)

const cols = reactive([
  { label: '角色名称', prop: 'name' },
  { label: '角色描述', prop: 'level' },
  { label: '状态', prop: 'status' },
  { label: '操作', slot: 'active' }
])

const LevelList = ref([])

const getLevelList = async () => {
  try {
    const res = await UsersApi.getLevelList(current.value)
    LevelList.value = res.list
    console.log(res, '123')
  } catch (error) {}
}
getLevelList()
</script>

<style scoped>
.hang1 {
  display: flex;
  justify-content: space-between;
}
</style>
