import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

// Define a type for the slice state
interface BlogState {
  value: {
    date: string;
    text: string;
    id: Number;
  }[];
}

// Define the initial state using that type
const initialState: BlogState = {

  value: [
    {
      date: '13.10.2023',
      text: "Discover what makes Cornell Hotel de France an iconic and irreplaceable fixture of San Francisco life.From the distinctive local culture to the hotel’s unmatched international appeal, the life of luxury has never looked as good as it does from the windows of this unforgettably romantic boutique hotel",
      id: 0,
    },
    {
      date: '13.10.2023',
      text: "Discover what makes Cornell Hotel de France an iconic and irreplaceable fixture of San Francisco life.From the distinctive local culture to the hotel’s unmatched international appeal, the life of luxury has never looked as good as it does from the windows of this unforgettably romantic boutique hotel",
      id: 1,
    },
    {
      date: '13.10.2023',
      text: "Discover what makes Cornell Hotel de France an iconic and irreplaceable fixture of San Francisco life.From the distinctive local culture to the hotel’s unmatched international appeal, the life of luxury has never looked as good as it does from the windows of this unforgettably romantic boutique hotel",
      id: 2,
    },
    {
      date: '13.10.2023',
      text: "Discover what makes Cornell Hotel de France an iconic and irreplaceable fixture of San Francisco life.From the distinctive local culture to the hotel’s unmatched international appeal, the life of luxury has never looked as good as it does from the windows of this unforgettably romantic boutique hotel",
      id: 3,
    },
    {
      date: '13.10.2023',
      text: "Discover what makes Cornell Hotel de France an iconic and irreplaceable fixture of San Francisco life.From the distinctive local culture to the hotel’s unmatched international appeal, the life of luxury has never looked as good as it does from the windows of this unforgettably romantic boutique hotel",
      id: 4,
    },
  ],
};



export const BlogSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {},
});

export const { } = BlogSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBlog = (state: RootState) => state.blog.value;

export default BlogSlice.reducer;