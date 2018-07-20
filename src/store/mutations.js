import mutation_types from './mutation_types';

const mutations = {
  [mutation_types.CHANGE_DAY] (state, id) {
    state.chosenDayId = id;
  },
  [mutation_types.TRANSFER_DAY_INFO] (state, targetId) {
    let targetDay = state.days.find((d) => d.id == targetId);
    targetDay.tasks = JSON.parse(JSON.stringify(state.days.find((d) => d.id == state.chosenDayId).tasks));
  },
  [mutation_types.ADD_TASK] (state, newTask) {
    let day = state.days.find((d) => d.id == state.chosenDayId);
    const newId = Math.max(...day.tasks.map( (t) => Number(t.id) ), 0) + 1;
    state.days.find((d) => d.id == state.chosenDayId).tasks.push({
      id: newId,
      time: newTask.time,
      description: newTask.description
    });
  },
  [mutation_types.EDIT_TASK] (state, taskInfo) {
    let day = state.days.find((d) => d.id == state.chosenDayId);
    let editedTask = day.tasks.find( (t) => t.id == taskInfo.editedTaskId );
    editedTask.time = taskInfo.newContent.time;
    editedTask.description = taskInfo.newContent.description;
  },
  [mutation_types.DELETE_TASK] (state, taskId) {
    let day = state.days.find((d) => d.id == state.chosenDayId);
    day.tasks.splice(day.tasks.findIndex((t) => t.id == taskId), 1);
  }
};

export default mutations;