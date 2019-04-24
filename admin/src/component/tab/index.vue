<template>
  <div class="bg-white df df-aic bottomline-grey">
    <div class="df df-wrap" style="margin: 0 auto; width: 96%;">
      <label class="center" style="margin-top: 10px; margin-right: 40px; justify-content: left; cursor: pointer;" v-for="(e, i) in tabList" :key="i">
        <input type="radio" v-model="now" :value="e.key" @change="changeTab(e.key)">
        <div>{{e.name}}</div>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tabList', 'active', 'changeTab'],
  data() {
    return {
      now: this.active,
    }
  },
  computed: {
  },
  components: {
  },
  created() {

  },
  mounted() {
  },
  methods: {
  },
}
</script>
<style scoped>
input[type=radio] {
  display: none;
}
input[type=radio] + div {
  padding-bottom: 10px;
  border-bottom: 2px solid transparent;
}
input[type=radio]:checked + div {
  border-bottom: 2px solid #4A90E2;
  color: #4A90E2;
}
</style>

<style>

</style>
