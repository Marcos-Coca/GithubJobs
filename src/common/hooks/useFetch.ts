import { useState, useEffect } from 'react'

const BASE_URL = 'https://hidden-shore-14142.herokuapp.com/https://jobs.github.com'

export default function <T> (endpoint: string) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(
    function setResponse () {
      setLoading(true)
      const url = `${BASE_URL}/${endpoint}`
      const controller = new AbortController()
      const { signal } = controller

      fetch(url, { signal, headers: { Origin: window.location.protocol + '//' + window.location.host } })
        .then((response) => response.json())
        .then((newData: T) => {
          setData(newData)
          setLoading(false)
          setError(null)
        })
        .catch((error) => {
          setError(error.message)
          setLoading(false)
        })

      return function cleanup () {
        controller.abort()
      }
    },
    [endpoint]
  )

  return { data, loading, error }
}
