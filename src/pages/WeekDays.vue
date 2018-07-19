<template lang="pug">
  div.week-days
    div
      div(v-for="day in days" :key="day.id")
        p(class="day" :class="{ 'day--chosen': chosenDayId == day.id }" 
                      @click="chooseDay(day.id)") {{ day.name }}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'chosenDayId',
      'days'
    ])
  },
  methods: {
    chooseDay (id) {
      this.$store.dispatch('changeDay', id);
    }
  }
}
</script>

<style lang="scss" scoped>
.week-days {
  border: 2px solid gray;
}
.day:hover {
  cursor: pointer;
}
.day--chosen {
  color: red;
}
</style>


