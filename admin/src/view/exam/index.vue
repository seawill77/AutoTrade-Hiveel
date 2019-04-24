<template>
  <div>
    <tab :tabList="tabList" :active="$store.state.tab.service" :changeTab="changeTab" ></tab>
    <section class="bottomline-grey center bg-white" style="margin-bottom: 30px;">
      <div class="df df-jcsb df-aic df-wrap" style="width: 96%;">
        <div class="df df-aic f-t1" style="height: 60px;">
          {{$store.state.tab.service==='1' ? 'Inspection Task' : 'Issue Task'}}
        </div>
        <div class="btn-green center" style="width: 200px; height: 40px;" @click="goAdd">+ &nbsp; Add Service Task</div>
      </div>
    </section>
    <inspectionList v-if="$store.state.tab.service==='1'"></inspectionList>
    <issueList v-if="$store.state.tab.service==='2'"></issueList>
  </div>
</template>
<script>
import tab from '@/component/tab'
import inspectionList from '@/view/exam/inspectionList'
import issueList from '@/view/exam/issueList'
export default {
  data() {
    return {
      sortList: [ { value: 'name', label: 'Name' } ],
      tabList: [
        { name: 'Inspection Service Task', key: '1' },
        { name: 'Issue Service Task', key: '2' },
      ],
    }
  },
  components: { tab, inspectionList, issueList },
  methods: {
    goAdd() {
      this.$router.push({ name: 'addExam', params: { type: this.$store.state.tab.service === '1' ? 'INSPECTION' : 'ISSUE' } })
    },
    changeTab(e) {
      this.$store.dispatch('tab/changeService', e)
      this.$store.dispatch('exam/reset', e)
    },
  },
}
</script>
