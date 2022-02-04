import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
export const store = createStore(rootReducer, {}, applyMiddleware(thunk))
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const initialState = {};
// const middleware = [thunk];
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(
//   persistedReducer,
//   initialState,

//   compose(
//     applyMiddleware(...middleware)
//   ),
// );

// const persistor = persistStore(store);

// export {store, persistor};

