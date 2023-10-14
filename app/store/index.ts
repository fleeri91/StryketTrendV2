import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { stryktipsetApi } from './api/stryktipset.api'
import { stryktipsetReducer } from './slices/stryktipset.slice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // whitelist: ['persisted'],
}

const persistedReducer = persistReducer(persistConfig, stryktipsetReducer)

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    [stryktipsetApi.reducerPath]: stryktipsetApi.reducer,
    persisted: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(stryktipsetApi.middleware as any),
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
