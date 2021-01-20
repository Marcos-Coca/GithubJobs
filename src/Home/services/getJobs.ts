/* eslint-disable camelcase */
import setUrlParam from '../../helpers/setUrlParam'

interface JobRequest {
  page?: number;
  location?: number;
  full_time?: boolean;
  description?: string;
}

export default function (jobRequest: JobRequest = {}): string {
  const url = Object.entries(jobRequest)
    .reduce((url, [key, value]) => setUrlParam({ url, key, value }), 'positions.json?')

  return url
}
