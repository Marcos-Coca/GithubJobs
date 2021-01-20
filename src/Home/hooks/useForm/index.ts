import { useReducer } from 'react'

import reducer from './reducer'
import { ActionType } from './actions'
import { initialState, State } from './state'

export default function (params: State = initialState) {
  const [state, dispatch] = useReducer(reducer, params)
  const { page, description, fullTime, location } = state

  const updateDescription = (description: string) =>
    dispatch({ type: ActionType.UPDATE_DESCRIPTION, description })

  const updateLocation = (location: string) =>
    dispatch({ type: ActionType.UPDATE_LOCATION, location })

  const updateFullTime = (fullTime: boolean) =>
    dispatch({ type: ActionType.UPDATE_FULL_TIME, fullTime })

  const incrementPage = () =>
    dispatch({ type: ActionType.UPDATE_PAGE, page: page + 1 })
  const decrementPage = () =>
    dispatch({ type: ActionType.UPDATE_PAGE, page: page - 1 })

  return {
    page,
    description,
    fullTime,
    location,
    updateLocation,
    incrementPage,
    decrementPage,
    updateFullTime,
    updateDescription
  }
}
