import { createSlice } from '@reduxjs/toolkit'
import { userList } from './database'


export const userSlice = createSlice({
    name:  "users",
    initialState: userList,
    reducer: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
    }
    
})

export const{ addUser } = userSlice.actions

export default userSlice.reducer
 