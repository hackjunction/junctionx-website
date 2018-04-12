export default function sections(state = [], action) {
  switch (action.type) {
    case 'GET_SCHEDULE_SAVE':
      return action.schedule;

    // initial state
    default:
      return state;
  }
}
