interface Params {
  url: string;
  key: string;
  value?: string | number | boolean;
}

export default function setUrlParam (params: Params): string {
  const { url, key, value } = params
  const queryParams = new URLSearchParams(url)

  if (value) {
    queryParams.set(key, value.toString())
  }

  return queryParams.toString()
}
