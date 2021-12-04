
export interface NetworkResponseSuccess {
  body?: ReadableStream
  headers?: Headers
  ok?: boolean
  status?: number
  statusText?: string
  url?: string // API url
}

export interface NetworkResponseFailure {
  body?: Response['body']
  status?: number
  statusText?: string
  url?: string
  message?: string
}

export type NetworkResponse = NetworkResponseSuccess | NetworkResponseFailure
