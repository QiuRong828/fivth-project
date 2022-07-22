<template>
  <div>
    <Drawer></Drawer>
    <el-tabs v-model="activeName.tab" @tab-click="handleClick">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.id"
        :label="item.label"
        :name="item.name"
      >
        <el-card>
          <!-- 第一行 表单 -->
          <el-form :inline="true">
            <el-form-item label="关键词">
              <el-input placeholder="商品名称" v-model="input" />
            </el-form-item>

            <el-form-item label="商品分类">
              <el-select placeholder="请选择商品分类" v-model="query">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>

            <el-form-item style="margin-left: 360px">
              <el-button type="primary" size="small">搜索</el-button>
              <el-button size="small">重置</el-button>
              <el-button
                >收起 <el-icon class="el-icon--right"><Upload /></el-icon>
              </el-button>
            </el-form-item>
          </el-form>

          <!-- 第二行盒子 -->
          <div class="line2">
            <div>
              <el-button type="primary" size="small">新增</el-button>
              <el-button type="danger" size="small">批量删除</el-button>
              <el-button size="small">上架</el-button>
              <el-button size="small">下架</el-button>
            </div>
            <el-icon><Refresh /></el-icon>
          </div>

          <!-- 表格 -->
          <Table></Table>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import Drawer from '../../components/Drawer.vue'
import Table from '../../components/Table.vue'

const activeName = reactive({
  tab: 'all',
  title: '',
  cat_id: ''
})
const tabList = reactive([
  { label: '全部', name: 'all' },
  { label: '审核中', name: 'checking' },
  { label: '出售中', name: 'saling' },
  { label: '已下架', name: 'off' },
  { label: '库存预警', name: 'min_stock' },
  { label: '回收站', name: 'delete' }
])
const input = reactive('')
const query = reactive('')

const handleClick = () => {
  return handleClick
}
</script>

<style scoped lang="scss">
.line2 {
  display: flex;
  justify-content: space-between;
}
</style>
