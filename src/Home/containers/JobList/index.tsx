/* eslint-disable camelcase */
import React from 'react'

import getJobs from '../services/getJobs'
import JobsList from '../components/JobsList'
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
  return <JobsList jobs={jobs}/>
}
