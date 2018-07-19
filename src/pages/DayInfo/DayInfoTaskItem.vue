<template lang="pug">
  div.container
    div.item {{task.time}}
    div.item {{task.description}}
    div.item.action
      button(@click="deleteItem") X
</template>

<script>
export default {
  props: {
    task: Object
  },
  methods: {
    deleteItem () {
      this.$store.dispatch('deleteTask', this.task.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  flex-basis: 30%;
  //border: 1px solid blue;
}
.action {
  text-align: center;
}
</style>

