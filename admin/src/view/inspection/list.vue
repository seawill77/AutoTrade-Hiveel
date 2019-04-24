<template>
  <div>
    <article class="bottomline-grey center bg-white" style="margin-bottom: 20px">
      <section class="df df-jcsb df-aic df-wrap" style="width: 96%;">
        <div class="df df-aic f-t1" style="height: 60px;">Inspection</div>
        <div class="btn-green center" style="width: 200px; height: 40px;" @click="add">+ &nbsp; Add New Report</div>
      </section>
    </article>
    <article class="bottomline-grey" style="margin-bottom: 20px">
      <div class="df df-jcsb df-wrap" style="margin: 0 auto; width: 96%">
        <section style="margin-bottom: 20px; flex-basis: 240px"><el-input v-model="filter.name" placeholder="Search Vehicles/Name"></el-input></section>
        <section style="margin-bottom: 20px; flex-basis: 240px"><el-input v-model="filter.group" placeholder="Search Vehicle groups"></el-input></section>
        <section style="margin-bottom: 20px; flex-basis:240px"><el-input v-model="filter.status" placeholder="Status"></el-input></section>
        <button class="btn-blue f-c1" style="width: 95px; height: 40px;" type="button" @click="changeFilter">Search</button>
        <section class="" style="margin-bottom: 20px; flex-basis: 210px">
          <el-select v-model="filter.sortBy" clearable placeholder="Sort By" @change="changeFilter">
            <el-option v-for="e in sortList" :key="e.value" :label="e.label" :value="e.value"></el-option>
          </el-select>
        </section>
      </div>
    </article>

    <section class="bg-white border-grey" style="margin: 0 auto; width: 96%">
      <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
       <div v-if="loading" class="center" style="width: 100%;">
          <loading style="width: 50px; height: 50px;"></loading>
        </div>
      <div v-else style="width: 100%">
      <article class="bottomline-grey df df-jcfe" v-for="(e, i) in list" :key="i">
        <section class="df df-aic" style="width: 96%; height: 48px;">
          <div :class="{smallHidden: columnList[0].smallHidden}" class="column" :style="{flex: columnList[0].flex}">{{e.name}}</div>
          <div class="column c-white" :class="{smallHidden: columnList[1].smallHidden}" :style="{flex: columnList[1].flex}"><span class="center" style="height: 20px; width: 25px; border-radius: 10px;" :style="{background: e.problemCount > 0 ? '#fb5555': '#d0d0d0'}">{{e.problemCount}}</span></div>
          <div :class="{smallHidden: columnList[2].smallHidden}" class="column" :style="{flex: columnList[2].flex}">{{e.name}}</div>
          <div :class="{smallHidden: columnList[3].smallHidden}" class="column" :style="{flex: columnList[3].flex}">{{e.odometer}}</div>
          <div :class="{smallHidden: columnList[4].smallHidden}" class="df df-aic" :style="{flex: columnList[4].flex}">
            <div class="bg-purple" style="width: 12px; height: 12px; border-radius: 50%;" v-if="e.status === 'QUOTED'"></div>
            <div class="bg-green" style="width: 12px; height: 12px; border-radius: 50%;" v-if="e.status === 'COMPLETE'"></div>
            <div class="bg-yellow" style="width: 12px; height: 12px; border-radius: 50%;" v-if="e.status === 'PENDING'"></div>
            <span style="margin-left: 10px;">{{e.status}}</span>
          </div>
          <div class="center" style="width: 50px; height: 100%;"><i class="el-icon-more" style="transform: rotate(90deg);"></i></div>
        </section>
      </article>
      </div>
      <div class="df df-aic df-jcfe" style="margin-right: 50px; height: 77px;">
        <dataTablePage :page="page" :goPage="goPage" style=""></dataTablePage>
      </div>
    </section>
  </div>
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
        { name: 'Submitted', sortBy: 'id', flex: 1 },
        { name: 'Failed Items', sortBy: '', flex: 1 },
        { name: 'Assign', sortBy: '', flex: 1 },
        { name: 'Current Meter', flex: 1, smallHidden: true },
        { name: 'status', sortBy: '', flex: 1 },
      ],
      sortList: [ { value: 'name', label: 'Name' } ],
    }
  },
  created() {
    this.count()
    this.load()
  },
  components: { dataTableTitle, dataTablePage, loading },
  computed: {
    total() { return this.$store.state.inspection.total },
    page() { return this.$store.state.inspection.page },
    list() { return this.$store.state.inspection.list },
    filter() { return this.$store.state.inspection.filter },
  },
  methods: {
    count() {
      this.$store.dispatch('inspection/count')
    },
    async load() {
      this.loading = true
      await Promise.all([this.$store.dispatch('inspection/load'), this.$wait(1000)])
      this.loading = false
    },
    changeFilter() {
      this.$store.dispatch('inspection/changeFilter')
      this.count()
      this.load()
    },
    goPage(i) {
      this.$store.dispatch('inspection/goPage', i)
      this.load()
    },
    add() {
      this.$router.push({ name: 'addInspection' })
    },
  },
}
</script>
<style scoped>

</style>
