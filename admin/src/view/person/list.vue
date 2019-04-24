<template>
  <div>
    <section class="center bottomline-grey bg-white" style="margin-bottom: 30px; width: 100%; height: 60px;">
      <div class="df df-jcsb df-aic" style="width: 96%;">
        <div class="f-t1">User Management</div>
        <div class="center btn-green" style="width: 200px; height: 40px;" @click="goAdd">
          <i class="el-icon-plus"></i>&nbsp;&nbsp;Add New User
        </div>
      </div>
    </section>

    <section class="center" style="margin-bottom: 30px; width: 100%;">
      <div class="df bottomline-grey" style="width: 96%; height: 100%;">
        <div class="df df-jcsb df-wrap" style="margin-bottom: 10px; width: 100%;">
          <div class="df df-jcsb df-wrap" style="width: 360px">
            <section style="margin-bottom: 20px; flex-basis: 240px"><el-input v-model="filter.name" placeholder="Search User/Name"></el-input></section>
            <button class="btn-blue f-c1" style="width: 95px; height: 40px;" type="button" @click="changeFilter">Search</button>
          </div>
          <el-select style="margin-bottom: 20px; width: 240px; height: 40px" clearable v-model="filter.sortBy" placeholder="Sort" @change="changeFilter">
            <el-option v-for="e in sortList" :key="e.value" :label="e.label" :value="e.value"></el-option>
          </el-select>
        </div>
      </div>
    </section>

    <section class="bg-white border-grey" style="margin: 0 auto; width: 96%;">
      <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
       <div v-if="loading" class="center" style="width: 100%;">
          <loading style="width: 50px; height: 50px;"></loading>
        </div>
      <div v-else style="width: 100%">
        <article class="bottomline-grey df df-jcfe pointer" v-for="(e, i) in list" :key="i" @click="goDetail(i)">
          <section class="df df-aic" style="width: 96%; height: 48px;">
            <div :class="{smallHidden: columnList[0].smallHidden}" class="column" :style="{flex: columnList[0].flex}">{{e.firstName}} {{e.lastName}}</div>
            <div :class="{smallHidden: columnList[1].smallHidden}" class="column" :style="{flex: columnList[1].flex}">{{e.type}}</div>
            <div :class="{smallHidden: columnList[2].smallHidden}" :style="{flex: columnList[2].flex}">{{e.email}}</div>
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
        { name: 'name#', flex: 1 },
        { name: 'Role', flex: 1 },
        { name: 'logins', flex: 1, smallHidden: true },
      ],
      sortList: [
        { label: 'Name', value: 'name' },
      ],
    }
  },
  computed: {
    total() { return this.$store.state.person.total },
    list() { return this.$store.state.person.list },
    filter() { return this.$store.state.person.filter },
    page() { return this.$store.state.person.page },
  },
  components: { dataTableTitle, dataTablePage, loading },
  created() {
    this.count()
    this.load()
  },
  methods: {
    count() {
      this.$store.dispatch('person/count')
    },
    async load() {
      this.loading = true
      await Promise.all([this.$store.dispatch('person/load'), this.$wait(1000)])
      this.loading = false
    },
    goPage(i) {
      this.$store.dispatch('person/goPage', i)
    },
    goAdd() {
      this.$router.push({ name: 'addPerson' })
    },
    goDetail(i) {
      this.$router.push({ name: 'personDetail', params: { id: this.list[i].id } })
    },
    changeFilter() {
      this.$store.dispatch('person/changeFilter')
      this.count()
      this.load()
    },
  },
}
</script>
<style>
.el-select .el-input.is-focus .el-input__inner {
    border-color: #d3d9db;
}
</style>
