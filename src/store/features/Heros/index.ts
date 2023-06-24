import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

// Define a type for the slice state
interface HerosState {
    value: {
        id: number;
        title: string;
        img1: string;
        img2: string;
        bg: string;
    }[];
}

// Define the initial state using that type
const initialState: HerosState = {
    value: [
        {
            id: 1,
            title: 'Cozy Queen',
            img1: '/assets/hero/Vector-1.png',
            img2: '/assets/hero/Vector.png',
            bg: "/assets/hero/bg.png",
        },
    ],
};

export const herosSlice = createSlice({
    name: 'heros',
    initialState,
    reducers: {},
});

export const { } = herosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectHeros = (state: RootState) => state.heros.value;

export default herosSlice.reducer;