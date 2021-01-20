import { useState, useEffect } from 'react'

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com'

export default function <T> (endpoint: string) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<T>()

  useEffect(
    function setResponse () {
      setLoading(true)
      const url = `${BASE_URL}/${endpoint}`
      const controller = new AbortController()
      const { signal } = controller

      fetch(url, { signal })
        .then((response) => response.json())
        .then((newData: T) => {
          setData(newData)
          setLoading(false)
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
