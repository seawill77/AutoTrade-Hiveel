<template>
  <div>
    <section class="bottomline-grey df df-aic df-column bg-white" style="margin-bottom: 20px;">
      <div style="margin: 22px 0 25px; width: 96%;"><span class="c-grey">Schedule</span>&nbsp;<span style="">/&nbsp;Schedule Details</span></div>
    </section>
    <section class="center" style="margin-bottom: 20px; width: 100%;">
      <div class="df bottomline-grey" style="width: 96%; height: 100%;">
        <div class="df df-jcsb df-wrap" style="margin-bottom: 10px; width: 100%;">
          <div class="df df-jcsb df-wrap" style="width: 360px">
            <el-autocomplete style="margin-bottom: 10px; width: 240px; height: 40px;" v-model="inspectionFilter.name" placeholder="Search name/email"></el-autocomplete>
            <div class="center btn-blue" style="margin-bottom: 10px; width: 95px; height: 40px;">Search</div>
          </div>
          <el-select v-model="inspectionFilter.sortBy" placeholder="Sort" style="margin-bottom: 10px; width: 224px; height: 40px">
            <el-option v-for="e in option" :key="e.value" :label="e.label" :value="e.value"></el-option>
          </el-select>
        </div>
      </div>
    </section>
    <section class="center" style="margin-bottom: 30px; width: 100%;">
      <div class="border-grey bg-white" style="width: 96%; max-height: 770px;">
        <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
        <div style="width: 100%;">
          <article class="bottomline-grey" v-for="(e, i) in inspectionList" :key="i">
            <section class="df df-aic" style="margin: 0 auto; width: 96%; height: 48px;">
              <div :class="{smallHidden: columnList[0].smallHidden}" :style="{flex: columnList[0].flex}">{{e.vehicle.name}}</div>
              <div :class="{smallHidden: columnList[1].smallHidden}" class="df df-aic" :style="{flex: columnList[1].flex}">
                <div class="center c-white" style="width: 29px; height: 20px; border-radius: 10px;" :style="{background: e.problem > 0 ? '#fb5555' : '#d0d0d0'}">{{e.problem}}</div>
                <div style="margin-left: 20px;">{{e.content}}</div>
              </div>
              <div :class="{smallHidden: columnList[2].smallHidden}" :style="{flex: columnList[2].flex}">{{`${e.driver.firstName} ${e.driver.lastName}`}}</div>
              <div :class="{smallHidden: columnList[3].smallHidden}" :style="{flex: columnList[3].flex}">{{e.date}}</div>
              <div :class="{smallHidden: columnList[4].smallHidden}" class="df df-aic" :style="{flex: columnList[4].flex}">
                <img src="@/assets/img/blueDot.png" alt="" style="width: 12px; height: 12px;">
                <span style="margin-left: 10px;">{{e.status}}</span>
              </div>
              <div><i class="el-icon-more"  style="transform: rotate(90deg);"></i></div>
            </section>
          </article>
        </div>
        <div class="df df-jcsa df-aic" style="width: 100%; height: 77px;">
          <dataTablePage name="Vehicle" :page="inspectionPage" style="width: 90%"></dataTablePage>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import dataTableTitle from '@/component/dataTable/title'
import dataTablePage from '@/component/dataTable/page'
export default {
  data() {
    return {
      columnList: [
        { name: 'Vehicles', flex: 3 },
        { name: 'Fail Items', flex: 3 },
        { name: 'Assign', flex: 2, smallHidden: true },
        { name: 'Date', flex: 2, smallHidden: true },
        { name: 'Status', flex: 2, smallHidden: true },
      ],
      date: '',
      option: [],
    }
  },
  computed: {
    inspectionList() { return this.$store.state.plan.inspection.list },
    inspectionFilter() { return this.$store.state.plan.inspection.filter },
    inspectionPage() { return this.$store.state.plan.inspection.page },
  },
  components: { dataTableTitle, dataTablePage },
  created() {
    this.loadInspectionList()
  },
  methods: {
    loadInspectionList() {
      this.$store.dispatch('plan/loadInspectionList', this.date)
    },
  },
}
</script>

<style>

</style>
