import React from 'react'

import TextInput from '../../../common/components/TextInput'

interface Props {
  onSubmit: () => void;
}

export default function ({ onSubmit }: Props) {
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
