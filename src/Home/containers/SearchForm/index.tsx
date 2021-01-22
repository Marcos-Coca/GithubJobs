import React, { FormEvent } from 'react'

import useForm from '../../hooks/useForm'

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
}
