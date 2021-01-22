import React, { useReducer } from 'react'

import { State } from 'Home/types/State'
import { reducer, Action } from 'Home/context/formState'

type Dispatch = (action: Action) => void;

const initialState: State = {
  page: 0,
  location: '',
  description: ''
}

const FormStateContext = React.createContext<State | undefined>(undefined)
const FormDispatchContext = React.createContext<Dispatch | undefined>(undefined)

interface Props {
  children: React.ReactNode;
}

function FormProvider ({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  )
}

function useFormState () {
  const context = React.useContext(FormStateContext)
  if (context === undefined) {
    throw new Error('useFormState must be used within a FormProvider')
  }
  return context
}
function useFormDispatch () {
  const context = React.useContext(FormDispatchContext)
  if (context === undefined) {
    throw new Error('useFormDispatch must be used within a CountProvider')
  }
  return context
}

export { FormProvider, useFormState, useFormDispatch }
