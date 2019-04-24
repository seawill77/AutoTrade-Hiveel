<template>
  <section>
    <div class="center" style="margin-bottom: 30px;">
      <div class="df df-column df-jcsa border-grey bg-white" style="width: 96%;">
        <div class="df df-wrap" style="margin: 20px 30px 0;">
          <div class="df df-column" style="margin-bottom: 20px; width: 33%; min-width: 150px; max-width: 450px;">
            <span>Inspection</span>
            <span class="c-dark-blue" style="font-size: 48px; font-weight: 700;">16</span>
          </div>
          <div class="df df-column" style="margin-bottom: 20px; width: 33%; min-width: 150px; max-width: 450px;">
            <span>Issues</span>
            <span class="c-dark-blue" style="font-size: 48px; font-weight: 700;">02</span>
          </div>
          <div class="df df-column" style="margin-bottom: 20px; width: 33%; min-width: 150px; max-width: 450px;">
            <span>Service Costs</span>
            <span class="c-dark-blue" style="font-size: 48px; font-weight: 700;">$399.45</span>
          </div>
        </div>
      </div>
    </div>
    <div class="center" style="margin-bottom: 30px;">
      <div class="df df-column df-jcsa border-grey bg-white" style="width: 96%;">
        <div class="bottomline-grey" style="margin-bottom: 20px; width: 100%;">
          <div class="df df-jcsb" style="margin: 20px 30px;">
            <span class="f-t2">Basic Information</span>
            <span>Edit</span>
          </div>
        </div>
        <div style='margin-bottom: 10px; width: 100%;'>
          <div class="df df-jcsb df-wrap" style="margin: 0 30px;">
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="c-grey">First Name</span>
              <span>{{driver.firstName}}</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="c-grey">Last Name</span>
              <span>{{driver.lastName}}</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="c-grey">Phone</span>
              <span>{{driver.phone}}</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="c-grey">Email</span>
              <span>{{driver.email}}</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="c-grey">Driver License</span>
              <span>{{driver.driverLicense}}</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="c-grey">Group</span>
              <span>{{driver.group.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center" style="margin-bottom: 30px;">
      <div class="df df-column df-jcsa df-aic border-grey bg-white" style="width: 96%;">
        <div class="bottomline-grey" style="margin-bottom: 20px; width: 100%;">
          <div class="df df-jcsb" style="margin: 20px 30px;">
            <span class="f-t2">APP Login Account</span>
            <span>Edit</span>
          </div>
        </div>
        <div style='margin-bottom: 10px; width: 100%;'>
          <div class="df df-jcsb df-wrap" style="margin: 0 30px;">
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="c-grey">Username</span>
              <span>{{driver.username}}</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="c-grey">Email</span>
              <span>{{driver.email}}</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="c-grey">Password</span>
              <span>{{driver.password}}</span>
            </div>
            <div class="df df-jcsb" style="margin-bottom: 20px; width: 46%; min-width: 250px;">
              <span class="c-grey">Re-password</span>
              <span>{{driver.rePassword}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    driver() { return this.$store.state.person.detail },
  },
}
</script>
