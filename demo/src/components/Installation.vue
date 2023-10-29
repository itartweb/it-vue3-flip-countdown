<template>
  <div>
    <h2>Installation</h2>
    <countdown :countdownSize="countdownSize" :deadlineISO="deadlineISO" />
  </div>
</template>

<script>
import Countdown from '../../../src'

export default {
  name: 'App',
  components: {
    Countdown,
  },
  data() {
    return {
      countdownSize: '3rem',
      deadlineISO: '2024-01-03T12:00:00',
    }
  }
}
</script>
