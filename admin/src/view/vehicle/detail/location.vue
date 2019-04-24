<template>
  <section class="center df-column" style="margin-bottom: 30px; width: 100%;">
    <div class="border-grey" style="margin-bottom: 30px; width: 96%; height: 300px;"></div>
    <div class="border-grey bg-white" style="width: 96%; max-height: 770px;">
      <div class="df df-jcsa df-aic bottomline-grey f-t2" style="height: 56px;"><span style="width: 96%;">Issues History Forms</span></div>
      <dataTableTitle :columnList="columnList" :edit="true"></dataTableTitle>
      <div style="width: 100%;">
        <article class="bottomline-grey df df-jcfe" v-for="(e, i) in locationList" :key="i">
          <section class="df df-aic" style="width: 96%; height: 48px;">
            <div :class="{smallHidden: columnList[0].smallHidden}" :style="{flex: columnList[0].flex}">{{e.date}}</div>
            <div :class="{smallHidden: columnList[1].smallHidden}" :style="{flex: columnList[1].flex}">{{`${e.location.lat}, ${e.location.log}`}}</div>
            <div :class="{smallHidden: columnList[2 ].smallHidden}" :style="{flex: columnList[2].flex}">{{e.source}}</div>
            <div class="center" style="width: 50px; height: 100%;"><i class="el-icon-more"  style="transform: rotate(90deg);"></i></div>
          </section>
        </article>
      </div>
      <div class="df df-jcsa df-aic" style="width: 100%; height: 77px;">
        <dataTablePage name="Vehicle" :page="page" :goPage="goPage" style="width: 90%"></dataTablePage>
      </div>
    </div>
  </section>
</template>

<script>
import dataTableTitle from '@/component/dataTable/title'
import dataTablePage from '@/component/dataTable/page'
export default {
  data() {
    return {
      locationList: [
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
        { location: { lat: 34.071092, log: -117.923091 }, source: '#23 Issues', date: 'Thu Feb 12,2019' },
      ],
      columnList: [
        { name: 'Date', flex: 2 },
        { name: 'Location', flex: 3 },
        { name: 'Source', flex: 2, smallHidden: true },
      ],
      page: { curr: 10, max: 0 },
    }
  },
  components: { dataTableTitle, dataTablePage },
  methods: {
    goPage(i) {
    },
  },
}
</script>

<style>

</style>
