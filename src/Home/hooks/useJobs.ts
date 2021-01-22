import { useState, useEffect } from 'react'

import { Job } from 'Home/types/Job'
import getJobs from 'Home/services/getJobs'
import useFetch from 'Common/hooks/useFetch'
import { useFormState } from 'Home/context/FormContext'

export default function () {
  const [endpoint, setEndpoint] = useState()
  const state = useFormState()
  const {} = useFetch()

  useEffect(() => {
    getJobs(state)
  }, [JSON.stringify(state)])
}
