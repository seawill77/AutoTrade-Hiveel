<template>
  <div class="" style="margin: 0 auto; width: 96%;">
    <section class="bottomline-grey df df-aic df-jcfe" style="margin-bottom: 20px; height: 80px;">
      <div class="df df-aic df-jcfe" style="width: 40%">
        <el-select v-model="filter.sortBy" placeholder="Sort By" @change="changeFilter">
          <el-option v-for="e in sortList" :key="e.value" :label="e.label" :value="e.value"></el-option>
        </el-select>
      </div>
    </section>
    <section class="border-grey bg-white">
      <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
      <div v-if="loading" class="center" style="width: 100%;">
        <loading style="width: 50px; height: 50px;"></loading>
      </div>
      <div v-else style="width: 100%">
        <article class="bottomline-grey df df-jcfe" v-for="(e, i) in platformList" :key="i" @click="goDetail(i)">
          <section class="df df-aic" style="width: 96%; height: 48px;">
            <div :class="{smallHidden: columnList[0].smallHidden}" class="column" :style="{flex: columnList[0].flex}">{{e}}</div>
            <div :class="{smallHidden: columnList[1].smallHidden}" class="column" :style="{flex: columnList[1].flex}">${{e}}</div>
            <div :class="{smallHidden: columnList[2].smallHidden}" class="column" :style="{flex: columnList[2].flex}">{{e}}</div>
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
      platformList: ['fdsfsds'],
      loading: false,
      sortList: [ { value: 'minDate', label: 'Most Recent' }, { value: 'maxDate', label: 'XXXX' } ],
      columnList: [
        { name: 'Invoice ID', flex: 2, smallHidden: true },
        { name: 'Total Amount Due', flex: 2 },
        { name: 'Due Date', flex: 2 },
      ],
    }
  },
  computed: {
    total() { return this.$store.state.invoice.total },
    page() { return this.$store.state.invoice.page },
    // platformList() { return this.$store.state.invoice.platformList },
    filter() { return this.$store.state.invoice.filter },
  },
  created() {
    // this.loadPlatform()
    // this.countPlateform()
  },
  components: { dataTableTitle, dataTablePage, loading },
  methods: {
    // countPlateform() {
    //   this.$store.dispatch('invoice/countPlateform')
    // },
    async loadPlatform() {
      // this.loading = true
      // await Promise.all([this.$store.dispatch('invoice/loadPlatform'), this.$wait(1000)])
      // this.loading = false
    },
    goPage(i) {
      this.$store.dispatch('invoice/goPage', i)
    },
    changeFilter() {
      console.log(this.filter)
    },
    goDetail(i) {
      this.$router.push({ name: 'platformInvoice', params: { id: this.platformList[i].id } })
    },
  },
}
</script>
