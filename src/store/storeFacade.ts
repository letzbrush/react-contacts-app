import { shallowEqual } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'

import { store } from './store'
import { useAppSelector } from './storeHooks'

export const dispatch = (action: AnyAction) => store.dispatch(action)

export const useContactsState = () => useAppSelector(
  state => state.contacts,
  shallowEqual
)

export const useNetworkState = () => useAppSelector(
  state => state.network,
  shallowEqual
)
