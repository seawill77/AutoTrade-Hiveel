<template>
  <article class="border-grey bg-white" style="margin-bottom: 30px; width: 96%;">
    <div style="margin-bottom: 30px;">
      <div class="bottomline-grey" style="margin-bottom: 20px;">
        <div class="df df-jcsb df-aic" style="margin: 20px 30px;">
          <span class="f-t2">Service Details</span>
          <span class="pointer" @click="changeEditStatus">Edit</span>
        </div>
      </div>
      <div style="margin: 0 30px;">
        <div class="df df-jcsb" style='margin-bottom: 20px;'>
          <span>Service Date</span>
          <span>{{issue.date}}</span>
        </div>
        <div class="df df-jcsb" style='margin-bottom: 20px;'>
          <span>Service Task</span>
          <span>{{issue.name}}</span>
        </div>
        <div class="df df-jcsb">
          <span>Service Note</span>
          <span style="width: 50%; max-width: 450px; text-align: right; text-wrap: wrap;">{{issue.content}}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="bottomline-grey" style="margin-bottom: 20px;">
        <div style="margin: 20px 30px;">
          <span class="f-t2">Line Item</span>
        </div>
      </div>
      <div class="bottomline-grey" style="margin: 0 0 30px 30px;">
        <div style="margin-right: 30px;">
          <div class="df" style="margin-bottom: 20px;">
            <div style="flex: 1;">Item</div>
            <div class="df" style="flex: 1; text-align: right;">
              <div style="margin-left: 10px; flex: 1; min-width: 55px;">Labor</div>
              <div style="margin-left: 10px; flex: 1; min-width: 55px;">Parts</div>
              <div style="margin-left: 10px; flex: 1; min-width: 55px;">SubTotal</div>
            </div>
          </div>
          <div v-for="(quote, i) in quoteList" :key="i" class="df" style="margin-bottom: 20px;">
            <div style="flex: 1;">{{quote.name}}</div>
            <div class="df" style="flex: 1; text-align: right;">
              <div style="margin-left: 10px; flex: 1; min-width: 55px;">${{quote.labor}}</div>
              <div style="margin-left: 10px; flex: 1; min-width: 55px;">${{quote.part}}</div>
              <div style="margin-left: 10px; flex: 1; min-width: 55px;">${{quote.labor + quote.part}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="df df-jcfe" style="margin: 0 30px 40px;">
        <div style="width: 180px;">
          <div class="df df-jcsb df-rr" style="margin-bottom: 20px; width: 100%;">
            <span>${{tax | number}}({{issue.tax*100}}%)</span><span>Tax</span>
          </div>
          <div class="df df-jcsb df-rr" style="width: 100%;">
            <span>${{total | number}}</span><span>Total</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      tax: 0,
      total: 0,
    }
  },
  computed: {
    issue() { return this.$store.state.issue.detail },
    quoteList() { return this.$store.state.issue.quote.list },
    me() { return this.$store.state.me },
  },
  mounted() {
    this.getTaxAndTotal()
  },
  methods: {
    getTaxAndTotal() {
      this.total = 0
      this.quoteList.forEach(e => {
        this.total += parseInt(e.labor || 0) + parseInt(e.part || 0)
      })
      this.tax = this.total * this.issue.tax
      this.total += this.tax
    },
    changeEditStatus() {
      this.$store.dispatch('issue/changeEditStatus', true)
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
