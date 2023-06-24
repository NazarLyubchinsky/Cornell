import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

// Define a type for the slice state
interface RoomsState {
    value: {
        id: number;
        title: string;
        img: string;
        description: string;
        subDescription: string;
    }[];
}

// Define the initial state using that type
const initialState: RoomsState = {
    value: [
        {
            id: 1,
            title: 'Cozy Queen',
            img: '/../assets/Rooms/Rectangle602cozy.png',
            description: 'Modest room with 1 queen-sized, fit for 1-2 guests',
            subDescription: "Cozy up in this modestly sized room with a single queen-sized bed, perfect for short stays of solo travelers and couples. Rooms are individually decorated and feature a flat screen TV with cable access, in-room coffee maker, and a bathroom with an enclosed shower. Each room is equipped with a hair dryer, iron/ironing board, a telephone, and free WiFi."
        },
        {
            id: 2,
            title: 'Deluxe Queen',
            img: '/../assets/Rooms/Rectangle 602cozy.png',
            description: 'Comfortable room with 1 queen-sized bed, perfect for 1-2 guests',
            subDescription: "Relax in this comfortable room with a single queen-sized bed, perfect for solo travelers and couples. Rooms are individually decorated and feature a flat screen TV with cable access, in-room coffee maker, and a bathroom with either a walk-in shower or a bathtub shower. Each room is equipped with a hair dryer, iron/ironing board, a telephone, and free WiFi."
        },
        {
            id: 3,
            title: 'Premier Queen',
            img: '/../assets/Rooms/Rectangle 602cozy.png',
            description: 'Deluxe room with 1 queen-sized bed, ideal for 2 guests',
            subDescription: "Enjoy this premier room with a single queen-sized bed, an ideal fit for couples who want a little more space. Rooms are individually decorated and feature a flat screen TV with cable access, in-room coffee maker, and a bathroom with either a walk-in shower or a bathtub shower. Each room is equipped with a hair dryer, iron/ironing board, a telephone, and free WiFi."
        },
        {
            id: 4,
            title: 'Triple Room',
            img: '/../assets/Rooms/Rectangle 602cozy.png',
            description: 'Premier room with 1 queen-sized bed and 1 twin, for 3 guests',
            subDescription: "Make yourself at home in this premier room with one queen-sized bed and one twin, for up to 3 guests. These rooms face thestreet and have double pane windows for natural light. Rooms are individually decorated and feature a flat screen TV with cable access, in-room coffee maker, and a bathroom with either a walk-in shower or a bathtub shower. Each room is equipped with a hair dryer, iron/ironing board, a telephone, and free WiFi."
        },
        {
            id: 5,
            title: 'Junior Suite',
            img: '/../assets/Rooms/Rectangle 602cozy.png',
            description: 'Beautifully decorated suite with 1 queen-sized bed, perfect for 2 guests',
            subDescription: "This lovely Junior Suite has one bedroom with a queen-sized bed connected to an elegant sitting room, and is perfect for a romantic getaway. Rooms are individually decorated and include a flat screen TV with cable access, in-room coffee maker, and a bathroom with a walk-in shower. Each room is equipped with a hair dryer, iron/ironing board, a telephone, free WiFi, and bathrobes with slippers on request."
        },
    ],
};

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {},
});

export const { } = roomsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRooms = (state: RootState) => state.rooms.value;

export default roomsSlice.reducer;