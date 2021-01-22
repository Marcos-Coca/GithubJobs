interface Params {
  url: string;
  key: string;
  value?: string | number | boolean;
}

export default function setUrlParam (params: Params): string {
  const { url, key, value } = params
  const queryStart = url.indexOf('?') + 1
  const urlParmas = url.slice(queryStart)
  const queryParams = new URLSearchParams(urlParmas)

  if (value) {
    queryParams.set(key, value.toString())
  }

  const baseUrl = url.slice(0, queryStart)

  return baseUrl + queryParams.toString()
}
