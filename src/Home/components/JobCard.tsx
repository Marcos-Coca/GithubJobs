import React from 'react'
import { Card } from 'react-bootstrap'

import { Job } from 'Home/types/Job'

interface Props {
  job: Job;
}

export default function ({ job }: Props) {
  const { companyLogo, title } = job
  return (
    <Card>
      <Card.Img>{companyLogo}</Card.Img>
      <Card.Title>{title}</Card.Title>
    </Card>
  )
}
