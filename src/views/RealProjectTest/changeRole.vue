<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" /><br>
    <div v-permission="['editor','admin']">
      <el-tag>editor</el-tag> <el-tag>admin</el-tag>都能看到的内容
    </div><br>
    <div v-permission="['admin']">
      <el-tag>admin</el-tag>能看到的内容
    </div>
    <div v-permission="['editor']">
      <el-tag>editor</el-tag>能看到的内容
    </div><br>
    <aside>此处有缺陷，采用下列function方式判断</aside>
    <h1 v-if="checkPermission(['editor'])">
      👈 editor能看到List页面
    </h1>
    <h1 v-if="checkPermission(['admin'])">
      👈 admin能看到Form页面
    </h1>
  </div>
</template>

<script>
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
import SwitchRoles from '@/views/permission/components/SwitchRoles.vue'

export default {
  name: 'DirectivePermission',
  components: { SwitchRoles },
  directives: { permission },
  data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令
    }
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  ::v-deep .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  ::v-deep .permission-sourceCode {
    margin-left: 15px;
  }
  ::v-deep .permission-tag {
    background-color: #ecf5ff;
  }
}
</style>

