<template>
  <main>
    <section class="bottomline-grey df df-aic df-column bg-white">
      <div style="margin: 22px 0 25px; width: 96%;"><span class="c-grey">Vehicle Management</span>&nbsp;<span style="">/&nbsp;{{detail.name}}</span></div>
      <div class="df" style="margin-bottom: 30px; width: 96%;">
        <div class="border-grey" style="width: 64px; height: 64px; border-radius: 50%;"></div>
        <div class="df df-column df-jcsb" style="margin-left: 12px;">
          <div class="f-t1">{{detail.name}}</div>
          <div class="c-grey">{{detail.group.name}}・{{detail.vin}}・{{detail.plate}}</div>
          <div class="df df-aic">
            <div class="df">
              <el-dropdown trigger="click" @command="selectStatus">
                <div class="df df-aic el-dropdown-link">
                  <img v-if="detail.status==='ACTIVE'" src="@/assets/img/greenDot.png" alt="" style="width: 12px; height: 12px;">
                  <img v-else src="@/assets/img/redDot.png" alt="" style="width: 12px; height: 12px;">
                  <span style="margin-left: 7px;">{{detail.status}}</span><i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="(e, i) in statusList" :key="i" :command="e.value">{{e.label}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div style="margin-left: 15px;">{{car.mileage | number}}mi</div>
            <div style="margin-left: 15px;">{{name}}</div>
          </div>
        </div>
      </div>
    </section>
    <tab :tabList="tabList" :active="$store.state.tab.vehicleDetail" :changeTab="changeTab" style="margin-bottom: 30px;"></tab>
    <section>
      <overview v-if="$store.state.tab.vehicleDetail==='1'"/>
      <inspection v-if="$store.state.tab.vehicleDetail==='2'"/>
      <issue v-if="$store.state.tab.vehicleDetail==='3'"/>
      <assignment v-if="$store.state.tab.vehicleDetail==='4'"/>
      <meterList v-if="$store.state.tab.vehicleDetail==='5'"/>
      <location v-if="$store.state.tab.vehicleDetail==='6'"/>
    </section>
  </main>
</template>

<script>
import tab from '@/component/tab'
import overview from './overview'
import inspection from './inspection'
import issue from './issue'
import assignment from './assignment'
import meterList from './meter'
import location from './location'
export default {
  data() {
    return {
      form: {},
      name: 'Paul Carpenter',
      group: 'Express',
      phone: '650-866-9332',
      status: 'Active',
      car: { name: '[#430] 2017 FordF-150', mileage: 45265, vin: 'DSADKJKJKLUIUONV', plate: '7PDS807' },
      statusList: [{ value: 'ACTIVE', label: 'Active' }, { value: 'INACTIVE', label: 'Inactive' }],
      tabList: [
        { name: 'Vehicle Overview', key: '1' },
        { name: 'Inspection', key: '2' },
        { name: 'Issues', key: '3' },
        { name: 'Assignment History', key: '4' },
        { name: 'Meter History', key: '5' },
        { name: 'Location History', key: '6' },
      ],
    }
  },
  created() {
    this.loadById()
  },
  computed: {
    detail() { return this.$store.state.vehicle.detail },
  },
  components: { tab, overview, inspection, issue, assignment, meterList, location },
  methods: {
    changeTab(e) {
      this.$store.dispatch('tab/changeVehicleDetail', e)
    },
    selectStatus(e) {
      this.status = e
    },
    loadById() {
      this.$store.dispatch('vehicle/loadById', { id: this.$route.params.id })
    },
  },
}
</script>
<style>

</style>
