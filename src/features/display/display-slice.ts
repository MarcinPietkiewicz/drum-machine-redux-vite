import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DisplayState {
    value: string;
};

const initialState: DisplayState = {
    value: "",
}

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        updateDisplay(state, action: PayloadAction<string>){
            state.value = action.payload;
        }
    }
})


export const {updateDisplay} = displaySlice.actions;
export default displaySlice.reducer;