export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'

const initialState = {
  count: 0,
  country: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state
      }

    default:
      return state
  }
}
