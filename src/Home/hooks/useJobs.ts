import { useState, useEffect } from 'react'

import { Job } from 'Home/types/Job'
import useFetch from 'Common/hooks/useFetch'
import setUrlParam from 'Helpers/setUrlParam'
import { useFormState } from 'Home/context/FormContext'

interface JobRequest {
  page?: number;
  location?: string;
  // eslint-disable-next-line camelcase
  full_time?: boolean;
  description?: string;
}

const BASE_URL = 'positions.json?'

export default function () {
  const [url, setUrl] = useState<string>(BASE_URL)
  const { data: jobs, error, loading } = useFetch<Job[]>(url)
  const { description, location, page, fullTime } = useFormState()

  function mapStateToJobRequest (): JobRequest {
    return {
      page,
      location,
      description,
      full_time: fullTime
    }
  }

  useEffect(() => {
    const jobRequest = mapStateToJobRequest()

    setUrl((url) =>
      Object.entries(jobRequest).reduce(
        (url, [key, value]) => setUrlParam({ url, key, value }), url)
    )
    console.log(url)
  }, [description, location, page, fullTime])

  return { jobs, error, loading }
}
