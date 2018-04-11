export default function sections(state = [], action) {
  switch (action.type) {
    case 'GET_SECTIONS_SAVE':
      return action.sections;

    // initial state
    default:
      return state;
  }
}
