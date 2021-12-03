import { shallowEqual } from 'react-redux'
import { useAppSelector } from './storeHooks'

export const useContactsState = () => useAppSelector(
  state => state.contacts,
  shallowEqual
)

export const useNetworkState = () => useAppSelector(
  state => state.network,
  shallowEqual
)
