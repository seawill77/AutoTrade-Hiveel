<template>
  <div class="" style="margin: 0 auto; width: 96%;">
    <div class="bottomline-grey df df-jcsb df-wrap" style="margin-bottom: 30px;">
      <section class="bottomline-grep df df-wrap" style="flex: 1;">
        <div style="margin-bottom: 20px; margin-right: 20px; flex-basis: 500px;"><el-input v-model="filter.name" placeholder="Search names/descriptions" @keyup.enter.native="changeFilter"></el-input></div>
        <div class="df df-aic" style="margin-bottom: 20px;">
          <button class="btn-blue f-c1" style="width: 95px; height: 40px;" type="button" @click="changeFilter">Search</button>
        </div>
      </section>
      <section>
        <el-select style="margin-bottom: 20px; width: 240px; height: 40px" clearable v-model="filter.sortBy" placeholder="Sort" @change="changeFilter">
          <el-option v-for="e in sortList" :key="e.value" :label="e.label" :value="e.value"></el-option>
        </el-select>
      </section>
    </div>
    <section class="bg-white border-grey" >
      <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
      <div v-if="loading" class="center" style="width: 100%;">
        <loading style="width: 50px; height: 50px;"></loading>
      </div>
      <div v-else style="width: 100%">
        <article class="bottomline-grey df df-jcfe" v-for="(e, i) in list" :key="i">
          <section class="df df-aic" style="width: 96%; height: 48px;">
            <div :class="{smallHidden: columnList[0].smallHidden}" class="column" :style="{flex: columnList[0].flex}">{{e.name}}</div>
            <div :class="{smallHidden: columnList[1].smallHidden}" class="column" :style="{flex: columnList[1].flex}">{{e.content}}</div>
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
      sortList: [ { value: 'name', label: 'Name' } ],
      columnList: [
        { name: 'Name', flex: 1 },
        { name: 'Description', flex: 3, smallHidden: true },
      ],
    }
  },
  computed: {
    total() { return this.$store.state.exam.total },
    page() { return this.$store.state.exam.page },
    list() { return this.$store.state.exam.list },
    filter() { return this.$store.state.exam.filter },
  },
  created() {
    this.count()
    this.load()
  },
  components: { dataTableTitle, dataTablePage, loading },
  methods: {
    count() {
      this.filter.type = 'INSPECTION'
      this.$store.dispatch('exam/count')
    },
    async load() {
      this.loading = true
      this.filter.type = 'INSPECTION'
      await Promise.all([this.$store.dispatch('exam/load'), this.$wait(1000)])
      this.loading = false
    },
    goPage(i) {
      this.$store.dispatch('exam/goPage', i)
      this.load()
    },
    changeFilter() {
      this.$store.dispatch('exam/changeFilter')
      this.count()
      this.load()
    },
  },
}
</script>
<style scoped>

</style>
