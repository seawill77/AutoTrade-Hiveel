<template>
  <section class="center" style="margin-bottom: 30px; width: 100%;">
    <div class="border-grey bg-white" style="width: 96%; max-height: 770px;">
      <div class="df df-jcsa df-aic bottomline-grey f-t2" style="height: 56px;"><span style="width: 96%;">Issues History Forms</span></div>
      <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
      <div v-if="loading" class="center" style="width: 100%;">
        <loading style="width: 50px; height: 50px;"></loading>
      </div>
      <div v-else style="width: 100%;">
        <article class="bottomline-grey df df-jcfe">
          <section class="df df-aic" style="width: 96%; height: 48px;">
            <div :class="{smallHidden: columnList[0].smallHidden}" :style="{flex: columnList[0].flex}">{{list.id}}</div>
            <div :class="{smallHidden: columnList[1].smallHidden}" :style="{flex: columnList[1].flex}">
              {{list.onDate | date}} to
              <span v-if="list.offDate">{{list.offDate | date}}</span>
              <span v-else>Now</span><span v-if="list.dayDiff">({{list.dayDiff}} days)</span>
            </div>
            <div class="center" style="width: 50px; height: 100%;"><i class="el-icon-more"  style="transform: rotate(90deg);"></i></div>
          </section>
        </article>
      </div>
      <div class="df df-aic df-jcfe" style="margin-right: 50px; height: 77px;">
        <dataTablePage :page="page" :goPage="goPage" style=""></dataTablePage>
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
        { name: 'Vehicles', flex: 1 },
        { name: 'Time', flex: 3 },
      ],
    }
  },
  computed: {
    list() {
      console.log(this.$store.state.person.vehicleDriverRelate)
      return this.$store.state.person.vehicleDriverRelate
    },
    filter() { return this.$store.state.person.vehicleDriverRelate.filter },
    page() { return this.$store.state.person.page },

  },
  components: { dataTableTitle, dataTablePage, loading },
  created() {
    this.loadVehicleDriverRelate()
  },
  methods: {
    goPage(i) {
      this.$store.dispatch('person/goPage', i)
      this.loadVehicleDriverRelate()
    },
    async loadVehicleDriverRelate() {
      this.loading = true
      await Promise.all([this.$store.dispatch('person/loadVehicleDriverRelate', { id: this.$route.params.id }), this.$wait(1000)])
      this.loading = false
    },
  },
}
</script>

<style>

</style>
