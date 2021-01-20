/* eslint-disable camelcase */
import React from 'react'

import JobCard from './JobCard'
import getJobs from '../services/getJobs'
import useFetch from '../../common/hooks/useFetch'

interface Job {
  id: string;
  type: string;
  title: string;
  company: string;
  location: string;
  createdAt: string;
  companyUrl: string;
  companyLogo: string;
}

export default function () {
  const endpoint = getJobs()
  const { data: jobs, loading, error } = useFetch<Job[]>(endpoint)

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      {jobs?.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  )
}
