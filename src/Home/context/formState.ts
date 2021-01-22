/* eslint-disable no-unused-vars */
import { Reducer } from 'react'

import { State } from 'Home/types/State'

export enum ActionType {
    UPDATE_DESCRIPTION = 'update_description',
    UPDATE_LOCATION = 'update_location',
    UPDATE_FULL_TIME = 'update_full_time',
    UPDATE_PAGE = 'update_page',
  }

export type Action =
| { type: ActionType.UPDATE_DESCRIPTION; description: string }
| { type: ActionType.UPDATE_LOCATION; location: string }
| { type: ActionType.UPDATE_FULL_TIME; fullTime: boolean }
| { type: ActionType.UPDATE_PAGE; page: number };

export const reducer: Reducer<State, Action> = (state, action) => {
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

    default: {
      throw new Error(`Unhandled action type: ${(action as Action).type}`)
    }
  }
}

export default reducer
