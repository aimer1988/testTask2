<template lang="pug">
  div.day-info
    div.draggable-anchor-container
      span.anchor(draggable) *
    div
      transition-group(name="tasklist" tag="p")
        div.task(v-for="task in chosenDayTasks" :key="task.id")
          slot(:task="task" name="taskItem")
    div
      div.editor.container
        div.editor-field(v-show="isEditorActive")
          input(v-model="newTask.time" @keyup.enter="addTask")
        div.editor-field(v-show="isEditorActive")
          input(v-model="newTask.description" @keyup.enter="addTask")
        div.editor-field
          button(@click="addTask") +
</template>

<script>
import { mapGetters } from 'vuex';
import utils from '../utils';

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
      if (this.isEditorActive) {
        if (this.checkEditorData(this.newTask)) {
          this.$store.dispatch('addTask', this.newTask);
          this.isEditorActive = false;
        } else {
          alert('Некорректные данные');
        }
      }        
      else {
        this.isEditorActive = true;
        this.newTask.time = '';
        this.newTask.description = '';
      }        
    },
    checkEditorData (editorData) {
      return utils.validTime(editorData.time);
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
.draggable-anchor-container {
  text-align: right;
}
.anchor {
  font-size: 30px;
}
.anchor:hover {
  cursor: pointer;
}

.tasklist-enter-active {
  transition: all .4s;
}
.tasklist-enter {
  opacity: 0;
  transform: translateY(30px);
}
</style>


