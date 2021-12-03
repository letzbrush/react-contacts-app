import { AnyAction, createSlice } from '@reduxjs/toolkit'
import { Dictionary } from '../../types/Dictionary'
import { NetworkResponseFailure } from '../../types/NetworkResponse'

interface NetworkState {
  loading: Dictionary<boolean>
  errors: Dictionary<NetworkResponseFailure | undefined>
}

export const initialNetworkState: NetworkState = {
  loading: {},
  errors: {},
}

const isRequestAction = (action: AnyAction) => action.type && action.type.endsWith('Request')
const isSuccessAction = (action: AnyAction) => action.type &&  action.type.endsWith('Success')
const isFailureAction = (action: AnyAction) => action.type && action.type.endsWith('Failure')

const getRequestName = (action: AnyAction) => {
  const matches = /(.*)(Request|Success|Failure)/.exec(action.type)
  if (matches) {
    const [, requestName] = matches
    return requestName
  }
  return ''
}

// NetworkState uses the actions naming (...Request, Success, Failure) to keep track
// of the loading and error state of all network requests

const networkStateSlice = createSlice({
  name: 'networkState',
  initialState: initialNetworkState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(isRequestAction, (state, action) => {
      const requestName = getRequestName(action)
      state.loading[requestName] = true
    })
    builder.addMatcher(isSuccessAction, (state, action) => {
      const requestName = getRequestName(action)
      state.errors[requestName] = undefined
      state.loading[requestName] = false
    })
    builder.addMatcher(isFailureAction, (state, action) => {
      const requestName = getRequestName(action)
      state.errors[requestName] = action.payload
      state.loading[requestName] = false
    })
  },
})

export const networkStateReducer = networkStateSlice.reducer
