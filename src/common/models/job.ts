/* eslint-disable camelcase */
export interface Job{
    id: string;
    type: Type;
    url: string;
    created_at: string;
    company: string;
    company_url: string;
    location: string;
    title: string;
    description: string;
}

export enum Type{
    FullTime = 'Full Time',
    PartTime = 'Part Time'
}
