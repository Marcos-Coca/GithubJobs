import React from 'react'

import getJobs from '../services/getJobs'
import { Job } from '../../common/models/job'
import useFetch from '../../common/hooks/useFetch'

export default function () {
  const endpoint = getJobs()
  const { data: jobs, loading, error } = useFetch<Job[]>(endpoint)

  if (error) {
    return <div>Errro</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return jobs?.map((job) => <div key={job.id}>{job.title}</div>)
}
