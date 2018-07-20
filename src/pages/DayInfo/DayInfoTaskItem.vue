<template lang="pug">
  div.container
    div.item.item__time(contenteditable @blur="editDone" :class="{ 'item--expired': isExpired }") {{task.time}}
    div.item.item__description(contenteditable @blur="editDone" :class="{ 'item--expired': isExpired }") {{task.description}}
    div.item.action
      button(@click="deleteItem") X
</template>

<script>
import { mapGetters } from 'vuex';
import utils from '../../utils';

export default {
  data () {
    return {
      currentTask: {
        time: this.task.time,
        description: this.task.description
      }
    }
  },
  props: {
    task: Object
  },
  computed: {
    ...mapGetters([
      'chosenDayId'
    ]),
    isExpired () {
      return (this.chosenDayId < new Date().getDay() && this.chosenDayId != 0) || 
      (this.chosenDayId == new Date().getDay() && Number(this.task.time.replace(/[^-0-9]/gim,'')) < Number(new Date().getHours().toString() + new Date().getMinutes().toString() ))
    }
  },
  methods: {
    deleteItem () {
      this.$store.dispatch('deleteTask', this.task.id);
    },
    editDone (event) {
      if (Array.from(event.target.classList).findIndex( (x) => x === 'item__time' ) >= 0) {
        if (this.checkEditorData(event.target.textContent))
          this.currentTask.time = event.target.textContent;
        else
          alert('Некорректные данные');
      }        
      if (Array.from(event.target.classList).findIndex( (x) => x === 'item__description' ) >= 0) {
        this.currentTask.description = event.target.textContent;
      }        
      this.$store.dispatch('editTask', { editedTaskId: this.task.id, newContent: this.currentTask });
    },
    checkEditorData (editorData) {
      return utils.validTime(editorData);
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  flex-basis: 30%;
}
.item--expired {
  color: red;
}
.action {
  text-align: center;
}
</style>

