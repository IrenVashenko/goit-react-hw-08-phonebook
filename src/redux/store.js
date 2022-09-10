import { configureStore} from "@reduxjs/toolkit";
import {contactApi} from './contacts/contact';
import { authReducer } from './auth';
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        auth: persistReducer(authPersistConfig, authReducer),

    },
    middleware : getDefaultMiddleware => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        contactApi.middleware,
    ]
});

export const persistor = persistStore(store);