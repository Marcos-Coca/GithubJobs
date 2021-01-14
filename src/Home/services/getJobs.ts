import { url } from '../constants/baseUrl'
import { JobRequest } from '../models/jobRequest'

export default function (jobRequest ?:JobRequest): Promise<Response> {
  let fullUrl = url
  if (jobRequest) {
    const { lat, long, location, fullTime, description } = jobRequest
    fullUrl += `?lat=${lat}&long=${long}&location=${location}&full_time=${fullTime}&description=${description}`
  }

  return fetch(fullUrl)
}
