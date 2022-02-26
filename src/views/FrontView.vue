<template>
  <FrontViewNavBar></FrontViewNavBar>
  <router-view></router-view>
</template>
<script>
import FrontViewNavBar from '@/components/FrontViewNavBar.vue'

export default {
  components: {
    FrontViewNavBar
  }
}
</script>
