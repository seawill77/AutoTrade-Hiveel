<template>
  <main>
    <section class="center bottomline-grey bg-white" style="margin-bottom: 30px; width: 100%; height: 55px;">
      <div class="df df-jcsb df-aic" style="width: 96%;">
        <div style="margin: 22px 0 25px; width: 96%;"><span class="c-grey">Schedule</span>&nbsp;<span style="">/&nbsp;Add New Schedule</span></div>
      </div>
    </section>

    <section class="center">
      <div class="center df-column border-grey bg-white" style="width: 96%;">
        <div class="center bottomline-grey" style="margin-bottom: 40px; width: 100%;">
          <span class="f-t2" style="margin: 20px 0; width: 96%;">Add New Schedule</span>
        </div>
        <div class="center df-column" style="margin-bottom: 30px; width: 96%;">
          <div class="f-t2" style="margin-bottom: 20px; padding-bottom: 20px; width: 100%;">Add Date</div>

        </div>
        <div class="center df-column" style="margin-bottom: 30px; width: 96%;">
          <div class="bottomline-grey f-t2" style="margin-bottom: 20px; padding-bottom: 20px; width: 100%;">Add Vehicles</div>
          <div class="df" style="margin-bottom: 20px; width: 100%; height: 100%;">
            <div class="df df-jcsb df-wrap" style="width: 100%;">
              <div class="df df-wrap">
                <el-autocomplete v-model="vehicleFilter.name" placeholder="Search Vehicles Number/Name" style="margin-right: 20px; margin-bottom: 10px; width: 240px; height: 40px;"></el-autocomplete>
                <el-autocomplete v-model="vehicleFilter.name" placeholder="Search Vehicles Group" style="margin-right: 20px; margin-bottom: 10px; width: 240px;; height: 40px;"></el-autocomplete>
                <el-autocomplete v-model="vehicleFilter.name" placeholder="Filter State" style="margin-right: 20px; margin-bottom: 10px; width: 240px;; height: 40px;"></el-autocomplete>
                <div class="center btn-blue searchBtn" style="margin-bottom: 10px; height: 40px;">Search</div>
              </div>
            </div>
          </div>
          <div class="border-grey" style="width: 100%; height: 714px;">
            <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
            <div style="width: 100%;">
              <article class="bottomline-grey" v-for="(e, i) in vehicleList" :key="i">
                <section class="df df-aic" style="margin: 0 auto; width: 96%; height: 48px;">
                  <div :class="{smallHidden: columnList[0].smallHidden}" :style="{flex: columnList[0].flex}">{{e.name}}</div>
                  <div :class="{smallHidden: columnList[1].smallHidden}" :style="{flex: columnList[1].flex}">{{e.status}}</div>
                  <div :class="{smallHidden: columnList[2].smallHidden}" :style="{flex: columnList[2].flex}">{{e.group.name}}</div>
                  <div :class="{smallHidden: columnList[3].smallHidden}" :style="{flex: columnList[3].flex}">${{e.odometer}}</div>
                  <div :class="{smallHidden: columnList[4].smallHidden}" :style="{flex: columnList[4].flex}">{{e.driver.name}}</div>
                  <div><i class="el-icon-more"  style="transform: rotate(90deg);"></i></div>
                </section>
              </article>
            </div>
            <div class="df df-jcsa df-aic" style="width: 100%; height: 77px;">
              <dataTablePage name="Vehicle" :page="vehiclePage" style="width: 90%"></dataTablePage>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import dataTableTitle from '@/component/dataTable/title'
import dataTablePage from '@/component/dataTable/page'
export default {
  data() {
    return {
      vehicleList1: [
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
        { vehicle: '[218] 2017 Ford f-150', issueNum: '#243', assign: 'Lee Zong', date: '03:20PM 21.Jan', status: 'pending' },
      ],
      columnList: [
        { name: 'Vehicle', flex: 2 },
        { name: 'Status', flex: 2 },
        { name: 'Group', flex: 1, smallHidden: true },
        { name: 'Current Meter', flex: 1, smallHidden: true },
        { name: 'Driver', flex: 1 },
      ],
      optionList: [],
    }
  },
  components: { dataTableTitle, dataTablePage },
  computed: {
    vehicleList() { return this.$store.state.plan.vehicle.list },
    vehicleFilter() { return this.$store.state.plan.vehicle.filter },
    vehiclePage() { return this.$store.state.plan.vehicle.page },
  },
  created() {
    this.loadVehicleList()
  },
  methods: {
    loadVehicleList() {
      this.$store.dispatch('plan/loadVehicleList')
    },
  },
}
</script>
<style scoped>
.searchBtn {
  width: 95px;
}
@media screen and (max-width: 385px) {
  .searchBtn {
    width: 240px;
  }
}
</style>
