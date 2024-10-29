import { createSlice } from "@reduxjs/toolkit";
const initialState={
    id:[],
    title:[],
    image:[],
    comments:[],
    likes:[],
    isPublish:true,
    countOfVisitors:[],
    createdAt:[],
    updatedAt:[],
    __v:[]
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
            state.firms=payload
          },
          fetchFail: (state) => {
            state.loading = false
            state.error = true
          },
    },
})

export const{fetchStart, getBlogSuccess,fetchFail}=blogSlice.actions
export default blogSlice.reducer