import React, { FormEvent } from 'react'
type Change = React.ChangeEvent<HTMLInputElement>;
interface Props {
  location: string;
  fullTime: boolean;
  description: string;
  handleSubmit: (e: FormEvent) => void;
  handleChangeFullTime: (e: Change) => void;
  handleChangeLocation: (e: Change) => void;
  handleChangeDescription: (e: Change) => void;
}

export default function ({
  location,
  fullTime,
  description,
  handleSubmit,
  handleChangeFullTime,
  handleChangeLocation,
  handleChangeDescription
}: Props) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={description} onChange={handleChangeDescription} />
        <input value={location} onChange={handleChangeLocation} />
        <input
          type="checkbox"
          checked={fullTime}
          onChange={handleChangeFullTime}
        />
        <button type="submit"></button>
      </form>
    </div>
  )
}
