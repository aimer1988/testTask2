export default {
  chosenDayId: new Date().getDay(),
  days: [
    {
      id: '1',
      name: 'пн',
      tasks: [
        {
          id: '0',
          time: '05:00',
          description: 'Проснуться'
        },
        {
          id: '1',
          time: '05:30',
          description: 'Умыться'
        },
        {
          id: '2',
          time: '06:00',
          description: 'Побриться'
        },
        {
          id: '3',
          time: '06:30',
          description: 'Отжаться'
        },
        {
          id: '4',
          time: '07:30',
          description: 'Наступить на кота'
        }
      ]
    },
    {
      id: '2',
      name: 'вт',
      tasks: []
    },
    {
      id: '3',
      name: 'ср',
      tasks: []
    },
    {
      id: '4',
      name: 'чт',
      tasks: []
    },
    {
      id: '5',
      name: 'пт',
      tasks: []
    },
    {
      id: '6',
      name: 'сб',
      tasks: []
    },
    {
      id: '0',
      name: 'вс',
      tasks: []
    }
  ]
};