<template>
  <div class="bottomline-grey df df-jcfe" style="">
    <section class="df df-aic" style="height: 48px;" :style="{width: width ? width : '96%'}">
      <div class="f-c1 column c-grey " :class="{smallHidden: e.smallHidden}" :style="{flex: columnList[i].flex}" v-for="(e, i) in columnList" :key="'column'+i">
        {{columnList[i].name}}
      </div>
      <div v-if="edit" style="width: 50px; height: 100%;"></div>
    </section>
  </div>
</template>
<script>
export default {
  props: ['columnList', 'edit', 'width'],
}
</script>
<style>
.column {
  width: 0;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
}
.row {
  cursor: pointer;
}
.row:hover {
  background: #e8f4fd;
}
@media screen and (max-width: 768px) {
  .smallHidden {
    display: none;
  }
}
</style>
