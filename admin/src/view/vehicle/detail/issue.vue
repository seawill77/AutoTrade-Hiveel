<template>
  <section class="center" style="margin-bottom: 30px; width: 100%;">
    <div class="border-grey bg-white" style="width: 96%;">
      <div class="df df-jcsa df-aic bottomline-grey f-t2" style="height: 56px;"><span style="width: 96%;">Issues History Forms</span></div>
      <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
      <div v-if="loading" class="center" style="width: 100%;">
        <loading style="width: 50px; height: 50px;"></loading>
      </div>
      <div v-else style="width: 100%;">
        <article class="bottomline-grey df df-jcfe" v-for="(e, i) in list" :key="i">
          <section class="df df-aic" style="width: 96%; height: 48px;">
            <div :class="{smallHidden: columnList[0].smallHidden}" :style="{flex: columnList[0].flex}">{{e.id + ' ' + e.name}}</div>
            <div :class="{smallHidden: columnList[1].smallHidden}" class="df df-aic" :style="{flex: columnList[1].flex}">
              <div class="center c-white" style="width: 29px; height: 20px; border-radius: 10px;" :style="{background: e.problem ? '#fb5555' : '#d0d0d0'}">{{e.problem}}</div>
              <div style="margin-left: 20px;">{{e.content}}</div>
            </div>
            <div :class="{smallHidden: columnList[2].smallHidden}" :style="{flex: columnList[2].flex}">{{e.updateAt | date}}</div>
            <div :class="{smallHidden: columnList[3].smallHidden}" class="df df-aic" :style="{flex: columnList[3].flex}">
              <img v-if="e.status === 'PENDING'" src="@/assets/img/yellowDot.png" alt="" style="width: 12px; height: 12px;">
              <img v-if="e.status === 'QUOTED'" src="@/assets/img/purpleDot.png" alt="" style="width: 12px; height: 12px;">
              <img v-if="e.status === 'CONFIRM'" src="@/assets/img/greenDot.png" alt="" style="width: 12px; height: 12px;">
              <span style="margin-left: 10px;">{{e.status}}</span>
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
        { name: 'Title', flex: 1 },
        { name: 'Details', flex: 1 },
        { name: 'Date', flex: 1, smallHidden: true },
        { name: 'Status', flex: 1, smallHidden: true },
      ],
    }
  },
  computed: {
    list() { return this.$store.state.vehicle.issue.list },
    page() { return this.$store.state.vehicle.issue.page },

  },
  components: { dataTableTitle, dataTablePage, loading },
  created() {
    this.loadIssue()
  },
  methods: {
    goPage(i) {
      this.$store.dispatch('vehicle/goPage', i)
      this.loadIssue()
    },
    async loadIssue() {
      this.loading = true
      await Promise.all([this.$store.dispatch('vehicle/loadIssue', { id: this.$route.params.id }), this.$wait(1000)])
      this.loading = false
    },
  },
}
</script>

<style>

</style>
