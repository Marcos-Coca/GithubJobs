import React, { FormEvent } from 'react'

import useForm from '../../hooks/useForm'
import TextInput from '../../../common/components/TextInput'

interface Props {
  onSubmit: () => void;
}

export default function ({ onSubmit }: Props) {
  const state = useForm()

  const handleChangeFullTime = () => {
    state.updateFullTime(!state.fullTime)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          value={state.description}
          onChange={state.updateDescription}
        />
        <TextInput value={state.location} onChange={state.updateLocation} />
        <input
          type="checkbox"
          checked={state.fullTime}
          onChange={handleChangeFullTime}
        />
        <button type="submit"></button>
      </form>
    </div>
  )
}
