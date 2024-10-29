import { createSlice } from "@reduxjs/toolkit";
const initialState={
   blogs:[],
   loading: false,
  error: false,
}


const blogSlice= createSlice({
    name:"blog",
    initialState,
    reducers:{
        fetchStart: (state) => {
            state.loading = true
            state.error = false
          },
          getBlogSuccess:(state,{payload})=>{
            state.loading=false
            state.blogs=payload
           console.log(payload);
          },
          fetchFail: (state) => {
            state.loading = false
            state.error = true
          },
    },
})

export const{fetchStart, getBlogSuccess,fetchFail}=blogSlice.actions
export default blogSlice.reducer