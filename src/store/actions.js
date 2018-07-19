import mutation_types from './mutation_types';

const actions = {
  changeDay (store, id) {
    store.commit(mutation_types.CHANGE_DAY, id);
  },
  addTask (store, newTask) {
    store.commit(mutation_types.ADD_TASK, newTask);
  },
  deleteTask (store, taskId) {
    store.commit(mutation_types.DELETE_TASK, taskId);
  }
};

export default actions;