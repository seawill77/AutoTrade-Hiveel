<template>
  <div>
    <section class="border-grey bg-white" style="margin-bottom: 30px;">
      <div class="df df-jcsb df-aic df-wrap f-c" style="margin: 0 auto; width: 96%; height: 60px;">
        <div><span class="c-grey">Membership Billing&nbsp;&nbsp;/</span>&nbsp;&nbsp;#123456789</div>
        <div><button class="btn-green f-c" style="width: 200px; height: 40px;" @click="print()">Export PDF</button></div>
      </div>
    </section>
    <section class="bg-white" style="margin: 0 auto; width: 85%">
      <div style="margin: 0 auto; width: 95%;">
        <div class="df df-jcsb df-wrap">
          <article>
            <div class="f-t2" style="margin: 30px auto 20px">Hiveel Technologies, INC</div>
            <div class="df df-wrap" style="margin-bottom: 20px; width: 60%;">1050 Lakes Drive, Suite 210 West Covina, CA, 91790</div>
            <div class="df df-aic" style="height: 30px;">AutoSav</div>
          </article>
          <article class="df df-column df-aife">
            <div class="bold" style="margin: 30px 0 10px; font-size: 32px;">INVOICE</div>
            <div class="df df-column df-aife" style="margin-bottom: 30px;">
              <div style="margin-bottom: 10px;">Invoice Number: H123456789</div>
              <div style="margin-bottom: 10px;">Invoice Date: 09/03/2019</div>
              <div>Due Date: 09/03/2019</div>
            </div>
          </article>
        </div>

        <div id="printContent" style="width: 100%">
          <div class="bg-grey" style=""><dataTableTitle :columnList="columnList" :edit='true'></dataTableTitle></div>
          <article class="bottomline-grey df df-jcfe">
            <section class="df df-aic c-grey" style="width: 96%; height: 48px;">
              <div :class="{smallHidden: columnList[0].smallHidden}" class="column" :style="{flex: columnList[0].flex}">.id}}</div>
              <div :class="{smallHidden: columnList[1].smallHidden}" class="column" :style="{flex: columnList[1].flex}">.date}}</div>
              <div :class="{smallHidden: columnList[2].smallHidden}" class="column" :style="{flex: columnList[2].flex}">.id}}</div>
              <div :class="{smallHidden: columnList[3].smallHidden}" class="column" :style="{flex: columnList[3].flex}">.id}}</div>
              <div :class="{smallHidden: columnList[4].smallHidden}" class="column" :style="{flex: columnList[4].flex}">$.date}}</div>
              <div class="center" style="width: 50px; height: 100%; visibility: hidden"><i class="el-icon-more" style="transform: rotate(90deg);"></i></div>
            </section>
          </article>
          <section class="df df-jcfe df-wrap f-t1" style="margin: 20px 0 10px; width: 90%; height: 60px;">
              <div style="width: 130px;">Total Amount</div>
              <div>$1,499</div>
          </section>
        </div>

      </div>
    </section>
  </div>
</template>
<script>
import dataTableTitle from '@/component/dataTable/title'
export default {
  data() {
    return {
      columnList: [
        { name: 'ITEM', flex: 1 },
        { name: 'DESCRIPTION', flex: 1 },
        { name: 'UNIT PRICE', flex: 1 },
        { name: 'QUANTITY', flex: 1 },
        { name: 'AMOUNT', flex: 1 },
      ],
    }
  },
  created() {
    this.loadExamById()
  },
  components: { dataTableTitle },
  computed: {
    invoice() { return this.$store.state.invoice.detail },
  },
  methods: {
    loadExamById() { this.$store.dispatch('invoice/loadExamById', { id: this.$route.params.id }) },
    print() {
      var printData = document.getElementById('printContent').innerHTML
      window.document.body.innerHTML = printData
      window.print()
    },
  },
  mounted() {
  },
}
</script>
<style scoped>

</style>
