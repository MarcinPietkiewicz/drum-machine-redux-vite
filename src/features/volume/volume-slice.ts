import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VolumeState {
    value: number;
};

const initialState: VolumeState = {
    value: 1,
}

const volumeSlice = createSlice({
    name: 'volume',
    initialState,
    reducers: {
        setVolume(state, action: PayloadAction<number>){
            state.value = action.payload;
        }
    }
})


export const {setVolume} = volumeSlice.actions;
export default volumeSlice.reducer;