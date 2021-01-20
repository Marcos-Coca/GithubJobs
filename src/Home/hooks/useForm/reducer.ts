import { Reducer } from 'react'

import { State } from './state'
import { Action, ActionType } from './actions'

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.description
      }

    case ActionType.UPDATE_LOCATION:
      return {
        ...state,
        location: action.location
      }

    case ActionType.UPDATE_FULL_TIME:
      return {
        ...state,
        fullTime: !state.fullTime
      }

    case ActionType.UPDATE_PAGE:
      return {
        ...state,
        page: action.page
      }

    default:
      return state
  }
}

export default reducer
