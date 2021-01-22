import React, { FormEvent } from 'react'

import useForm from 'Home/hooks/useForm'
import SearchFormComponent from 'Home/components/SearchForm'

type Change = React.ChangeEvent<HTMLInputElement>;

export default function SearchFormContainer () {
  const state = useForm()
  const { location, description, fullTime } = state

  const handleChangeFullTime = () => {
    state.updateFullTime(!state.fullTime)
  }
  const handleChangeDescription = (e :Change) => {
    state.updateDescription(e.target.value)
  }
  const handleChangeLocation = (e: Change) => {
    state.updateLocation(e.target.value)
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  const props = {
    location,
    description,
    handleSubmit,
    handleChangeLocation,
    handleChangeFullTime,
    handleChangeDescription,
    fullTime: Boolean(fullTime)
  }

  return <SearchFormComponent {...props} />
}
