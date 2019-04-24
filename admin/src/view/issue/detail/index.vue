<template>
  <div>
    <section class="center bottomline-grey bg-white" style="margin-bottom: 30px; width: 100%; height: 55px;">
      <div class="df df-jcsb df-aic" style="width: 96%;">
        <div>
          <span class="c-grey">Issues</span>&nbsp;<span>/ Issue #243</span>
        </div>
      </div>
    </section>
    <section v-if="loading" class="center" style="width: 100%;"><loading style="width: 35px; height: 35px;"/></section>
    <section v-else class="center df-column">
      <div class="df df-jcsb df-wrap" style="margin-bottom: 10px; width: 96%;">
        <div class="border-grey bg-white detail" style="margin-bottom: 20px; height: 244px;">
          <div class="bottomline-grey" style="margin-bottom: 20px;">
            <div class="f-t2" style="margin: 20px 30px;">Issues Details</div>
          </div>
          <div style="margin: 0 30px;">
            <div class="df df-jcsb" style="margin-bottom: 20px;">
              <span>Vehicle</span>
              <span>[{{issue.vehicle.id}}] {{issue.vehicle.name}}</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px;">
              <span>Reported Date</span>
              <span>{{issue.createdAt}}</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px;">
              <span>Odometer</span>
              <span>{{issue.vehicle.odometer | number}}mi</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px;">
              <span>Assigned To</span>
              <span>{{issue.driver.name}}</span>
            </div>
          </div>
        </div>
        <div class="border-grey bg-white detail" style="margin-bottom: 20px; height: 244px;">
          {{issue.lon}} {{issue.lat}}
        </div>
      </div>
      <div class="border-grey bg-white" style="margin-bottom: 30px; width: 96%;">
        <div class="bottomline-grey" style="margin-bottom: 20px;">
          <div class="f-t2" style="margin: 20px 30px;">Comments & Photos</div>
        </div>
        <div style="margin:20px 30px 40px;" v-for="(problem, i) in problemList" :key="i">
          <div style="margin-bottom: 46px; max-width: 460px; word-wrap:break-word;">
            <div>{{issue.content}}</div>
          </div>
          <div class="df df-wrap">
            <div v-if="problem.imgsrc1" style="margin-right: 20px; margin-bottom: 15px; width: 223px; height: 175px;">
              <centerImage :src="problem.imgsrc1"/>
            </div>
            <div v-if="problem.imgsrc2" style="margin-right: 20px; margin-bottom: 15px; width: 223px; height: 175px;">
              <centerImage :src="problem.imgsrc2"/>
            </div>
            <div v-if="problem.imgsrc3" style="margin-right: 20px; margin-bottom: 15px; width: 223px; height: 175px;">
              <centerImage :src="problem.imgsrc3"/>
            </div>
            <div v-if="problem.imgsrc4" style="margin-right: 20px; margin-bottom: 15px; width: 223px; height: 175px;">
              <centerImage :src="problem.imgsrc4"/>
            </div>
          </div>
        </div>
      </div>
      <edit v-if="issue.status === 'PENDING' || edit"/>
      <represent v-else/>
      <div class="df df-jcsa" style="margin-bottom: 40px; width: 100%;">
        <div class="df df-jcfe" style="width: 96%;">
          <div v-if="issue.status === 'PENDING' && !edit" class="center btn-blue" style="width: 160px; height: 40px;">Quote</div>
          <div v-if="issue.status !== 'PENDING' && edit" class="center btn-blue" style="width: 160px; height: 40px;">Update</div>
          <div v-if="issue.status==='QUOTED' && !edit" class="center btn-blue" style="width: 160px; height: 40px;">Comfirmed</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import centerImage from '@/component/image/centerImage'
import loading from '@/component/loading'
import edit from './edit'
import represent from './represent'
export default {
  data() {
    return {
      loading: false,
    }
  },
  components: { centerImage, loading, edit, represent },
  computed: {
    issue() { return this.$store.state.issue.detail },
    problemList() { return this.$store.state.issue.problem.list },
    me() { return this.$store.state.me },
    edit() { return this.$store.state.issue.quote.edit },
  },
  created() {
    this.loadIssueAndProblem()
  },
  methods: {
    async loadIssueAndProblem() {
      this.loading = true
      await Promise.all([this.$store.dispatch('issue/loadById', { id: this.$route.params.id }), this.$store.dispatch('issue/loadProblemByIssue', { id: this.$route.params.id }), this.$wait(1000)])
      this.loading = false
    },
  },
}
</script>
<style scoped>
.detail {
  width: 49%;
}

@media screen and (max-width: 768px){
  .detail {
    width: 100%;
  }
}
</style>
<style>
.el-input__inner {
  border-color: #d3d9db;
  text-align: right;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
