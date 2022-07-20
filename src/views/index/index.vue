<template>
  <div>
    <!-- 第一行 -->
    <el-row :gutter="20">
      <el-col v-for="(item, index) in panelsList" :key="index" :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="one">
              <span class="title"> {{ item.title }} </span>
              <el-tag effect="plain"> {{ item.unit }} </el-tag>
            </div>
          </template>
          <span class="one-title"> {{ item.value }} </span>
          <el-divider></el-divider>
          <div class="one-footer">
            <span> {{ item.subTitle }} </span>
            <span> {{ item.subValue }} </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import UserApi from '../../api/user'
import { ref, nextTick } from 'vue'

// const echartType = ref('week')
const panelsList = ref('')
const goodsList = ref('')
const orderList = ref('')
// const echartLoading = ref('')

const getstatistics = async () => {
  try {
    const { panels } = await UserApi.statistics1()
    const { goods, order } = await UserApi.statistics2()
    // const { x, y } = await statistics3({ type: echartType.value })
    goodsList.value = goods
    orderList.value = order
    panelsList.value = panels
    nextTick(() => {
      // generateEcharts(x, y)
    })
  } catch (error) {
    console.log(error)
  }
}
getstatistics()
</script>

<style scoped lang="scss">
.one {
  display: flex;
  justify-content: space-between;
}
.one-title {
  font-size: 30px;
  font-weight: 900;
  color: #6b7280;
}
.one-footer {
  display: flex;
  justify-content: space-between;
  color: #6b7280;
}
</style>
