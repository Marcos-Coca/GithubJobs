import { useState, useEffect } from 'react'

export default function <T> (endpoint: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState<T | null>(null)

  useEffect(
    function setResponse () {
      setLoading(true)
      const controller = new AbortController()
      const { signal } = controller
      fetch(endpoint, { signal })
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

  return [data, loading, error]
}
