import {combineReducers, configureStore,} from "@reduxjs/toolkit";
import storiesIdReducer from "./storiesIdSlice";

const rootReducer = combineReducers({
    storiesId: storiesIdReducer
})


export const AppStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof AppStore>
export type AppDispatch = AppStoreType['dispatch']