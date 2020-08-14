import * as actionTypes from '../actions'

const initialSate = {
  appData: {
    companyInfo: {
      website: "/#",
      name: "Medical Pre Screening",
      address: "1234 Streen Name, Las Vegas NV, 89081"
    },
    projectInfo: {
      name: "Medical Pre Screening",
      yearCreated: "2018",
      description: "A ficticious medical screening application"
    }
  }
}

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case actionTypes.GET_APP_DATA:
      return {
        ...state
      }
    default:
      return state
  }
}


export default reducer
