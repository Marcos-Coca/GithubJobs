import React from 'react'

import useJobs from 'Home/hooks/useJobs'
import JobsListComponent from 'Home/components/JobsList'

export default function JobsListContainer () {
  const { jobs, error, loading } = useJobs()

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return <JobsListComponent jobs={jobs}/>
}
