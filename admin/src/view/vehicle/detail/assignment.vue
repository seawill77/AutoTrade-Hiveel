<template>
  <section class="center" style="margin-bottom: 30px; width: 100%;">
    <div class="border-grey bg-white" style="width: 96%">
      <div class="df df-jcsa df-aic bottomline-grey f-t2" style="height: 56px;"><span style="width: 96%;">Issues History Forms</span></div>
      <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
      <div v-if="loading" class="center" style="width: 100%;">
        <loading style="width: 50px; height: 50px;"></loading>
      </div>
      <div v-else style="width: 100%;">
        <article class="bottomline-grey df df-jcfe" v-for="(e, i) in list" :key="i">
          <section class="df df-aic" style="width: 96%; height: 48px;">
            <div :class="{smallHidden: columnList[0].smallHidden}" :style="{flex: columnList[0].flex}">{{`${e.firstName} ${e.lastName}`}}</div>
            <div :class="{smallHidden: columnList[1].smallHidden}" :style="{flex: columnList[1].flex}">{{e.onDate | date}} to <span v-if="e.offDate">{{e.offDate | date}}</span><span v-else>Now</span><span v-if="e.dayDiff">({{e.dayDiff}} days)</span></div>
            <div class="center" style="width: 50px; height: 100%;"><i class="el-icon-more"  style="transform: rotate(90deg);"></i></div>
          </section>
        </article>
      </div>
      <div class="df df-jcsa df-aic" style="width: 100%; height: 77px;">
        <dataTablePage name="Vehicle" :page="page" :goPage="goPage" style="width: 90%"></dataTablePage>
      </div>
    </div>
  </section>
</template>
<script>
import dataTableTitle from '@/component/dataTable/title'
import dataTablePage from '@/component/dataTable/page'
import loading from '@/component/loading'
export default {
  data() {
    return {
      loading: false,
      columnList: [
        { name: 'Driver Name', flex: 1 },
        { name: 'Time', flex: 3 },
      ],
    }
  },
  computed: {
    list() { return this.$store.state.vehicle.vehicleDriverRelate.list },
    filter() { return this.$store.state.vehicle.vehicleDriverRelate.filter },
    page() { return this.$store.state.vehicle.vehicleDriverRelate.page },
  },
  components: { dataTableTitle, dataTablePage, loading },
  created() {
    this.loadVehicleDriverRelate()
  },
  methods: {
    goPage(i) {
      this.$store.dispatch('vehicle/goPage', i)
      this.loadVehicleDriverRelate()
    },
    async loadVehicleDriverRelate() {
      this.loading = true
      await Promise.all([this.$store.dispatch('vehicle/loadVehicleDriverRelate', { id: this.$route.params.id }), this.$wait(1000)])
      this.loading = false
    },
  },
}
</script>

<style>

</style>
