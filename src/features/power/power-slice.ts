import { createSlice } from "@reduxjs/toolkit";

interface PowerState {
    value: boolean;
};

const initialState: PowerState = {
    value: false,
}

const powerSlice = createSlice({
    name: 'power',
    initialState,
    reducers: {
        togglePower(state){
            state.value = !state.value;
        }
    }
})


export const {togglePower} = powerSlice.actions;
export default powerSlice.reducer;