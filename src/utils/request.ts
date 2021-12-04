import { Dictionary } from '../types/Dictionary'
import { NetworkResponseFailure } from '../types/NetworkResponse'

const getErrorObject = (response: Response) => ({
  body: response.body,
  url: response.url,
  statusText: response.statusText,
  status: response.status,
} as NetworkResponseFailure)

const parse = async <ResponseType>(response: Response) => {
  if (response.ok) {
    return await response.json() as ResponseType
  }

  throw getErrorObject(response)
}

const createHeaders = (headers: Dictionary<string>) => new Headers({
  Accept: 'application/json, text/plain, */*',
  ...headers,
})

const createJsonResourceHeaders = (headers: Dictionary<string>) => createHeaders({
  'Content-Type': 'application/json',
  ...headers,
})

export const request = async <ResponseType>(
  url: string,
) => {
  const response = await fetch(url, {
    credentials: 'include',
    cache: 'no-store',
    headers: createHeaders({}),
  })
  return await parse<ResponseType>(response)
}

export const postRequest = async <ResponseType>(
  url: string,
  body: unknown,
) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: createJsonResourceHeaders({}),
  })
  return await parse<ResponseType>(response)
}

export const putRequest = async <ResponseType>(
  url: string,
  body: unknown,
) => {
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: createJsonResourceHeaders({}),
  })
  return await parse<ResponseType>(response)
}

export const deleteRequest = async (
  url: string,
) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: createJsonResourceHeaders({}),
  })
  return await parse<ResponseType>(response)
}
