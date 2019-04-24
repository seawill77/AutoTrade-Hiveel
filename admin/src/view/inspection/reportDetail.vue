<template>
  <div>
    <section class="center bottomline-grey bg-white" style="margin-bottom: 30px; width: 100%; height: 55px;">
      <div class="df df-jcsb df-aic" style="width: 96%;">
        <div>
          <span class="c-grey">Inspection</span>&nbsp;<span>/ [218] 2018 FordF - 150 / Issue #243</span>
        </div>
      </div>
    </section>
    <section class="center df-column">
      <div class="df df-jcsb df-wrap" style="margin-bottom: 10px; width: 96%;">
        <div class="border-grey bg-white" style="margin-bottom: 20px; width: 100%;">
          <div class="bottomline-grey" style="margin-bottom: 20px;">
            <div class="f-t2" style="margin: 20px 30px;">Issues Details</div>
          </div>
          <div class="df df-jcsb df-wrap" style="margin: 0 30px;">
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span>Vehicle</span>
              <span>[218] 2017 FordF-150</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span>Reported Date</span>
              <span>03:20PM 21.Jan</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span>Odometer</span>
              <span>56,450mi</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span>Assigned To</span>
              <span>Willie NewTon</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span>Assigned To</span>
              <span>Willie NewTon</span>
            </div>
          </div>
        </div>
      </div>
      <div class="df df-jcsb df-wrap" style="margin-bottom: 10px; width: 96%;">
        <div class="border-grey bg-white" style="margin-bottom: 20px; width: 100%;">
          <div class="bottomline-grey" style="margin-bottom: 20px;">
            <div class="f-t2" style="margin: 20px 30px;">Issues Details</div>
          </div>
          <div class="df df-jcsb df-wrap" style="margin: 0 30px;">
            <div v-for="(e, i) in examList" :key="i" class="df df-jcsb df-aic" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="ellipsis" style="min-width: 50px;" >{{e.name}}</span>
              <div class="df df-jcsb" style="min-width: 180px;">
                <div class="df df-aic" style="width: 30px; height: 30px;">
                  <div v-if="e.message > 0" class="df df-jcsb" style="width: 100%;">
                    <img src="@/assets/img/message.png" alt="" style="width: 16px; height: 16px;">
                    <span>{{e.message}}</span>
                  </div>
                </div>
                <div class="df df-jcsb df-aic" style="width: 50px; height: 30px;">
                  <img v-if="e.status === 'Fail'" src="@/assets/img/fail_red.png" alt="" style="width: 16px; height: 16px;">
                  <img v-else src="@/assets/img/fail_grey.png" alt="" style="width: 16px; height: 16px;">
                  <span>Fail</span>
                </div>
                <div class="df df-jcsb df-aic" style="width: 55px; height: 30px;">
                  <img v-if="e.status === 'Pass'" src="@/assets/img/pass_green.png" alt="" style="width: 16px; height: 16px;">
                  <img v-else src="@/assets/img/pass_grey.png" alt="" style="width: 16px; height: 16px;">
                  <span>Pass</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-grey bg-white" style="margin-bottom: 30px; width: 96%;">
        <div style="margin-bottom: 30px;">
          <div class="bottomline-grey" style="margin-bottom: 20px;">
            <div style="margin: 20px 30px;">
              <span class="f-t2">Service Details</span>
            </div>
          </div>
        </div>
        <div style="margin-bottom: 20px;">
          <div v-for="(e, i) in taskList" :key="i" class="bottomline-grey" style="margin: 0 30px 30px;">
            <div class="f-t2" style="margin-bottom: 20px;">Service Task</div>
            <div style="margin-bottom: 30px;">{{e.name}}</div>
            <div class="f-t2" style="margin-bottom: 30px;">Line Item</div>
            <div class="df" style="margin-bottom: 20px; font-weight: 600;">
              <div style="flex: 1;">Item</div>
              <div class="df" style="flex: 1; text-align: right;">
                <div style="margin-left: 10px; flex: 1;">Labor</div>
                <div style="margin-left: 10px; flex: 1;">Parts</div>
                <div style="margin-left: 10px; flex: 1;">SubTotal</div>
              </div>
            </div>
            <div v-for="(a, index) in e.items" :key="index" class="df" style="margin-bottom: 20px;">
              <div style="flex: 1;">{{a.name}}</div>
              <div class="df" style="flex: 1; text-align: right;">
                <div style="margin-left: 10px; flex: 1;">${{a.labor | number}}</div>
                <div style="margin-left: 10px; flex: 1;">${{a.parts | number}}</div>
                <div style="margin-left: 10px; flex: 1;">${{(a.labor + a.parts)  | number}}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="df df-jcfe" style="margin: 0 30px 40px;">
            <div style="width: 180px;">
              <div class="df df-jcsb df-rr" style="margin-bottom: 20px; width: 100%;">
                <span>#35(10.0%)</span><span>Tax</span>
              </div>
              <div class="df df-jcsb df-rr" style="width: 100%;">
                <span>${{total | number}}</span><span>Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="df df-jcsa" style="margin-bottom: 40px; width: 100%;">
        <div class="df df-jcfe" style="width: 96%;">
          <div class="center btn-blue" style="width: 160px; height: 40px;">Comfirmed</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quote: [
        { name: 'Rotate Tires', 'labor': 10.0, 'part': 200.00 },
        { name: 'Rotate Tires', 'labor': 10.0, 'part': 200.00 },
        { name: 'Rotate Tires', 'labor': 10.0, 'part': 200.00 },
      ],
      examList: [
        { name: 'Engine', value: 'engine', status: 'Pass', message: 1 },
        { name: 'Service Brakes', value: 'brakes', status: 'Fail', message: 0 },
        { name: 'Cluth', value: 'cluth', status: 'Pass', message: 0 },
        { name: 'Coupling Devices', value: 'device', status: 'Fail', message: 0 },
        { name: 'Streering Mechanism', value: 'streer', status: 'Pass', message: 2 },
        { name: 'Tires', value: 'tires', status: 'Pass', message: 0 },
        { name: 'Engine', value: 'engine', status: 'Pass', message: 1 },
        { name: 'Service Brakes', value: 'brakes', status: 'Fail', message: 0 },
        { name: 'Cluth', value: 'cluth', status: 'Pass', message: 0 },
        { name: 'Coupling Devices', value: 'device', status: 'Fail', message: 0 },
        { name: 'Streering Mechanism', value: 'streer', status: 'Pass', message: 2 },
        { name: 'Tires', value: 'tires', status: 'Pass', message: 2 },
        { name: 'Engine', value: 'engine', status: 'Pass', message: 1 },
        { name: 'Service Brakes', value: 'brakes', status: 'Fail', message: 0 },
        { name: 'Cluth', value: 'cluth', status: 'Pass', message: 0 },
        { name: 'Coupling Devices', value: 'device', status: 'Fail', message: 5 },
        { name: 'Streering Mechanism', value: 'streer', status: 'Pass', message: 2 },
        { name: 'Tires', value: 'tires', status: 'Pass', message: 0 },
      ],
      taskList: [
        { name: 'Engine', items: [{ name: 'Engine bump', labor: 24, parts: 0 }] },
        { name: 'Streering', items: [{ name: 'Rotate Tires', labor: 100, parts: 20 }] },
        { name: 'Light', items: [{ name: 'Front Light', labor: 24, parts: 40 }] },
      ],
      total: 0,
    }
  },
  mounted() {
    this.getTotal()
  },
  methods: {
    getTotal() {
      this.total = 0
      this.taskList.forEach(e => {
        e.items.forEach(a => {
          this.total += a.labor + a.parts
        })
      })
    },
  },
}
</script>
<style scoped>

.itemNewContent {
  display: none;
}

@media screen and (max-width: 768px){
  .itemNewContent {
    display: flex;
  }
  .itemContent {
    display: none;
  }
}
</style>
