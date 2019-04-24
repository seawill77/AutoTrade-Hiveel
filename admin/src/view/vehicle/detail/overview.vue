<template>
  <div class="center df-column">
    <article class="df df-column df-jcsa border-grey bg-white" style="margin-bottom: 30px; width: 96%;">
      <div class="df df-wrap" style="margin: 20px 30px 0;">
        <section class="df df-column" style="margin-bottom: 20px; width: 33%; min-width: 150px; max-width: 450px;">
          <span>Inspection</span>
          <span class="c-dark-blue" style="font-size: 48px; font-weight: 700;">{{inspectionTotal}}</span>
        </section>
        <section class="df df-column" style="margin-bottom: 20px; width: 33%; min-width: 150px; max-width: 450px;">
          <span>Issues</span>
          <span class="c-dark-blue" style="font-size: 48px; font-weight: 700;">{{issueTotal}}</span>
        </section>
        <section class="df df-column" style="margin-bottom: 20px; width: 33%; min-width: 150px; max-width: 450px;">
          <span>Service Costs</span>
          <span class="c-dark-blue" style="font-size: 48px; font-weight: 700;">$399.45</span>
        </section>
      </div>
    </article>
    <article v-if="!edit" class="df df-column df-jcsa df-aic border-grey bg-white" style="margin-bottom: 30px; width: 96%;">
      <div class="center bottomline-grey" style="margin-bottom: 30px; width: 100%;">
        <section class="df df-aic df-jcsb" style="margin: 0 20px; width: 100%; height: 56px;">
          <span class="f-t2">Basic Information</span>
          <span class="pointer" @click="changeEdit(true)">Edit</span>
        </section>
      </div>
      <article class="df df-column" style="width: 96%;">
        <section class="df df-wrap df-jcsb" style="margin: 0 20px; width: 100%; max-width: 920px;">
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; max-width: 412px;">
            <span style="width: 110px;">Vehicle Name</span>
            <div style="width: 300px;">{{detail.name}}</div>
          </div>
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; max-width: 412px;">
            <span style="width: 110px;">VIN/SN</span>
            <div style="width: 300px;">{{detail.vin}}</div>
          </div>
        </section>
        <section class="df df-wrap df-jcsb" style="margin: 0 20px; width: 100%; max-width: 920px;">
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; max-width: 412px;">
            <span style="width: 110px;">License Plate</span>
            <div style="width: 300px;">{{detail.plate}}</div>
          </div>
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; max-width: 412px;">
            <span style="width: 110px;">Type</span>
            <div style="width: 300px;">{{detail.rental===true? 'Rental': 'No'}}</div>
          </div>
        </section>
      </article>
    </article>

    <article v-else class="df df-column df-jcsa df-aic border-grey bg-white" style="margin-bottom: 30px; width: 96%;">
      <div class="center bottomline-grey" style="margin-bottom: 30px; width: 100%;">
        <section class="df df-aic df-jcsb" style="margin: 0 20px; width: 100%; height: 56px;">
          <div class="f-t2">Basic Information</div>
          <div class="df df-jcsb pointer" style="width: 100px;">
            <span @click="changeEdit(false)">Cancel</span>
            <span>Save</span>
          </div>
        </section>
      </div>
      <article class="df df-jcsb df-column" style="width: 100%;">
        <section class="df df-wrap df-jcsb" style="margin: 0 20px; width: 100%; max-width: 920px;">
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; max-width: 412px;">
            <span style="width: 110px;">Vehicle Name</span>
            <div style="width: 300px;">
              <el-input v-model="form.name" placeholder="Vehicle Name"></el-input>
            </div>
          </div>
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; max-width: 412px;">
            <span style="width: 110px;">VIN/SN</span>
            <div style="width: 300px;">
              <el-input v-model="form.vin" placeholder="VIN"></el-input>
            </div>
          </div>
        </section>
        <section class="df df-wrap df-jcsb" style="margin: 0 20px; width: 100%; max-width: 920px;">
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; max-width: 412px;">
            <span style="width: 110px;">License Plate</span>
            <div style="width: 300px;">
              <el-input v-model="form.plate" placeholder="Plate"></el-input>
            </div>
          </div>
        </section>
        <section class="df df-aic df-wrap" style="margin: 0 20px 60px; max-width: 412px;">
          <span style="width: 110px;">Photo</span>
          <!-- <div class="center btn-blue" style="width: 125px; height: 40px;">Upload Photo</div> -->
          <el-upload
            action=""
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <button class="btn-blue f-t2" style="width: 125px; height: 40px;" type="button">Upload Photo</button>
            <div slot="tip" class="el-upload__tip">Upload One Picture</div>
          </el-upload>
        </section>
      </article>
      <article style="margin-bottom: 20px; width: 100%;">
        <section class="bottomline-grey" style="margin-bottom: 30px; padding-bottom: 20px; width: 100%;"><span class="f-t2" style="margin: 0 20px;">Classification</span></section>
        <section class="df df-wrap df-jcsb" style="margin: 0 20px; width: 100%; max-width: 920px;">
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; max-width: 412px;">
            <span style="width: 110px;">Type</span>
            <div style="width: 300px;">
              <el-input v-model="form.type" placeholder="Type"></el-input>
            </div>
          </div>
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; max-width: 412px;">
            <span style="width: 110px;">Group</span>
            <div style="width: 300px;">
              <el-input v-model="form.group" placeholder="Group"></el-input>
            </div>
          </div>
        </section>
        <section class="df df-jcfe" style="width: 96%;">
          <div class="center btn-blue" style="width: 160px; height: 40px;" @click="update">Save</div>
        </section>
      </article>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      fileList: [],
      edit: false,
    }
  },
  computed: {
    detail() { return this.$store.state.vehicle.detail },
    inspectionTotal() { return this.$store.state.vehicle.inspection.total },
    issueTotal() { return this.$store.state.vehicle.issue.total },
  },
  created() {
    this.countInspectionByVehicle()
    this.countIssueByVehicle()
    this.loadById()
  },
  methods: {
    countInspectionByVehicle() {
      this.$store.dispatch('vehicle/countInspection', { id: this.$route.params.id })
    },
    countIssueByVehicle() {
      this.$store.dispatch('vehicle/countIssue', { id: this.$route.params.id })
    },
    loadById() {
      this.$store.dispatch('vehicle/loadById', { id: this.$route.params.id })
    },
    changeEdit(e) {
      this.edit = e
      if (this.edit) {
        this.form.id = this.$route.params.id
      }
    },
    update() {
      console.log(this.form)
      // this.$store.dispatch('vehicle/update', this.form)
      this.changeEdit(false)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Are you sure to remove ${file.name}？`)
    },
  },

}
</script>
<style>

</style>
