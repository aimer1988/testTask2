<template lang="pug">
  div.day-info
    div
      div.task(v-for="task in chosenDayTasks")
        slot(:task="task" name="taskItem")
    div
      div.editor.container
        div.editor-field(v-show="isEditorActive")
          input(v-model="newTask.time")
        div.editor-field(v-show="isEditorActive")
          input(v-model="newTask.description")
        div.editor-field
          button(@click="addTask") +
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      isEditorActive: false,
      newTask: {
        time: '',
        description: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'chosenDayTasks'
    ])
  },
  methods: {
    addTask () {
      if (this.isEditorActive)
        this.$store.dispatch('addTask', this.newTask);
      else
        this.isEditorActive = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.day-info {
  border: 2px solid black;
  box-sizing: border-box;
  padding: 20px;
}
.task {
  box-sizing: border-box;
  padding: 5px;
  background-color: yellow;
}
.container {
  display: flex;
  justify-content: space-around;
}
.editor {
  text-align: center;
  box-sizing: border-box;
  padding: 5px;
}
.editor-field {
  flex-basis: 30%;
}
input {
  width: 100%;
  padding: 0;
  box-sizing: border-box;
}
</style>


