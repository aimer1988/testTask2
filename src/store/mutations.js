import mutation_types from './mutation_types';

const mutations = {
  [mutation_types.CHANGE_DAY] (state, id) {
    state.chosenDayId = id;
  },
  [mutation_types.ADD_TASK] (state, newTask) {
    //let day = state.days.find((d) => d.id == state.chosenDayId);
    const newId = '999'; //переделать на нормальное присвоение ид
    state.days.find((d) => d.id == state.chosenDayId).tasks.push({
      id: newId,
      time: newTask.time,
      description: newTask.description
    });
  },
  [mutation_types.DELETE_TASK] (state, taskId) {
    let day = state.days.find((d) => d.id == state.chosenDayId);
    day.tasks.splice(day.tasks.findIndex((t) => t.id == taskId), 1);
  }
};

export default mutations;