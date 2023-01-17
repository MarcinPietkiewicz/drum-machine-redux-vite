import { configureStore } from "@reduxjs/toolkit";
import powerReducer from '../features/power/power-slice';
import volumeReducer from '../features/volume/volume-slice';
import displayReducer from "../features/display/display-slice"; '../features/display/display-slice'


export const store = configureStore({
    reducer: {
        power: powerReducer,
        volume: volumeReducer,
        display: displayReducer,

    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
