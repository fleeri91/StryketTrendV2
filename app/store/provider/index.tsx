'use client'

import React from 'react'
import { Provider } from 'react-redux'

import { store } from '@store/index'

const ReduxProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <Provider store={store}>{children}</Provider>
}
export default ReduxProvider
