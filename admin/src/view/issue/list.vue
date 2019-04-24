<template>
  <main>
    <section class="center bottomline-grey bg-white" style="margin-bottom: 30px; width: 100%; height: 60px;">
      <div class="df df-jcsb df-aic" style="width: 96%;">
        <div class="f-t1">Issues</div>
        <div class="center btn-green" style="width: 200px; height: 40px;">
          <i class="el-icon-plus"></i>&nbsp;&nbsp;Add New Issue
        </div>
      </div>
    </section>
    <section class="center" style="margin-bottom: 30px; width: 100%;">
      <div class="df bottomline-grey" style="width: 96%; height: 100%;">
        <div class="df df-jcsb df-wrap" style="margin-bottom: 10px; width: 100%;">
          <div class="df df-jcsb df-wrap" style="width: 60%;">
            <section style="margin-bottom: 20px; flex-basis: 240px"><el-input v-model="filter.name" placeholder="Search Issue/Name"></el-input></section>
            <section style="margin-bottom: 20px; flex-basis: 240px"><el-input v-model="filter.group" placeholder="Search Vehicle groups"></el-input></section>
            <section style="margin-bottom: 20px; flex-basis:240px"><el-input v-model="filter.status" placeholder="Status"></el-input></section>
            <button class="btn-blue f-c1" style="width: 95px; height: 40px;" type="button" @click="changeFilter">Search</button>
          </div>
          <el-select style="margin-bottom: 20px; width: 240px; height: 40px" clearable v-model="filter.sortBy" placeholder="Sort" @change="changeFilter">
            <el-option v-for="e in sortList" :key="e.value" :label="e.label" :value="e.value"></el-option>
          </el-select>
        </div>
      </div>
    </section>
      <div class="border-grey bg-white" style="margin: 0 auto; width: 96%;">
        <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
         <div v-if="loading" class="center" style="width: 100%;">
          <loading style="width: 50px; height: 50px;"></loading>
        </div>
        <div v-else style="width: 100%">
          <article class="bottomline-grey df df-jcfe" v-for="(e, i) in list" :key="i" @click="goDetail(i)">
            <section class="df df-aic" style="width: 96%; height: 48px;">
              <div class="column" :class="{smallHidden: columnList[0].smallHidden}" :style="{flex: columnList[0].flex}">{{e.vehicle.name}}</div>
              <div class="column" :class="{smallHidden: columnList[1].smallHidden}" :style="{flex: columnList[1].flex}">#{{e.id}}</div>
              <div class="column" :class="{smallHidden: columnList[2].smallHidden}" :style="{flex: columnList[2].flex}">{{e.name}}</div>
              <div class="column" :class="{smallHidden: columnList[3].smallHidden}" :style="{flex: columnList[3].flex}">{{e.createAt}}</div>
              <div class="df df-aic column" :class="{smallHidden: columnList[4].smallHidden}" :style="{flex: columnList[4].flex}">
                <img v-if="e.status === 'PENDING'" src="@/assets/img/yellowDot.png" alt="" style="width: 12px; height: 12px;">
                <img v-if="e.status === 'QUOTED'" src="@/assets/img/purpleDot.png" alt="" style="width: 12px; height: 12px;">
                <img v-if="e.status === 'CONFIRM'" src="@/assets/img/greenDot.png" alt="" style="width: 12px; height: 12px;">
                <span style="margin-left: 10px; text-transform: capitalize;">{{e.status}}</span>
              </div>
              <div class="center" style="width: 50px; height: 100%;"><i class="el-icon-more" style="transform: rotate(90deg);"></i></div>
            </section>
          </article>
        </div>
        <div class="df df-jcsa df-aic" style="width: 100%; height: 77px;">
          <dataTablePage name="Issue" :page="page" :goPage="goPage" style="width: 90%"></dataTablePage>
        </div>
      </div>
  </main>
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
        { name: 'Vehicle', flex: 1 },
        { name: 'Issue Number', flex: 1 },
        { name: 'Assign', flex: 1, smallHidden: true },
        { name: 'Reported Date', flex: 1, smallHidden: true },
        { name: 'Status', flex: 1 },
      ],
      sortList: [{ label: 'Name', value: 'name' }],
    }
  },
  components: { dataTableTitle, dataTablePage, loading },
  computed: {
    total() { return this.$store.state.issue.total },
    filter() { return this.$store.state.issue.filter },
    page() { return this.$store.state.issue.page },
    list() { return this.$store.state.issue.list },
  },
  created() {
    this.count()
    this.load()
  },
  methods: {
    count() {
      this.$store.dispatch('issue/count')
    },
    async load() {
      this.loading = true
      await Promise.all([this.$store.dispatch('issue/load'), this.$wait(1000)])
      this.loading = false
    },
    goPage(i) {
      this.$store.dispatch('issue/goPage', i)
      this.load()
    },
    goDetail(i) {
      this.$router.push({ name: 'issueDetail', params: { id: this.list[i].id } })
      this.load()
    },
    changeFilter() {
      this.$store.dispatch('issue/changeFilter')
      this.count()
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
