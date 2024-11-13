import React, { useState } from 'react'
import Card from "../components/blog/Card"
import { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import useApiRequest from '../services/useApiRequest'


const Dashboard = () => {
  const initialState={
    id:[],
    title:[],
    image:[],
    comments:[],
    likes:"",
    isPublish:true,
    countOfVisitors:"",
    createdAt:"",
    updatedAt:"",
    __v:""
}
  const[data, setData]= useState({initialState});
  const{getBlog}=useBlogCalls()
  const{blogs}= useSelector((state) => state.blog || {})


  useEffect(()=>{
    getBlog("blogs");
    
  },[])

  return (
    <Grid container justifyContent={"center"} gap={5}>
 {blogs?.map((blog,index)=>(
 <Grid item key={index}>
 <Card blog={blog}/>
</Grid>
 ))}
     


    </Grid>
  )
}

export default Dashboard
