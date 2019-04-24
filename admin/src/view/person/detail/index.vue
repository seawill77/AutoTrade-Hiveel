<template>
  <main>
    <section class="bottomline-grey df df-aic df-column bg-white">
      <div style="margin: 22px 0 25px; width: 96%;"><span class="c-grey">User Management</span>&nbsp;<span style="">/&nbsp;{{`${driver.firstName} ${driver.lastName}`}}</span></div>
      <div class="df" style="margin-bottom: 30px; width: 96%;">
        <div class="border-grey" style="width: 64px; height: 64px; border-radius: 50%;"></div>
        <div class="df df-column df-jcsb" style="margin-left: 12px;">
          <div class="f-t1">{{`${driver.firstName} ${driver.lastName}`}}</div>
          <div class="c-grey">{{driver.group.name}}・{{driver.phone}}・{{driver.driverLicense}}</div>
          <div class="df df-aic">
            <div class="df">
              <div class="df df-aic" style="margin-right: 20px; ">
                <img v-if="driver.status==='Active'" src="@/assets/img/greenDot.png" alt="" style="width: 12px; height: 12px;">
                <img v-else src="@/assets/img/redDot.png" alt="" style="width: 12px; height: 12px;">
                <span style="margin-left: 7px;">{{driver.status}}</span>
              </div>
            </div>
            <div style="margin-left: 8px;">{{driver.vehicle.name}}</div>
          </div>
        </div>
      </div>
    </section>
    <tab :tabList="tabList" :active="$store.state.tab.personDetail" :changeTab="changeTab" style="margin-bottom: 30px;"></tab>
    <section>
      <overview v-if="$store.state.tab.personDetail==='1'"/>
      <inspection v-if="$store.state.tab.personDetail==='2'"/>
      <issue v-if="$store.state.tab.personDetail==='3'"/>
      <assignment v-if="$store.state.tab.personDetail==='4'"/>
    </section>
  </main>
</template>

<script>
import tab from '@/component/tab'
import overview from './overview'
import inspection from './inspection'
import assignment from './assignment'
import issue from './issue'
export default {
  data() {
    return {
      tabList: [
        { name: 'User Overview', key: '1' },
        { name: 'Inspection', key: '2' },
        { name: 'Issues', key: '3' },
        { name: 'Assignment History', key: '4' },
      ],
    }
  },
  components: { tab, overview, inspection, assignment, issue },
  computed: {
    driver() { return this.$store.state.person.detail },
  },
  created() {
    this.loadById()
  },
  methods: {
    loadById() {
      this.$store.dispatch('person/loadById', { id: this.$route.params.id })
    },
    changeTab(e) {
      this.$store.dispatch('tab/changePersonDetail', e)
    },
  },
}
</script>

<style>

</style>
