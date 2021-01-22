import React from 'react'

import JobsList from 'Home/containers/JobsList'
import SearchForm from 'Home/containers/SearchForm'
import { FormProvider } from 'Home/context/FormContext'

export default function () {
  return (
    <FormProvider>
      <div>
        <SearchForm/>
      </div>
      <JobsList />
    </FormProvider>
  )
}
