<template>
  <div class="" style="margin: 0 auto; width: 96%;">
    <section class="bottomline-grey df df-aic df-jcfe" style="margin-bottom: 20px; height: 80px;">
      <div class="df df-aic df-jcfe" style="flex-basis: 210px">
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
        <article class="bottomline-grey df df-jcfe" v-for="(e, i) in examList" :key="i" @click="goDetail(i)">
          <section class="df df-aic" style="width: 96%; height: 48px;">
            <div :class="{smallHidden: columnList[0].smallHidden}" class="column" :style="{flex: columnList[0].flex}">1233333</div>
            <div :class="{smallHidden: columnList[1].smallHidden}" class="column" :style="{flex: columnList[1].flex}">${</div>
            <div :class="{smallHidden: columnList[2].smallHidden}" class="column" :style="{flex: columnList[2].flex}">{}</div>
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
      examList: ['fdsfsds'],
      loading: false,
      form: {},
      sortList: [ { value: 'name', label: 'Name' }, { value: 'driver', label: 'Driver' } ],
      columnList: [
        { name: 'Invoice ID', flex: 2, smallHidden: true },
        { name: 'Total Amount Due', flex: 2 },
        { name: 'Due Date', flex: 2 },
      ],
    }
  },
  computed: {
    filter() { return this.$store.state.invoice.filter },
    total() { return this.$store.state.invoice.total },
    page() { return this.$store.state.invoice.page },
    // examList() { return this.$store.state.invoice.examList },
  },
  created() {
    // this.loadExam()
    // this.countExam()
  },
  components: { dataTableTitle, dataTablePage, loading },
  methods: {
    // countExam() {
    //   this.$store.dispatch('invoice/countExam')
    // },
    async loadExam() {
      this.loading = true
      await Promise.all([this.$store.dispatch('invoice/loadExam'), this.$wait(1000)])
      this.loading = false
    },
    goPage(i) {
      this.$store.dispatch('invoice/goPage', i)
    },
    changeFilter() {
      console.log(this.form)
    },
    // goDetail(i) {
    //   this.$router.push({ name: 'autoSaveInvoice', params: { id: this.examList[i].id } })
    // },
  },
}
</script>
