<template>
  <div>
    <section class="border-grey bg-white" style="margin-bottom: 20px;">
      <div class="c-grey df df-aic" style="width: 98%; height: 60px; margin: 0 auto">Inspection &nbsp;/&nbsp; Add &nbsp;<span class="c-black">New Report</span></div>
    </section>
    <section class="border-grey bg-white" style="width: 98%; margin: 0 auto 20px">
      <div class="bottomline-grey" style="margin-bottom: 20px">
        <div class="df df-aic f-t2" style="width: 96%; height: 60px; margin: 0 auto">Report Details</div>
      </div>
      <article style="width: 96%; margin: 0 auto">
        <div class="df df-wrap">
          <section class="df" style="margin-bottom: 20px; flex-basis: 480px" >
            <div class="df df-aic" style="width: 120px;">Vehicle:</div>
            <div style="flex-basis: 300px"><el-input v-model="form.vehicleId" placeholder="Vehicles/Name"></el-input></div>
          </section>
          <section class="df" style="margin-bottom: 20px; flex-basis: 480px">
            <div class="df df-aic" style="width: 120px;">Date:</div>
            <div style="flex-basis: 300px"><el-date-picker type="date" v-model="form.date" placeholder="Choose Date"></el-date-picker></div>
          </section>
        </div>
        <div class="df df-wrap">
          <section class="df" style="margin-bottom: 20px; flex-basis: 480px" >
            <div class="df df-aic" style="width: 120px;">Olemeter:</div>
            <div style="flex-basis: 300px"><el-input v-model="form.meter" placeholder="Olemeter"></el-input></div>
          </section>
          <section class="df" style="margin-bottom: 20px; flex-basis: 480px">
            <div class="df df-aic" style="width: 120px;">Assign to:</div>
            <div style="flex-basis: 300px"><el-input v-model="form.name" placeholder="Name"></el-input></div>
          </section>
        </div>
        <div class="df df-wrap" style="">
          <section class="df" style="margin-bottom: 20px; flex-basis: 480px" >
            <div class="df df-aic" style="width: 120px;">Status:</div>
            <div style="flex-basis: 300px">
              <el-select v-model="form.status" placeholder="Sort By">
                <el-option v-for="e in statusList" :key="e.value" :label="e.label" :value="e.value"></el-option>
              </el-select>
            </div>
          </section>
        </div>
      </article>
    </section>

    <article class="border-grey bg-white" style="width: 98%; margin: 0 auto 20px">
      <div class="bottomline-grey" style="margin-bottom: 20px">
        <section class="df df-jcsb df-aic" style="width: 96%; height: 60px; margin: 0 auto"><span class="f-t2">Inspection Items</span>
          <label class="df df-jcsb" style="width: 150px;">
            <input type="checkbox" style="height: 30px; width: 30px; border-radius: 50%;" v-model="checked" id="checkbox" @click="changeAll(checked)">
            <div class="center">Select all pass{{checked}}</div>
          </label>
        </section>
      </div>

      <article class="df df-jcsb df-wrap" style="margin: 0 30px;">
        <section v-for="(e, i) in examList" :key="i" class="df df-jcsb df-aic" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
          <span class="ellipsis" style="min-width: 150px;">{{e.name}}//////{{e.fail}}</span>
          <div class="df df-jcsb" style="min-width: 150px;">
            <label class="df df-jcsb df-aic pointer" style="width: 50px; height: 30px;" @click="onProblemRemarkModal(e)">
              <input style="display: none;" type="radio" v-model="e.fail" value="false">
              <img v-if="e.fail=='false'" src="@/assets/img/fail_red.png" alt="" style="width: 16px; height: 16px;">
              <img v-else src="@/assets/img/fail_grey.png" alt="" style="width: 16px; height: 16px;">
              <span>Fail</span>
            </label>

            <label class="df df-jcsb df-aic pointer" style="width: 55px; height: 30px;" @click="onProblemRemoveItem(e)">
              <input style="display: none;" type="radio" v-model="e.fail" value="true">
              <img v-if="e.fail=='true'"  src="@/assets/img/pass_green.png" alt="" style="width: 16px; height: 16px;">
              <img v-else src="@/assets/img/pass_grey.png" alt="" style="width: 16px; height: 16px;">
              <span>Pass</span>
            </label>
          </div>
        </section>
      </article>
    </article>

    <article v-show="form.problemList.length" class="border-grey bg-white" style="margin: 0 auto 20px; width: 98%">
      <section class="bottomline-grey" style="margin-bottom: 20px">
        <div class="df df-aic f-t2" style="width: 96%; height: 60px; margin: 0 auto">Quote</div>
      </section>

      <article v-for="(e, i) in form.problemList" :key="i" class="bottomline-grey" style="margin-bottom: 20px">
        <div class="bottomline-grey" style="margin: 0 auto 20px; width: 96%;">
          <section class="f-t2" style="margin-bottom: 20px">Service Task</section>
          <section style="margin-bottom: 20px">{{e.exam.name}}</section>
        </div>
        <div class="" style="margin: 0 auto; width: 96%;">
          <section class="f-t2 df df-jcsb df-wrap" style="margin-bottom: 20px">
            <div>Line Item</div>
            <div class="df df-aic df-jcsb" style="width: 120px" @click="addEmptyQuote(e)">
              <img src="@/assets/img/addItem.png" style="width: 28px; height: 28px;" alt="">
              <div>Add Item</div>
            </div>
          </section>
          <article class="df df-jcsb df-aic" style="margin-bottom: 30px;">
            <section >Item</section>
            <section class="df df-jcsb" style="flex-basis: 480px;">
              <div class="df df-jcfe" style="flex-basis: 120px;">Labor</div>
              <div class="df df-jcfe" style="flex-basis: 120px;">Parts</div>
              <div class="df df-jcfe" style="flex-basis: 160px; margin-right: 30px;">Subtotal</div>
            </section>
          </article>
          <!-- 动态增加item -->
          <article v-for="(quote, iq) in e.quoteList" :key="iq" class="df df-jcsb df-aic" style="margin-bottom: 30px;">
            <section class="df" style="flex-basis: 480px;">
            <div :prop="'addItemList.' + i + '.item'" style="flex-basis: 200px">
                <el-input v-model="quote.name" placeholder=" input the Item Name"></el-input>
              </div>
            </section>
            <section class="df df-jcsb" style="flex-basis: 480px;">
              <div :prop="'addItemList.' + i + '.labor'"  style="flex-basis: 120px">
                <el-input v-model="quote.labor" placeholder="$"></el-input>
              </div>
              <div :prop="'addItemList.' + i + '.part'" style="flex-basis: 120px">
                <el-input v-model="quote.part" placeholder="$"></el-input>
              </div>
              <div class="df df-jcfe df-aic" style="flex-basis: 180px">
                <div style="width: 120px" :prop="'addItemList.' + i + '.total'">
                  <el-input v-model="quote.total" placeholder="$"></el-input>
                </div>
                <div v-if="e.quoteList.length > 1" class="df df-jcfe" style="width: 30px;" @click="removeQuote(e, iq)">
                  <img src="@/assets/img/trash.png" alt="" style="width: 16px; height: 16px">
                </div>
              </div>
            </section>
          </article>

        </div>
      </article>

      <article style="margin: 0 auto 40px; width: 98%">
        <section class="df df-jcfe df-aic" style="margin-bottom: 20px; flex-basis: 200px;">
          <div style="width: 80px;">Labor:</div>
          <div style="flex-basis: 160px">
            <el-input v-model="form.totalLabor" placeholder="$"></el-input>
          </div>
          <div style="visibility: hidden; width: 30px"></div>
        </section>
        <section class="df df-jcfe df-aic" style="margin-bottom: 20px; flex-basis: 200px;">
          <div style="width: 80px;">Parts:</div>
          <div style="flex-basis: 160px">
            <el-input v-model="form.totalPart" placeholder="$"></el-input>
          </div>
          <div style="visibility: hidden; width: 30px"></div>
        </section>
        <section class="df df-jcfe df-aic" style="margin-bottom: 20px; flex-basis: 200px;">
          <div style="width: 80px;">Tax:</div>
          <div style="flex-basis: 160px">
            <el-input v-model="form.tax" placeholder="$"></el-input>
          </div>
          <div class="df df-jcfe" style="width: 30px">
          <img src="@/assets/img/fail_grey.png" alt="" style="width: 16px; height: 16px;">
          </div>
        </section>
        <section class="df df-jcfe" style="margin-bottom: 20px;">
          <div class="bottomline-grey" style="width: 300px;"></div>
        </section>
        <section class="df df-jcfe df-aic" style="margin-bottom: 20px; flex-basis: 200px;">
          <div style="width: 80px;">Total:</div>
          <div style="flex-basis: 160px">
            <el-input v-model="form.subtotal" placeholder="$"></el-input>
          </div>
          <div style="visibility: hidden; width: 30px"></div>
        </section>
      </article>
    </article>

    <article class="df" style="margin: 0 auto 30px; width: 98%;">
      <section class="df df-jcfe" style="width: 100%;">
        <button class="btn-blue f-t2" style="width: 160px; height: 40px;" type="button" @click="save">Submit</button>
      </section>
    </article>

    <modal>
      <article slot="v" class="bg-white border-grey" style="width: 80%; height: 250px; border-radius: 2px; box-shadow: #e8e8e8 0 2px 4px 0;">
        <section class="bottomline-grey" style="margin-bottom: 20px">
          <div class="df df-jcsb df-aic" style="margin: 0 auto; width: 96%; height: 60px">
            <div>Comment</div>
            <div class="pointer" @click="offProblemRemarkModal"><i class="el-icon-close"></i></div>
          </div>
        </section>
        <el-form :model="problemForm" :rules="rules" ref="problemForm" @submit.native.prevent>
          <el-form-item style="margin: 0 auto 20px; width: 96%;" prop="remark" >
            <el-input type="textarea" v-model="problemForm.remark" rows="4" size="medium"></el-input>
          </el-form-item>
        </el-form>
        <section class="df df-jcfe" style="margin: 0 auto; width: 96%">
          <button class="btn-blue f-t2" style="width: 160px; height: 40px;" type="button" @click="changeProblemRemark">OK</button>
        </section>
      </article>
    </modal>
  </div>
</template>
<script>
import modal from '@/component/modal'
export default {
  data() {
    var checkValid = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('This field is required'))
      }
      callback()
    }
    return {
      form: { problemList: [] },
      problemForm: {},
      statusList: [
        { value: '1', label: 'Pending' }, { value: '2', label: 'Quoted' }, { value: '3', label: 'Confirmed' },
        { value: '4', label: 'Scheduled' }, { value: '5', label: 'Completed' }, { value: '6', label: 'Overdue' },
      ],
      rules: {
        vehicleId: [ { required: true, message: 'This field is required', trigger: 'blur' } ],
        remark: [ { required: true, message: 'Please Input some detail about this item', trigger: 'blur' }, { validator: checkValid } ],
        item: [ { required: true, message: 'Required', trigger: 'blur' } ],
        labor: [ { required: true, message: 'Required', trigger: 'blur' } ],
      },
      checked: true,
    }
  },
  created() {
    this.load()
  },
  mounted() {
  },
  components: { modal },
  computed: {
    examList() { return this.$store.state.exam.list.map(e => { e.fail = 'true'; return e }) },
  },
  methods: {
    load() {
      this.$store.dispatch('exam/load')
    },
    save() {
      console.log(this.form)
    },
    onProblemRemarkModal(e) {
      this.problemForm = { exam: e }
      this.$store.dispatch('modal/on')
    },
    offProblemRemarkModal() {
      this.problemForm = {}
      this.$store.dispatch('modal/off')
    },
    changeProblemRemark() {
      this.$refs['problemForm'].validate((valid) => {
        if (!valid) {
          return false
        }
        let failExam = this.examList.find(e => e.id === this.problemForm.exam.id)
        let problem = { exam: failExam, remark: this.problemForm.remark, quoteList: [{}] }
        this.form.problemList.push(problem)
        this.offProblemRemarkModal()
      })
    },
    onProblemRemoveItem(e) {
      this.form.problemList.forEach((el, index) => {
        if (el.exam.id === e.id) {
          this.form.problemList.splice(index, 1)
        }
      })
    },
    removeQuote(problem, i) {
      problem.quoteList.splice(i, 1)
    },
    addEmptyQuote(problem) { problem.quoteList.push({ name: '', labor: '', part: '', total: 0 }) },
    changeAll(checked) {
      if (checked) {
        this.examList.forEach(e => { e.fail = 'true' })
        // this.examList.forEach(e => { e.fail = !e.fail })
        console.log(this.checked, this.examList)
      } else {
        this.examList.forEach(e => { e.fail = !e.fail })
        console.log(this.checked, 'else')
      }
    },
  },
}
</script>
<style scoped>
  .check-row {
    width: 50%;
  }
  .itemNewContent {
  display: none;
}

@media screen and (max-width: 768px){
  .detail {
    width: 100%;
  }
  .itemNewContent {
    display: flex;
  }
  .itemContent {
    display: none;
  }
}
@media screen and (max-width: 650px) {
  .aside {
    top: 0px;
  }
  .check-row {
    width: 100%;
  }
}
</style>
