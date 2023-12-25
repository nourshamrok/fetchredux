import { configureStore, combineReducers, createStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import counter from "./reducers/counterReducer";
import login from "./reducers/loginReducer";
import { api } from "./services/orgsApi";

const reducers = combineReducers({ counter, login, api: api.reducer });
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

//const store = createStore(reducers);
export default store;
