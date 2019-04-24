<template>
  <div>
    <article class="bottomline-grey center bg-white" style="width: 100%; height: 55px;">
      <div class="df df-jcsb df-aic" style="width: 96%;">
        <div>
          <span class="c-grey">Vehicle Management</span>&nbsp;<span>/ Add New Vehicle</span>
        </div>
      </div>
    </article>
    <div class="" style="width: 100%; margin-bottom: 30px">
      <tab :tabList="tabList" :active="$store.state.tab.vehicleAdd" :changeTab="changeTab" ></tab>
    </div>
    <info v-if="$store.state.tab.vehicleAdd==='1'"></info>
  </div>

</template>
<script>
import info from './info'
import tab from '@/component/tab'
export default {
  data() {
    return {
      tabList: [
        { name: 'Basic Information', key: '1' },
        { name: 'Add lator', key: '2' },
      ],
    }
  },
  methods: {
    changeTab(e) {
      this.$store.dispatch('tab/changeVehicleAdd', e)
    },
  },
  components: { info, tab },
}
</script>
<style scoped>

</style>
