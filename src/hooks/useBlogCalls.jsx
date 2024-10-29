import React from 'react'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { fetchStart } from '../features/blogSlice'


const useBlogCalls = () => {
    const dispatch=useDispatch()
    const{axiosToken}=useAxios()

    const getBlog= async()=>{
      dispatch(fetchStart)
      try {
        const{data}=await axiosToken.get(blogs)
      } catch (error) {
        
      }  
    }
  return {}
}

export default useBlogCalls