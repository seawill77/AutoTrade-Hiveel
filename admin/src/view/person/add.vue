<template>
  <main>
    <section class="center bottomline-grey bg-white" style="margin-bottom: 30px; width: 100%; height: 55px;">
      <div class="df df-jcsb df-aic" style="width: 96%;">
        <div>
          <span class="c-grey">User Management</span>&nbsp;<span>/ Add New User</span>
        </div>
      </div>
    </section>

    <section class="center" style="margin-bottom: 30px;">
      <div class="df df-column df-jcsa df-aic border-grey bg-white" style="width: 96%;">
        <div class="center bottomline-grey" style="margin-bottom: 30px; width: 100%;">
          <div class="df df-aic f-t2" style="width: 80%; height: 56px;">
            Basic Information
          </div>
        </div>
        <div class="df df-jcsb df-column" style="width: 80%;">
          <div class="df df-wrap df-jcsb" style="width: 100%; max-width: 950px;">
            <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 20px; width: 100%; max-width: 425px;">
              <span style="width: 100px;">First Name</span>
              <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
                <el-input v-model="form.firstName" placeholder="First name"></el-input>
              </div>
            </div>
            <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 20px; width: 100%; max-width: 425px;">
              <span style="width: 100px;">Last Name</span>
              <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
                <el-input v-model="form.lastName" placeholder="Last name"></el-input>
              </div>
            </div>
          </div>
          <div class="df df-wrap df-jcsb" style="width: 100%; max-width: 950px;">
            <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 20px; width: 100%; max-width: 425px;">
              <span style="width: 100px;">Phone</span>
              <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
                <el-input v-model="form.phone" placeholder="phone"></el-input>
              </div>
            </div>
            <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 20px; width: 100%; max-width: 425px;">
              <span style="width: 100px;">Email</span>
              <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
                <el-input v-model="form.email" placeholder="email"></el-input>
              </div>
            </div>
          </div>
          <div class="df df-wrap df-jcsb" style="width: 100%; max-width: 950px;">
            <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 20px; width: 100%; max-width: 425px;">
              <span style="width: 100px;">Driver License</span>
              <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
                <el-input v-model="form.dl" placeholder="Driver license NO."></el-input>
              </div>
            </div>
            <div class="df df-jcsb df-aic df-wrap" style="margin-bottom: 20px; width: 100%; max-width: 425px;">
              <span style="width: 100px;">Role</span>
              <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
                <el-select v-model="form.role" placeholder="select a role">
                  <el-option v-for="e in roleList" :key="e.value" :label="e.label" :value="e.value"></el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <article class="center" style="margin-bottom: 30px;">
      <div class="df df-column df-jcsa df-aic border-grey bg-white" style="width: 96%;">
        <section class="center bottomline-grey" style="margin-bottom: 30px; width: 100%;">
          <div class="df df-aic f-t2" style="width: 80%; height: 56px;">
            Login Account
          </div>
        </section>
        <div class="df df-jcsb df-column" style="width: 80%;">
          <div class="df df-wrap df-jcsb" style="width: 100%; max-width: 950px;">
            <section class="df df-jcsb df-aic df-wrap" style="margin-bottom: 20px; width: 100%; max-width: 425px;">
              <span style="width: 100px;">User Name</span>
              <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
                <el-input v-model="form.userName" placeholder="Username"></el-input>
              </div>
            </section>
            <section class="df df-jcsb df-aic df-wrap" style="margin-bottom: 20px; width: 100%; max-width: 425px;">
              <span style="width: 100px;">Email</span>
              <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
                <el-input v-model="form.email" placeholder="email"></el-input>
              </div>
            </section>
          </div>
          <div class="df df-wrap df-jcsb" style="width: 100%; max-width: 950px;">
            <section class="df df-jcsb df-aic df-wrap" style="margin-bottom: 20px; width: 100%; max-width: 425px;">
              <span style="width: 100px;">Password</span>
              <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
                <el-input v-model="form.password" placeholder="password"></el-input>
              </div>
            </section>
            <section class="df df-jcsb df-aic df-wrap" style="margin-bottom: 20px; width: 100%; max-width: 425px;">
              <span style="width: 100px;">Re-Password</span>
              <div style="flex: 1; min-width: 260px; max-width: 300px; height: 40px;">
                <el-input v-model="form.checkPass" placeholder="Confirm your password"></el-input>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>

    <section class="center" style="margin-bottom: 30px;">
      <div class="df df-jcfe" style="width: 96%;">
        <div class="center btn-blue" style="width: 160px; height: 40px;" @click="save">Save</div>
      </div>

    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      roleList: [ { value: 'driver', label: 'Driver' }, { value: 'admin', label: 'Admin' } ],
    }
  },
  methods: {
    save() {
      console.log(this.form)
    },
  },
}
</script>
<style scoped>
@media screen and (max-width: 570px) {
  .inputs {
    flex-direction: column;
  }
}
</style>
