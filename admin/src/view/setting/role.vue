<template>
  <div>
    <article class="center" style="margin-bottom: 30px;">
      <div style="margin: 0 auto; width: 96%;">
        <article class="bg-white border-grey" style="margin-bottom: 30px;">
          <div class="bottomline-grey" style="margin-bottom: 30px;">
            <section class="df df-jcsb df-aic" style="margin: 0 auto; width: 85%; height: 60px;">
              <div class="f-t2">Role & Vehicles Group Management</div>
              <div class="df df-jcfe" style="width: 100px; ">
                <div class="pointer c-blue" style="height: 100%;">Save</div>
              </div>
            </section>
          </div>
          <div style="margin: 0 auto; width: 85%;">
            <div class="bottomline-grey" style="margin-bottom: 20px;">
              <section class="df df-jcsb df-aic" style="height: 40px;">
                <div class="f-c1">Role Management</div>
                <div class="df df-jcfe" style="width: 150px; ">
                  <div class="pointer c-blue" style="height: 100%;" @click="modalOn('personGroup')">Add Custom Role</div>
                </div>
              </section>
            </div>
            <div class="df df-wrap" style="margin-bottom: 20px;">
              <article v-for="(e, i) in personGroupList" :key="i" class="df df-jcsa df-aic" style="margin-right: 20px; margin-bottom: 10px; width: 120px; height: 40px; border-radius: 3px; background: #daebff;">
                <div class="df df-jcsb" style="width: 90%;">
                  <span class="ellipsis" style="max-width: 100px;">{{e.name}}</span>
                  <img src="@/assets/img/tagRemover.png" class="pointer" style="width: 14px; height: 14px;" @click="deletePersonGroup(e)"/>
                </div>
              </article>
            </div>
            <div class="bottomline-grey" style="margin-bottom: 20px;">
              <section class="df df-jcsb df-aic" style="height: 40px;">
                <div class="f-c1">Role Management</div>
                <div class="df df-jcfe" style="width: 150px; ">
                  <div class="pointer c-blue" style="height: 100%;" @click="modalOn('vehicleGroup')">Add Vehicle Group</div>
                </div>
              </section>
            </div>
            <div class="df df-wrap" style="margin-bottom: 20px;">
              <article v-for="(e, i) in vehicleGroupList" :key="i" class="df df-jcsa df-aic" style="margin-right: 20px; margin-bottom: 10px; width: 120px; height: 40px; border-radius: 3px; background: #daebff;">
                <div class="df df-jcsb" style="width: 90%;">
                  <span class="ellipsis" style="max-width: 100px;">{{e.name}}</span>
                  <img src="@/assets/img/tagRemover.png" class="pointer" style="width: 14px; height: 14px;" @click="deleteVehicleGroup(e)"/>
                </div>
              </article>
            </div>
            <div class="bottomline-grey" style="margin-bottom: 30px; width: 100%;"></div>
          </div>
        </article>
      </div>
    </article>
    <modal>
      <article v-if="modal === 'personGroup'" slot="v" class="bg-white" style="width: 80%; max-width: 1150px; height: 85%; max-height: 850px; border-radius: 4px; overflow-y: scroll;">
        <div class="bottomline-grey df df-jcfe " style="margin-bottom: 30px; width: 100%; height: 56px;">
          <section class="df df-jcsb df-aic" style="width: 90%;">
            <span class="f-t2">Add New Role</span>
            <i class="c-grey pointer el-icon-close" style="margin-right: 40px; font-size: 20px; font-weight:700;" @click="offSave"></i>
          </section>
        </div>
        <el-form class="" style="margin: 0 auto; width: 80%; " :model="personGroupForm" :rules="rules" ref="personGroupForm" @submit.native.prevent>
          <section class="df" style="">
            <div class="df df-aic" style="width: 120px; height: 40px;">Name</div>
            <el-form-item style="width: 300px;" prop="name"><el-input v-model="personGroupForm.name" placeholder="Person Group Name"></el-input></el-form-item>
          </section>
          <div class="bottomline-grey df " style="width: 100%; height: 56px;">
            <section class="df df-jcsb df-aic" style="">
              <span class="f-t2">Permissions Set</span>
            </section>
          </div>
          <div class="bottomline-grey df df-column" style="width: 100%; height: 50px;">
            <section class="df df-jcsb df-aic" style="width: 96%; height: 50px;">
              <div class="c-grey" style="margin-right: 50px; flex: 1;">Module Permissions</div>
              <div class="c-grey" style="flex: 1; max-width: 350px;">Access</div>
            </section>
          </div>
          <div style="margin-bottom: 30px;">
            <article v-for="(e, i) in authList" :key="i" class="bottomline-grey">
              <div class="df df-aic tableContent " style="width: 96%; height: 50px;">
                <div style="margin-right: 50px; flex: 1;">{{e.name}}</div>
                <div style="flex: 1; max-width: 350px; height: 100%;">
                  <div class="df df-jcsb" style="flex: 1; height: 100%; ">
                    <div v-if="e.accessList.length < 3" class="df df-aic" style="width: 80px; height: 100%;"></div>
                    <label v-for="(access, ai) in e.accessList" :key="ai" class="df df-aic" style="width: 80px; height: 100%;">
                      <el-radio v-model="personGroupForm[e.label]" :label="access.value">{{access.name}}</el-radio>
                    </label>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <section class="df df-jcfe" style="margin-bottom: 30px; width: 100%;">
            <div v-if="loading" class="center" style="width: 160px;"><loading style="width: 40px; height: 40px;"/></div>
            <button v-else class="btn-blue f-t2" style="width: 160px; height: 40px;" @click="savePersonGroup">Save</button>
          </section>
        </el-form>
      </article>

      <article v-if="modal === 'vehicleGroup'" slot="v" class="bg-white" style="width: 80%; max-width: 1150px; height: 85%; max-height: 360px; border-radius: 4px; overflow-y: scroll;">
        <div class="bottomline-grey df df-jcfe " style="margin-bottom: 30px; width: 100%; height: 56px;">
          <section class="df df-jcsb df-aic" style="width: 90%;">
            <span class="f-t2">Add New Vehicles Group</span>
            <i class="c-grey pointer el-icon-close" style="margin-right: 40px; font-size: 20px; font-weight:700;" @click="offSave"></i>
          </section>
        </div>
        <el-form class="" style="margin: 0 auto; width: 80%; " :model="vehicleGroupForm" :rules="rules" ref="vehicleGroupForm" @submit.native.prevent>
          <section class="df" style="">
            <div class="df df-aic" style="width: 120px; height: 40px;">Name</div>
            <el-form-item style="width: 300px;" prop="name"><el-input v-model="vehicleGroupForm.name" placeholder="Vehicle Group Name"></el-input></el-form-item>
          </section>
          <section class="df" style="margin-bottom: 30px;">
            <div class="df df-aic" style="width: 120px; height: 40px;">Description</div>
            <div style="flex: 1;"><el-input :autosize="{ minRows: 3, maxRows: 5}" type="textarea" v-model="vehicleGroupForm.content"></el-input></div>
          </section>
          <section class="bottomline-grey df" style="margin-bottom: 30px;">
          </section>
          <section class="df df-jcfe" style="margin-bottom: 30px; width: 100%;">
            <div v-if="loading" class="center" style="width: 160px;"><loading style="width: 40px; height: 40px;"/></div>
            <button v-else class="btn-blue f-t2" style="width: 160px; height: 40px;" @click="saveVehicleGroup">Save</button>
          </section>
        </el-form>
      </article>
    </modal>
  </div>
</template>
<script>
import loading from '@/component/loading'
import modal from '@/component/modal/index'
export default {
  data() {
    return {
      loading: false,
      form: {},
      rules: {
        name: [ { required: true } ],
      },
      authList: [
        { name: 'Dashboard', label: 'dashboard', accessList: [{ name: 'Edit', value: 'EDIT' }, { name: 'View', value: 'VIEW' }, { name: 'None', value: 'NULL' }] },
        { name: 'Inspection', label: 'inspection', accessList: [{ name: 'Edit', value: 'EDIT' }, { name: 'View', value: 'VIEW' }, { name: 'None', value: 'NULL' }] },
        { name: 'Issues', label: 'issue', accessList: [{ name: 'Edit', value: 'EDIT' }, { name: 'View', value: 'VIEW' }, { name: 'None', value: 'NULL' }] },
        { name: 'Service Management', label: 'exam', accessList: [{ name: 'Edit', value: 'EDIT' }, { name: 'View', value: 'VIEW' }, { name: 'None', value: 'NULL' }] },
        { name: 'Vehicle Management', label: 'vehicle', accessList: [{ name: 'Edit', value: 'EDIT' }, { name: 'View', value: 'VIEW' }, { name: 'None', value: 'NULL' }] },
        { name: 'User Management', label: 'person', accessList: [{ name: 'Edit', value: 'EDIT' }, { name: 'View', value: 'VIEW' }, { name: 'None', value: 'NULL' }] },
        { name: 'Finacial Center', label: 'invoice', accessList: [{ name: 'Edit', value: 'EDIT' }, { name: 'View', value: 'VIEW' }, { name: 'None', value: 'NULL' }] },
        { name: 'Setting', label: 'setting', accessList: [{ name: 'Edit', value: 'EDIT' }, { name: 'View', value: 'VIEW' }, { name: 'None', value: 'NULL' }] },
        { name: 'Notification', label: 'notification', accessList: [{ name: 'View', value: 'VIEW' }, { name: 'None', value: 'NULL' }] },
      ],
      modal: '',
      vehicleGroupForm: { },
      personGroupForm: { },
    }
  },
  computed: {
    personGroupList() { return this.$store.state.personGroup.list },
    vehicleGroupList() { return this.$store.state.vehicleGroup.list },
  },
  components: { modal, loading },
  created() {
    this.loadVehicleGroupList()
    this.loadPersonGroupList()
  },
  methods: {
    modalOn(v) {
      this.modal = v
      this.$store.dispatch('modal/on')
    },
    offSave() {
      this.$store.dispatch('modal/off')
    },
    loadVehicleGroupList() {
      this.$store.dispatch('vehicleGroup/load')
    },
    deleteVehicleGroup(e) {
      Promise.all([this.$store.dispatch('vehicleGroup/delete', { id: e.id }), this.loadVehicleGroupList()])
    },
    saveVehicleGroup() {
      this.$refs.vehicleGroupForm.validate(async valid => {
        if (!valid) return
        this.loading = true
        await Promise.all([this.$store.dispatch('vehicleGroup/save', this.vehicleGroupForm), this.$wait(1000)])
        this.loading = false
        this.offSave()
      })
    },

    loadPersonGroupList() {
      this.$store.dispatch('personGroup/load')
    },
    deletePersonGroup(e) {
      Promise.all([this.$store.dispatch('personGroup/delete', { id: e.id }), this.loadPersonGroupList()])
    },
    savePersonGroup() {
      this.$refs.personGroupForm.validate(async valid => {
        if (!valid) return
        this.loading = true
        await Promise.all([this.$store.dispatch('personGroup/save', this.personGroupForm), this.$wait(1000)])
        this.loading = false
        this.offSave()
      })
    },
  },

}
</script>
<style scoped>
</style>
<style>
::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}
</style>
