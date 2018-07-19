<template lang="pug">
  div.container
    day-info.item
      day-info-task-item(slot="taskItem" slot-scope="slotProps" :task="slotProps.task")
    week-days.item
</template>

<script>
import WeekDays from '@pages/WeekDays.vue';
import DayInfo from '@pages/DayInfo.vue';
import DayInfoTaskItem from '@pages/DayInfo/DayInfoTaskItem.vue';

export default {
  components: {
    WeekDays, DayInfo, DayInfoTaskItem
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
}
.item {
  flex-basis: 30%;
}
</style>


