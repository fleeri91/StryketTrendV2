'use client'

import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor } from '@store/index'

const ReduxPersistor = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  )
}
export default ReduxPersistor
