import React from 'react'
import { Card } from 'react-bootstrap'

interface Props{
    id: string;
    type: string;
    title: string;
    company: string;
    location: string;
    createdAt: string;
    companyUrl: string;
    companyLogo: string;
}

export default function (props: Props) {
  const { companyLogo, title } = props
  return (
        <Card>
            <Card.Img>{companyLogo}</Card.Img>
            <Card.Title>{title}</Card.Title>
        </Card>
  )
}
