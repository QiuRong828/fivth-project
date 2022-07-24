<template>
  <div>
    <el-card>
      <div class="hang1">
        <el-button type="primary" size="small">新增</el-button>
        <el-icon><Refresh /></el-icon>
      </div>
      <Table :cols="cols" :data="couponList">
        <template v-slot="{ row }">
          <el-card>
            <p>{{ row.name }}</p>
            <span>{{ row.start_time }}~{{ row.end_time }}</span>
          </el-card>
        </template>
        <template #active>
          <el-popconfirm title="是否要删除该优惠券?">
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
import GoodsApi from '../../api/goods'
const current = ref(1)

const cols = reactive([
  { label: '优惠券名称', prop: 'name' },
  { label: '状态', prop: 'status' },
  { label: '优惠', prop: 'value' },
  { label: '发放数量', prop: 'total' },
  { label: '已使用', prop: 'used' },
  { label: '操作', slot: 'active' }
])

const couponList = ref([])
const getCouponList = async () => {
  try {
    const res = await GoodsApi.getCouponList(current.value)
    couponList.value = res.list
    console.log(res, '123')
  } catch (error) {}
}
getCouponList()
</script>

<style scoped>
.hang1 {
  display: flex;
  justify-content: space-between;
}
</style>
