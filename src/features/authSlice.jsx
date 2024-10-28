import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token:"",
    username:"",
    loading:"",
    error:"",
  },
  reducers: {
    fetchStart:(state)=>{
      state.loading=true
    },
    loginSuccess:(state,{payload})=>{
      state.token=payload.token
      state.username=payload.user.username
      state.loading=false
    }, 
registerSuccess:(state,{payload})=>{
  state.token=payload.token
  state.username=payload.data.username
      state.loading=false
},

    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {fetchFail,fetchStart,loginSuccess,registerSuccess} = authSlice.actions
export default authSlice.reducer
