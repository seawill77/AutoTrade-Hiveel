<template>
  <section class="center" style="margin-bottom: 30px; width: 100%;">
    <div class="border-grey bg-white" style="width: 96%; max-height: 770px;">
      <div class="df df-jcsa df-aic bottomline-grey f-t2" style="height: 56px;"><span style="width: 96%;">Issues History Forms</span></div>
      <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
      <div v-if="loading" class="center" style="width: 100%;">
        <loading style="width: 50px; height: 50px;"></loading>
      </div>
      <div v-else style="width: 100%;">
        <article class="bottomline-grey df df-jcfe" v-for="(e, i) in list" :key="i">
          <section class="df df-aic" style="width: 96%; height: 48px;">
            <div :class="{smallHidden: columnList[0].smallHidden}" :style="{flex: columnList[0].flex}">{{e.vehicle.name}}</div>
            <div :class="{smallHidden: columnList[1].smallHidden}" class="df df-aic" :style="{flex: columnList[1].flex}">{{e.content}}</div>
            <div :class="{smallHidden: columnList[2].smallHidden}" :style="{flex: columnList[2].flex}">{{e.name}}</div>
            <div :class="{smallHidden: columnList[3].smallHidden}" :style="{flex: columnList[3].flex}">{{e.createAt | date}}</div>
            <div :class="{smallHidden: columnList[4].smallHidden}" class="df df-aic" :style="{flex: columnList[4].flex}">
              <img src="@/assets/img/blueDot.png" alt="" style="width: 12px; height: 12px;">
              <span style="margin-left: 10px;">{{e.status}}</span>
            </div>
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
        { name: 'Vehicles', flex: 3 },
        { name: 'Details', flex: 3 },
        { name: 'Title', flex: 2, smallHidden: true },
        { name: 'Date', flex: 2, smallHidden: true },
        { name: 'Status', flex: 2, smallHidden: true },
      ],
    }
  },
  computed: {
    list() { return this.$store.state.person.issue.list },
    page() { return this.$store.state.person.page },
    filter() { return this.$store.state.person.issue.filter },
  },
  components: { dataTableTitle, dataTablePage, loading },
  created() {
    this.loadIssue()
    this.countIssue()
  },
  methods: {
    goPage(i) {
      this.$store.dispatch('person/goPage', i)
      this.loadIssue()
    },
    countIssue() {
      this.$store.dispatch('person/countIssue', { id: this.$route.params.id })
    },
    async loadIssue() {
      this.loading = true
      await Promise.all([this.$store.dispatch('person/loadIssue', { id: this.$route.params.id }), this.$wait(1000)])
      this.loading = false
    },
  },
}
</script>

<style>

</style>
