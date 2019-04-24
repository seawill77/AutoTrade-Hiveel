<template>
  <el-row style="height: 100%;">
    <el-col class="c-white" style="height: 100%; background: #184AA1;">
      <div v-if="!isCollapse" class="df df-aic" style="width: 100%; height: 60px; font-size: 24px; font-family: Impact;"><span style="padding-left: 20px;">AutosSav</span></div>
      <div v-else class="df df-aic" style="width: 100%; height: 60px; font-size: 24px; font-family: Impact;"><span style="padding-left: 20px;">A</span></div>
      <el-menu text-color="#fff" background-color="#184AA1" active-text-color="#ffd04b" :collapse="isCollapse" style="border: 0;">
        <el-menu-item v-if="group.dashboard !== 'NONE'" index="1" @click="go('home')"><i class="el-icon-menu"></i><span>Dashboard</span></el-menu-item>
        <el-menu-item v-if="group.inspection !== 'NONE'" index="2" @click="go('inspectionList')"><i class="el-icon-menu"></i><span>Inspection</span></el-menu-item>
        <el-menu-item v-if="group.issues !== 'NONE'" index="3" @click="go('issueList')"><i class="el-icon-document"></i> <span>Issues</span> </el-menu-item>
        <el-menu-item v-if="group.exam !== 'NONE'" index="4" @click="go('examList')"><i class="el-icon-setting"></i><span>Service Management</span></el-menu-item>
        <el-menu-item v-if="group.vehicle !== 'NONE'" index="5" @click="go('vehicleList')"><i class="el-icon-setting"></i><span>Vehicle Management</span></el-menu-item>
        <el-menu-item v-if="group.person !== 'NONE'" index="6" @click="go('personList')"><i class="el-icon-setting"></i><span>User Management</span></el-menu-item>
        <el-menu-item v-if="group.invoice !== 'NONE'" index="7" @click="go('invoiceList')"><i class="el-icon-setting"></i><span>Financial Center</span></el-menu-item>
        <el-menu-item v-if="group.setting !== 'NONE'" index="8" @click="go('setting')"><i class="el-icon-setting"></i><span>Setting</span></el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: document.documentElement.clientWidth < 961,
    }
  },
  computed: {
    group() { return this.$store.state.me.user.group },
  },
  mounted() {
    window.onresize = function() {
      if (document.documentElement.clientWidth < 961 && document.documentElement.clientWidth > 768) {
        this.isCollapse = true
        this.$emit('widthChange', '64px')
      } else if (document.documentElement.clientWidth <= 768) {
        this.isCollapse = true
        this.$emit('widthChange', '0px')
      } else {
        this.isCollapse = false
        this.$emit('widthChange', '250px')
      }
    }.bind(this)
  },
  methods: {
    go(e) {
      this.$router.push({ name: e })
    },
  },
}
</script>
<style scoped>
.el-menu-item > span {
  margin-left: 5px;
}
</style>
