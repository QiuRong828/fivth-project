<template>
  <div class="header-container">
    <div class="left">
      <div>
        <el-icon><ElemeFilled /></el-icon> 积云编程
      </div>
      <div class="l2">
        <el-icon><Expand /></el-icon> <el-icon><Refresh /></el-icon>
      </div>
    </div>
    <div class="right">
      <el-icon><FullScreen /></el-icon>

      <div>
        <el-avatar :size="30" :src="store.getters.userinfo.avatar" />
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ store.getters.userinfo.username }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>
<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 20px;
  .left {
    display: flex;
    margin-left: 50px;
    width: 90%;
    .l2 {
      padding-left: 80px;
    }
  }
  .right {
    width: 10%;
    display: flex;
    justify-content: space-between;
  }
}
.el-dropdown {
  color: white;
}
</style>
