import mutation_types from './mutation_types';

const actions = {
  changeDay (store, id) {
    store.commit(mutation_types.CHANGE_DAY, id);
  },
  transferDayInfo (store, targetId) {
    store.commit(mutation_types.TRANSFER_DAY_INFO, targetId);
    store.commit(mutation_types.CHANGE_DAY, targetId);
  },
  addTask (store, newTask) {
    store.commit(mutation_types.ADD_TASK, newTask);
  },
  editTask (store, taskInfo) {
    store.commit(mutation_types.EDIT_TASK, taskInfo);
  },
  deleteTask (store, taskId) {
    store.commit(mutation_types.DELETE_TASK, taskId);
  }
};

export default actions;