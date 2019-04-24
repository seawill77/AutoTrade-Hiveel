<template>
  <div class="border-grey bg-white" style="margin-bottom: 30px; width: 96%;">
    <div>
      <div class="bottomline-grey" style="margin-bottom: 20px;">
        <div style="margin: 20px 30px;">
          <span class="f-t2">Quote</span>
        </div>
      </div>
      <div style="margin: 0 30px;">
        <div class="df df-jcsb df-wrap">
          <div class="df df-aic" style="margin-bottom: 20px; width: 48%; min-width: 250px; height: 40px;">
            <div style="margin-right: 15px; width: 85px;">Service Date</div>
            <div style="flex: 1; height: 40px;">
              <el-date-picker style="width: 100%;" v-model="issue.date" type="date" placeholder="Pick a day"></el-date-picker>
            </div>
          </div>
          <div class="df df-aic" style="margin-bottom: 20px; width: 48%; min-width: 250px; height: 40px;">
            <div style="margin-right: 15px; width: 85px;">Service Task</div>
            <div style="flex: 1; height: 40px;">
              <el-select style="width: 100%;" v-model="issue.name" placeholder="Select">
                <el-option v-for="exam in examList" :key="exam.id" :label="exam.name" :value="exam.name"></el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="df df-aic" style="margin-bottom: 30px; width: 100%;">
          <div style="margin-right: 15px; width: 85px;">Service Note</div>
          <div class="border-grey center" style="flex: 1; height: 70px;">
            <textarea style="padding:2px 10px; width: 100%; height: 60px; border: 0; font-size: 14px; resize: none; outline: 0;" v-model="issue.content"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="bottomline-grey" style="margin-bottom: 20px;">
        <div class="df df-jcsb df-aic" style="margin: 20px 30px;">
          <span class="f-t2">Line Item</span>
          <span class="df df-aic pointer" @click="addQuote"><img src="@/assets/img/addItem.png" style="margin-right: 15px; width: 28px; height: 28px;" alt="">Add Item</span>
        </div>
      </div>
      <div class="bottomline-grey" style="margin: 0 0 30px 30px;">
        <div style="margin-right: 30px;">
          <div class="df" style="margin-bottom: 20px; width: 100%;">
            <div style="flex: 1;">Item</div>
            <div class="df df-jcsb itemContent" style="flex: 1;">
              <div style="flex: 1; text-align: right;">Labor</div>
              <div style="flex: 1; text-align: right;">Parts</div>
              <div style="flex: 1; text-align: right;">Subtotal</div>
              <div style="margin-left: 10px; width: 16px; height: 16px"></div>
            </div>
          </div>
          <div v-for="(quote, i) in quoteList" :key="i" class="df df-aic" style="margin-bottom: 20px; width: 100%;">
            <div style="flex: 1; height: 40px;">
              <div class="border-grey" style="width: 50%; height: 40px;">
                  <div class="df df-dfsb df-aic" style="margin: 0 10px; height: 40px;">
                    <input style="width: 100%; height: 25px; border: 0; font-size: 14px;" type="text" v-model="quote.name">
                  </div>
              </div>
            </div>
            <div class="df df-jcsb df-aic itemContent" style="flex: 1;">
              <div class="df df-jcfe" style="flex: 1;">
                <div class="border-grey" style="width: 90%;">
                  <div class="df df-dfsb df-aic" style="margin: 0 10px; height: 40px;">
                    <div style="width: 8px;">$</div>
                    <input style="width: 100%; height: 25px; border: 0; font-size: 14px; text-align: right;" type="number" v-model="quote.labor" @keyup="changeLabor">
                  </div>
                </div>
              </div>
              <div class="df df-jcfe" style="flex: 1;">
                <div class="border-grey" style="width: 90%;">
                  <div class="df df-dfsb df-aic" style="margin: 0 10px; height: 40px;">
                    <div style="width: 8px;">$</div>
                    <input style="width: 100%; height: 25px; border: 0; font-size: 14px; text-align: right;" type="number" v-model="quote.part" @keyup="changePart">
                  </div>
                </div>
              </div>
              <div class="df df-jcfe" style="flex: 1;">
                <div class="border-grey" style="width: 90%;">
                  <div class="df df-dfsb df-aic" style="margin: 0 10px; height: 40px;">
                    <span style="width: 8px;">$</span>
                    <span v-if="quote.labor && quote.part" style="flex: 1; text-align: right;">{{(parseInt(quote.labor)+parseInt(quote.part)) | number}}</span>
                  </div>
                </div>
              </div>
              <div class="pointer" style="margin-left: 10px; width: 16px; height: 16px" @click="deleteQuote(i)">
                <img src="@/assets/img/trash.png" alt="" style="width: 16px;">
              </div>
            </div>
            <div  class="df-aic itemNewContent" style="flex: 1;">
              <div  style="width: 100%;">
                <div class="border-grey" style="margin-bottom: 10px; width: 100%; height: 40px;">
                  <div class="df df-dfsb df-aic" style="margin: 0 10px; height: 40px;">
                    <div style="width: 8px;">$</div>
                    <input style="width: 100%; height: 25px; border: 0; font-size: 14px; text-align: right;" type="number" v-model="quote.labor" @keyup="changeLabor">
                  </div>
                </div>
                <div class="border-grey" style="margin-bottom: 10px; width: 100%; height: 40px;">
                  <div class="df df-dfsb df-aic" style="margin: 0 10px; height: 40px;">
                    <div style="width: 8px;">$</div>
                    <input style="width: 100%; height: 25px; border: 0; font-size: 14px; text-align: right;" type="number" v-model="quote.part" @keyup="changePart">
                  </div>
                </div>
                <div class="border-grey" style="margin-bottom: 10px; width: 100%; height: 40px;">
                  <div class="df df-dfsb df-aic" style="margin: 0 10px; height: 40px;">
                    <span style="width: 8px;">$</span>
                    <span v-if="quote.labor && quote.part" style="flex: 1; text-align: right;">{{(parseInt(quote.labor)+parseInt(quote.part)) | number}}</span><span v-else class="c-grey" style="flex: 1; text-align: right;" >Subtotal</span>
                  </div>
                </div>
              </div>
              <div style="margin-left: 10px; width: 16px; height: 16px">
                <img src="@/assets/img/trash.png" alt="" style="width: 16px;">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="df df-jcfe" style="margin: 0 30px;">
        <div class="df df-column df-aic" style="width: 100%; max-width: 310px;">
          <div class="df df-aic" style="margin-bottom: 20px;">
            <span style="margin-right: 20px; width: 42px;">Labor:</span>
            <div class="border-grey bg-grey df df-jcsa df-aic" style='width: 160px; height: 40px;'>
              <div class="df df-jcsb" style="width: 90%;">
                <span>$</span>
                <span>{{totalLabor}}</span>
              </div>
            </div>
          </div>
          <div class="df df-aic" style="margin-bottom: 20px;">
            <span style="margin-right: 20px; width: 42px;">Parts:</span>
            <div class="border-grey bg-grey df df-jcsa df-aic" style='width: 160px; height: 40px;'>
              <div class="df df-jcsb" style="width: 90%;">
                <span>$</span>
                <span>{{totalPart}}</span>
              </div>
            </div>
          </div>
          <div class="df df-aic" style="margin-bottom: 20px;">
            <span style="margin-right: 20px; width: 42px;">Tax:</span>
            <div class="border-grey df df-jcsa df-aic" style='width: 160px; height: 40px;'>
              <div class="df df-jcsb df-aic" style="width: 90%;">
                <span>%</span>
                <input style="width: 100px; height: 25px; border: 0; font-size: 14px; text-align: right;" type="number" v-bind:value="taxShow" v-on:input="changTax">
              </div>
            </div>
          </div>
          <div class="bottomline-grey" style="margin-bottom: 20px; width: 100%;"></div>
          <div class="df df-aic" style="margin-bottom: 20px;">
            <span style="margin-right: 20px; width: 42px;">Total:</span>
            <div class="border-grey bg-grey df df-jcsa df-aic" style='width: 160px; height: 40px;'>
              <div class="df df-jcsb" style="width: 90%;">
                <span>$</span>
                <span>{{total}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      taxShow: 0,
      totalLabor: 0,
      totalPart: 0,
    }
  },
  computed: {
    issue() { return this.$store.state.issue.detail },
    quoteList() { return this.$store.state.issue.quote.list },
    me() { return this.$store.state.me },
    examList() { return this.$store.state.exam.list },
  },
  created() {
    this.loadExam()
  },
  mounted() {
    this.getTaxAndTotal()
    this.changeLabor()
    this.changePart()
    this.taxShow = this.issue.tax * 100
  },
  methods: {
    getTaxAndTotal() {
      this.total = 0
      this.quoteList.forEach(e => {
        this.total += parseInt(e.labor || 0) + parseInt(e.part || 0)
      })
      this.total += this.total * this.issue.tax
    },
    loadExam() {
      this.$store.dispatch('exam/load', { type: 'ISSUE' })
    },
    addQuote() {
      this.quoteList.push({})
    },
    changTax(event) {
      this.taxShow = event.target.value
      this.issue.tax = event.target.value / 100
      this.getTaxAndTotal()
    },
    deleteQuote(i) {
      this.quoteList.splice(i, 1)
      this.getTaxAndTotal()
      this.changeLabor()
      this.changePart()
    },
    changeLabor() {
      this.totalLabor = 0
      this.quoteList.forEach(e => {
        this.totalLabor += parseInt(e.labor || 0)
      })
      this.getTaxAndTotal()
    },
    changePart() {
      this.totalPart = 0
      this.quoteList.forEach(e => {
        this.totalPart += parseInt(e.part || 0)
      })
      this.getTaxAndTotal()
    },
  },
}
</script>
<style scoped>
.detail {
  width: 49%;
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
