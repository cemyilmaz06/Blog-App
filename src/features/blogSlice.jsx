import { createSlice } from "@reduxjs/toolkit";


const blogSlice= createSlice({
    name:"blog",
    initialState:{
      blogs:[],
      loading: false,
     error: false,
    },
    reducers:{
        fetchStart: (state) => {
            state.loading = true
            state.error = false
          },
          getBlogSuccess:(state,{payload})=>{
            state.loading=false
            state[payload.blogs]=payload.data
          
          },
          fetchFail: (state) => {
            state.loading = false
            state.error = true
          },
    },
})

export const{fetchStart, getBlogSuccess,fetchFail}=blogSlice.actions
export default blogSlice.reducer