import { configureStore } from '@reduxjs/toolkit'
//futures
import roomsReduser from "@/store/features/Rooms"
import blogReduser from '@/store/features/Blog'
import herosReduser from '@/store/features/Heros'

export const store = configureStore({
  reducer: {
    rooms: roomsReduser,
    blog: blogReduser,
    heros: herosReduser
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;