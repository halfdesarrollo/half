import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

//Slices
import user from "./slices/user/userSlice";
import restaurant from "./slices/restaurant/restaurantSlice";
import order from "./slices/order/orderSlice";
import table from "./slices/table/tableSlice";

const rootReducer = combineReducers({
  userState: user,
  restaurantState: restaurant,
  orderState: order,
  tableState: table,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["sessionState"],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
  middleware: [thunk],
});

export default store;
