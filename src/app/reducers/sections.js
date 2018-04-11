export default function sections(state = [], action) {
  switch (action.type) {
    case 'GET_SECTIONS_SAVE':
      return action.tracks;

    // initial state
    default:
      return state;
  }
}
