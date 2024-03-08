import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { medicineReducer } from "./medicine/medecineSlice";
import { filterReducer } from "./filter/filterSlice";
import { shopReducer } from "./shop/shopSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["shop"],
};

const rootReducer = combineReducers({
    medicine: medicineReducer,
    filter: filterReducer,
    shop: shopReducer
});

const persistUsersReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistUsersReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
