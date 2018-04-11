export default function event(state = null, action) {
  switch (action.type) {
    case 'GET_EVENT_SAVE':
      return action.event;

    // initial state
    default:
      return state;
  }
}
