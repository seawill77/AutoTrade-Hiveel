<template>
  <div>
    <article class="bottomline-grey center bg-white" style="margin-bottom: 20px">
      <section class="df df-jcsb df-aic df-wrap" style="width: 96%;">
        <div class="df df-aic f-t1" style="height: 60px;">Schedule</div>
        <div class="btn-green center" style="width: 200px; height: 40px;"><i class="el-icon-plus"></i>&nbsp;&nbsp;Make New Schedule</div>
      </section>
    </article>

    <article class="bottomline-grey" style="margin-bottom: 20px">
      <div class="df df-jcsb df-wrap" style="margin: 0 auto; width: 96%">
        <section style="margin-bottom: 20px; flex-basis: 240px"><el-input v-model="filter.name" placeholder="Search Vehicles/Name"></el-input></section>
        <section style="margin-bottom: 20px; flex-basis: 240px"><el-input v-model="filter.group" placeholder="Search Vehicle groups"></el-input></section>
        <button class="btn-blue f-c1" style="width: 95px; height: 40px;" type="button" @click="changeFilter">Search</button>
        <section class="" style="margin-bottom: 20px; flex-basis: 210px">
          <el-select v-model="filter.sortBy" clearable placeholder="Sort By">
            <el-option v-for="e in sortList" :key="e.value" :label="e.label" :value="e.value"></el-option>
          </el-select>
        </section>
      </div>
    </article>
    <!-- DOTO 后端数据跟设计图对不上 -->
    <section class="bg-white border-grey" style="margin: 0 auto; width: 96%">
      <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
      <div v-if="loading" class="center" style="width: 100%;">
          <loading style="width: 50px; height: 50px;"></loading>
        </div>
      <div v-else style="width: 100%">
        <article class="bottomline-grey df df-jcfe" v-for="(e, i) in list" :key="i">
          <section class="df df-aic" style="width: 96%; height: 48px;">
            <div :class="{smallHidden: columnList[0].smallHidden}" :style="{flex: columnList[0].flex}">{{e.vehicle.name}}</div>
            <div :class="{smallHidden: columnList[1].smallHidden}" :style="{flex: columnList[1].flex}">{{e.vehicle.vin}}</div>
            <div :class="{smallHidden: columnList[2].smallHidden}" :style="{flex: columnList[2].flex}">{{e.vehicle.createAt}}</div>
            <div :class="{smallHidden: columnList[3].smallHidden}" :style="{flex: columnList[3].flex}">{{e.vehicle.plate}}</div>
            <div :class="{smallHidden: columnList[4].smallHidden}" :style="{flex: columnList[4].flex}">{{e.vehicle.updateAt}}</div>
            <div class="center" style="width: 50px; height: 100%;"><i class="el-icon-more"  style="transform: rotate(90deg);"></i></div>
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
        { name: 'Name', flex: 1 },
        { name: 'Vehicles', flex: 1 },
        { name: 'Submissions', flex: 1, smallHidden: true },
        { name: 'Service', flex: 1, smallHidden: true },
        { name: 'Date', flex: 1 },
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
    list() { return this.$store.state.plan.list },
    page() { return this.$store.state.plan.page },
    total() { return this.$store.state.plan.total },
    filter() { return this.$store.state.plan.filter },
  },
  methods: {
    count() {
      this.$store.dispatch('plan/count')
    },
    async load() {
      this.loading = true
      await Promise.all([this.$store.dispatch('plan/load'), this.$wait(1000)])
      this.loading = false
    },
    goDetail(v) {
      this.$router.push({ name: 'planDetailList', params: { id: v } })
    },
    changeFilter() {
      this.$store.dispatch('inspection/changeFilter')
      this.load()
      this.count()
    },
    goPage(i) {
      this.$store.dispatch('inspection/goPage', i)
      this.load()
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
