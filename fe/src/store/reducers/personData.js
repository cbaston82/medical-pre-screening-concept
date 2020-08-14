import * as actionTypes from '../actions'

const initialSate = {
  personData: {}
}

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case actionTypes.GET_PERSON_DATA:
      return {
        ...state,
        personData: action.payload
      }
    default:
      return state
  }
}


export default reducer