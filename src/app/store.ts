import { configureStore } from "@reduxjs/toolkit";
import powerReducer from '../features/power/power-slice';
import volumeReducer from '../features/volume/volume-slice'


export const store = configureStore({
    reducer: {
        power: powerReducer,
        volume: volumeReducer,
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
