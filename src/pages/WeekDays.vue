<template lang="pug">
  div.week-days
    div
      div(v-for="day in days" :key="day.id" @dragover="makeDroppable" @drop="dropData(day.id)")
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
    },
    makeDroppable (event) {
      event.preventDefault();
    },
    dropData (dayId) {
      this.$store.dispatch('transferDayInfo', dayId);
    }
  }
}
</script>

<style lang="scss" scoped>
.day {
  text-align: center;
  width: 20%;
  font-weight: bolder;
  box-sizing: border-box;
  border: 2px solid white;
}
.day:hover {
  cursor: pointer;
}
.day--chosen {
  color: red;
  border: 2px solid black;
}
</style>


