import { url } from '../constants/baseUrl'
import { JobRequest } from '../models/jobRequest'

export default function (jobRequest ?:JobRequest): string {
  let endpoint = url
  if (jobRequest) {
    const { lat, long, location, fullTime, description } = jobRequest
    endpoint += `?lat=${lat}&long=${long}&location=${location}&full_time=${fullTime}&description=${description}`
  }

  return endpoint
}
