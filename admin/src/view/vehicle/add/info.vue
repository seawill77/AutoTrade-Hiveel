<template>
  <div class="center df-column" style="margin-bottom: 30px;">
    <section class="df df-column df-jcsa df-aic border-grey bg-white" style="margin-bottom: 30px; width: 96%;">
      <section class="center bottomline-grey" style="margin-bottom: 30px; width: 100%;">
        <div class="df df-aic f-t2" style="margin: 0 20px; width: 100%; height: 56px;">
          Basic Information
        </div>
      </section>
      <div class="df df-jcsb df-column" style="width: 100%;">
        <div class="df df-wrap df-jcsb" style="margin: 0 20px; max-width: 920px;">
          <section class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">Vehicle Name</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.subtotal" placeholder="Input"></el-input>
            </div>
          </section>
          <section class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">VIN/SN</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.vin" placeholder="Input"></el-input>
            </div>
          </section>
        </div>
        <div class="df df-wrap df-jcsb" style="margin: 0 20px; max-width: 920px;">
          <section class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">License Plate</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.plate" placeholder="Input"></el-input>
            </div>
          </section>
          <section class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">Type</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.subtotal" placeholder="Input"></el-input>
            </div>
          </section>
        </div>
        <div class="df df-wrap df-jcsb" style="margin: 0 20px; max-width: 920px;">
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">Year</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.year" placeholder="Input"></el-input>
            </div>
          </div>
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">Make</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.make" placeholder="Input"></el-input>
            </div>
          </div>
        </div>
        <div class="df df-wrap df-jcsb" style="margin: 0 20px; max-width: 920px;">
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">Model</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.model" placeholder="Input"></el-input>
            </div>
          </div>
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">Trim</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.trim" placeholder="Input"></el-input>
            </div>
          </div>
        </div>
        <div class="df df-wrap df-jcsb" style="margin: 0 20px; max-width: 920px;">
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">Color</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.color" placeholder="Input"></el-input>
            </div>
          </div>
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">Registration State</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.state" placeholder="Input"></el-input>
            </div>
          </div>
        </div>
        <div class="df df-aic df-wrap" style="margin: 0 20px 60px; width: 100%; max-width: 412px;">
          <span style="width: 110px;">Photo</span>
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
        </div>
      </div>
      <div  style="margin-bottom: 20px; width: 100%;">
        <div class="bottomline-grey" style="margin: 0 20px 30px;  padding-bottom: 20px;"><span class="f-t2" style="">Classification</span></div>
        <div class="df df-wrap df-jcsb" style="margin: 0 20px; max-width: 920px;">
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">Type</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.type" placeholder="Input"></el-input>
            </div>
          </div>
          <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 30px; width: 100%; max-width: 412px;">
            <span style="width: 110px;">Group</span>
            <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
              <el-input v-model="form.group" placeholder="Input"></el-input>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="df df-jcfe" style="width: 96%;">
      <div class="center btn-blue" style="width: 160px; height: 40px;">Save</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      fileList: [],
    }
  },
  created() {

  },
  methods: {
    saveImage() {

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
