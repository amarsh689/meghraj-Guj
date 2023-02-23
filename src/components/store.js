import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducers from './rootReducer';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducers);

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  const store = createStore(
    // rootReducers,
    persistedReducer,
    /* preloadedState, */ composeEnhancers(
      applyMiddleware(thunkMiddleware)
      // other store enhancers if any
    )
  );
  
  // console.log(store.getState());
  // export default store;
  
  export const persistor = persistStore(store);
  export default store;