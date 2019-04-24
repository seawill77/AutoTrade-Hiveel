<template>
  <main>
    <section class="bottomline-grey center bg-white" style="margin-bottom: 30px; ">
      <div class="df df-jcsb df-aic df-wrap" style="width: 96%;">
        <div class="df df-aic f-t1" style="height: 60px;">Setting</div>
      </div>
    </section>
    <me></me>
    <role/>
  </main>
</template>
<script>
import me from '@/view/setting/me'
import role from '@/view/setting/role'
export default {
  data() {
    return {
    }
  },
  computed: {
  },
  components: { me, role },
  mounted() {

  },
  methods: {

  },

}
</script>
<style scoped>
</style>
