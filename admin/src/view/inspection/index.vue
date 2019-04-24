<template>
  <div>
    <tab :tabList="tabList" :active="$store.state.tab.inspection" :changeTab="changeTab" ></tab>
    <list v-if="$store.state.tab.inspection==='1'"></list>
    <planList v-if="$store.state.tab.inspection==='2'"></planList>
  </div>
</template>
<script>
import tab from '@/component/tab'
import list from '@/view/inspection/list'
import planList from '@/view/inspection/planList'
export default {
  data() {
    return {
      tabList: [
        { name: 'Inspection', key: '1' },
        { name: 'Schedule', key: '2' },
      ],
    }
  },
  components: { tab, list, planList },
  methods: {
    changeTab(e) {
      this.$store.dispatch('tab/changeInspection', e)
    },
  },
}
</script>
