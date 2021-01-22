import { ActionType } from 'Home/context/formState'
import { useFormState, useFormDispatch } from 'Home/context/FormContext'

export default function () {
  const dispatch = useFormDispatch()
  const { page, description, fullTime, location } = useFormState()

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
