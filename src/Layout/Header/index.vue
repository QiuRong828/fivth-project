<template>
  <div class="header-container">
    <div class="left">
      <div>
        <el-icon><ElemeFilled /></el-icon> 积云编程
      </div>
      <div class="l2">
        <el-icon><Expand /></el-icon>
        <el-icon @click="router.go(0)"><Refresh /></el-icon>
      </div>
    </div>
    <div class="right">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <el-icon @click="fullscreen"><FullScreen /></el-icon>
      </el-tooltip>

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
              <el-dropdown-item @click="xg">修改密码</el-dropdown-item>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import screenfull from 'screenfull'
const store = useStore()
const router = useRouter()

// 全屏
function fullscreen() {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
  return fullscreen
}

// 修改密码
const xg = () => {
  alert('修改密码')
  return xg
}

// 退出登录
const logout = async () => {
  await store.dispatch('user/logout')
  router.push('/login')
}
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
    width: 80%;
    .l2 {
      padding-left: 80px;
    }
  }
  .right {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.el-dropdown {
  color: white;
  margin-top: 6px;
}
</style>
