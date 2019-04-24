<template>
  <div>
    <section class="center bottomline-grey bg-white" style="margin-bottom: 30px; width: 100%; height: 55px;">
      <div class="df df-jcsb df-aic" style="width: 96%;">
        <div class="f-t1">Dashboard</div>
        <div class="center btn-green" style="width: 200px; height: 40px;" @click="go('addExam')">
          <i class="el-icon-plus"></i>&nbsp;&nbsp;Add Service Task
        </div>
      </div>
    </section>
    <div style="margin: 0 auto; width: 96%;">
      <div class="df df-jcsb df-wrap">
        <section class="df df-column df-jcsa df-aic border-grey bg-white" style="margin-bottom: 30px; width: 23%; min-width: 250px; height: 200px;">
          <div class="df df-aic f-c1" style="width: 90%; height: 50px;">Owned Vehicles</div>
          <section class="bottomline-grey center" style="width: 100%; flex: 1;">
            <div class="df df-jcsb" style="width: 90%;">
              <div>Active</div>
              <div><span class="bg-green c-white" style="padding: 3px 10px; border: 0; border-radius: 30px;">{{overview.own.active}}</span></div>
            </div>
          </section>
          <section class="bottomline-grey center" style="width: 100%; flex: 1;">
            <div class="df df-jcsb" style="width: 90%;">
              <div>Service</div>
              <div><span class="bg-blue c-white" style="padding: 3px 10px; border: 0; border-radius: 30px;">{{overview.own.storage}}</span></div>
            </div>
          </section>
          <section class="center" style="width: 100%; flex: 1;">
            <div class="df df-jcsb" style="width: 90%;">
              <div>Out of service</div>
              <div><span class="bg-red c-white" style="padding: 3px 10px; border: 0; border-radius: 30px;">{{overview.own.down}}</span></div>
            </div>
          </section>
        </section>
        <section class="df df-column df-jcsa df-aic border-grey bg-white" style="margin-bottom: 30px; width: 23%; min-width: 250px; height: 200px;">
          <div class="df df-aic f-c1" style="width: 90%; height: 50px;">Rental Vehicles</div>
          <section class="bottomline-grey center" style="width: 100%; flex: 1;">
            <div class="df df-jcsb" style="width: 90%;">
              <div>Active</div>
              <div><span class="bg-green c-white" style="padding: 3px 10px; border: 0; border-radius: 30px;">{{overview.rental.active}}</span></div>
            </div>
          </section>
          <section class="bottomline-grey center" style="width: 100%; flex: 1;">
            <div class="df df-jcsb" style="width: 90%;">
              <div>Service</div>
              <div><span class="bg-blue c-white" style="padding: 3px 10px; border: 0; border-radius: 30px;">{{overview.rental.storage}}</span></div>
            </div>
          </section>
          <section class="center" style="width: 100%; flex: 1;">
            <div class="df df-jcsb" style="width: 90%;">
              <div>Out of service</div>
              <div><span class="bg-red c-white" style="padding: 3px 10px; border: 0; border-radius: 30px;">{{overview.rental.down}}</span></div>
            </div>
          </section>
        </section>
        <section class="df df-column df-jcsa df-aic border-grey bg-white" style="margin-bottom: 30px; width: 50%; min-width: 250px; min-height: 200px;">
          <div class="df df-aic f-c1" style="margin-bottom: 15px; width: 90%; height: 50px;">Vehicles Service Status</div>
          <div class="df df-jcsb df-wrap" style="width: 90%; flex: 1;">
            <section class="df df-column df-jcsb" style="margin-bottom: 15px; width: 70px; height: 84px;">
              <div>Pending</div>
              <div class="c-dark-blue" style="font-size: 42px; ">{{overview.pending}}</div>
            </section>
            <section class="df df-column df-jcsb" style="margin-bottom: 15px; width: 70px; height: 84px;">
              <div>Quoted</div>
              <div class="c-dark-blue" style="font-size: 42px; ">{{overview.quoted}}</div>
            </section>
            <section class="df df-column df-jcsb" style="margin-bottom: 15px; width: 70px; height: 84px;">
              <div>Confirmed</div>
              <div class="c-dark-blue" style="font-size: 42px; ">{{overview.confirm}}</div>
            </section>
            <section class="df df-column df-jcsb" style="margin-bottom: 15px; width: 70px; height: 84px;">
              <div>Scheduled</div>
              <div class="c-dark-blue" style="font-size: 42px; ">{{overview.scheduled}}</div>
            </section>
            <section class="df df-column df-jcsb" style="margin-bottom: 15px; width: 70px; height: 84px;">
              <div>Complete</div>
              <div class="c-dark-blue" style="font-size: 42px; ">{{overview.complete}}</div>
            </section>
            <section class="df df-column df-jcsb" style="margin-bottom: 15px; width: 70px; height: 84px;">
              <div>Overdue</div>
              <div class="c-dark-blue" style="font-size: 42px; ">{{overview.overdue}}</div>
            </section>
          </div>
        </section>
      </div>
      <div class="df df-jcsb df-wrap" style="width: 100%;">
        <div class="df df-column" style="width: 50%;">
          <section class="bg-white border-grey df df-column " style="margin-bottom: 30px;">
            <section class="df df-column df-jcsa df-aic">
              <div class="df df-aic f-c1" style="width: 90%; height: 50px;">Owned Vehicles</div>
              <div class="df df-jcsb df-wrap" style="width: 90%; flex: 1;">
                <section class="df" style="align-items: baseline;">
                  <div class="c-dark-blue" style="font-size: 42px; ">${{overview.own.cost.today | number}}</div>
                  <div> / today</div>
                </section>
                <section class="df" style="align-items: baseline;">
                  <div class="c-dark-blue" style="font-size: 42px; ">${{overview.own.cost.month | number}}</div>
                  <div> / last 30 days</div>
                </section>
              </div>
            </section>
            <section class="df df-column df-jcsa df-aic" style="margin-bottom: 30px;">
              <div class="df df-aic f-c1" style="width: 90%; height: 50px;">Rental Vehicles</div>
              <div class="df df-jcsb df-wrap" style="width: 90%; flex: 1;">
                <section class="df" style="align-items: baseline;">
                  <div class="c-dark-blue" style="font-size: 42px; ">${{overview.rental.cost.today | number}}</div>
                  <div> / today</div>
                </section>
                <section class="df" style="align-items: baseline;">
                  <div class="c-dark-blue" style="font-size: 42px; ">${{overview.rental.cost.month | number}}</div>
                  <div> / last 30 days</div>
                </section>
              </div>
            </section>
          </section>
          <section class="bg-white border-grey center df-column " style="margin-bottom: 30px;">
            <div class="df df-aic f-c1" style="width: 80%; height: 50px;">Total Cost Monthly</div>
            <div class="center" style="width: 100%; height: 250px;" >
              <v-chart style="width: 100%; height: 100%;" :options="chartOptionsList" :autoresize="true"></v-chart>
            </div>
          </section>
        </div>
        <section class="bg-white border-grey df df-column " style="margin-bottom: 30px; width: 48%;">
          <div style="margin: 0 auto; width: 96%;">
            <div class="df df-aic f-c1" style="width: 80%; height: 50px;">Recent order</div>
          </div>
          <tab :tabList="tabList" :active="$store.state.tab.home" :changeTab="changeTab" ></tab>
          <div v-if="loading" class="center" style="width: 100%;">
            <loading style="width: 50px; height: 50px;"></loading>
          </div>
          <div v-else style="width: 100%">
            <div v-if="$store.state.tab.home==='1'">
              <article class="bottomline-grey df df-jcfe" v-for="(e, i) in overview.inspectionList" :key="i">
                <section class="df df-jcsb df-aic" style="margin: 0 auto; width: 96%; height: 48px;">
                  <div style="">[#{{e.id}}] {{e.name}} - {{e.status}}</div>
                  <div style="">{{e.createAt}}</div>
                </section>
              </article>
            </div>
            <div v-if="$store.state.tab.home==='2'">
              <article class="bottomline-grey df df-jcfe" v-for="(e, i) in overview.issueList" :key="i">
                <section class="df df-jcsb df-aic" style="margin: 0 auto; width: 96%; height: 48px;">
                  <div style="">[#{{e.id}}] {{e.name}} - {{e.status}}</div>
                  <div style="">{{e.createAt}}</div>
                </section>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
import tab from '@/component/tab'
import 'echarts/lib/chart/bar'
import loading from '@/component/loading'
export default {
  data() {
    return {
      loading: false,
      tabList: [
        { name: 'Inspection', key: '1' },
        { name: 'Issue', key: '2' },
      ],
      chartOptionsList: {
        color: ['rgba(74, 144, 226, .6)'],
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        grid: {
          top: 30, bottom: 30, left: 60, right: 60,
        },
        xAxis: {
          data: [ '', '', '', '', '', '', '', '', '', '', '', '' ],
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          barWidth: '60%',
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20],
        }],
      },

    }
  },
  computed: {
    overview() { return this.$store.state.home },
  },
  components: { tab, loading },
  created() {
    this.load()
  },
  methods: {
    async load() {
      this.$store.dispatch('home/load')
      this.loading = true
      await Promise.all([this.$store.dispatch('home/loadInspection'), this.$store.dispatch('home/loadIssue'), this.$wait(1000)])
      this.loading = false
    },
    go(e) {
      this.$router.push({ name: e })
    },
    changeTab(e) {
      this.loading = true
      this.$store.dispatch('tab/changeHome', e)
      this.loading = false
    },
  },
}
</script>

<style scoped>
/* todo media */
</style>
