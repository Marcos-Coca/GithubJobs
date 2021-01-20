import React, { ChangeEvent } from 'react'

interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

type Event = ChangeEvent<HTMLInputElement>;

export default function ({ value, onChange, placeholder = '' }: Props) {
  const handleChanges = (e: Event) => {
    onChange(e.target.value)
  }

  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={handleChanges}
      type="text"
    />
  )
}
