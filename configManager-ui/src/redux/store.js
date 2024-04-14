import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey:
        'Xn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZr4u7x!z%C*F-JaNdR',
      // eslint-disable-next-line no-unused-vars
      onError(error) {
        // Handle the error.
      },
    }),
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

export { persistor };
export default store;
