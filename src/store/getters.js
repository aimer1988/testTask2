const getters = {
  chosenDayId: state => state.chosenDayId,
  days: state => state.days,
  chosenDay: state => state.days.find((d) => d.id == state.chosenDayId),
  chosenDayTasks: state => state.days.find((d) => d.id == state.chosenDayId).tasks.sort( (t1, t2) => {
    if (Number(t1.time.replace(/[^-0-9]/gim,'')) > Number(t2.time.replace(/[^-0-9]/gim,'')))
      return 1;
    if (Number(t1.time.replace(/[^-0-9]/gim,'')) < Number(t2.time.replace(/[^-0-9]/gim,'')))
      return -1;
  })
};

export default getters;