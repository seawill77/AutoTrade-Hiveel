<template>
  <div>
    <tab :tabList="tabList" :active="$store.state.tab.invoice" :changeTab="changeTab" ></tab>
    <section class="bottomline-grey center bg-white">
      <div class="df df-aic" style="width: 96%;">
        <div class="df df-aic f-t1" style="height: 60px;">
          {{$store.state.tab.invoice==='1' ? 'Membership Billing' : 'Service Billing'}}
        </div>
      </div>
    </section>
    <platformInvoiceList v-if="$store.state.tab.invoice==='1'"></platformInvoiceList>
    <autoSaveInvoiceList v-if="$store.state.tab.invoice==='2'"></autoSaveInvoiceList>
  </div>
</template>
<script>
import tab from '@/component/tab'
import platformInvoiceList from '@/view/invoice/platformInvoiceList'
import autoSaveInvoiceList from '@/view/invoice/autoSaveInvoiceList'
export default {
  data() {
    return {
      title: [
        { k: '1', label: 'financial' },
      ],
      tabList: [
        { name: 'Membership Billing', key: '1' },
        { name: 'Service Billing', key: '2' },
      ],
    }
  },
  components: { tab, platformInvoiceList, autoSaveInvoiceList },
  methods: {
    changeTab(e) {
      this.$store.dispatch('tab/changeInvoice', e)
    },
  },

}
</script>
