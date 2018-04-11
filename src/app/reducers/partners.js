export default function partners(state = [], action) {
  switch (action.type) {
    case 'GET_PARTNERS_SAVE':
      return action.partners;

    // initial state
    default:
      return state;
  }
}
