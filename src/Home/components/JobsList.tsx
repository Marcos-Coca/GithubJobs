import React from 'react'

import { Job } from 'Home/types/Job'
import JobCard from 'Home/components/JobCard'
interface Props{
  jobs?: Job[]
}

export default function JobsListComponent ({ jobs = [] }: Props) {
  return (
    <>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </>
  )
}
