import React, { useState } from 'react'
import Card from "../components/blog/Card"
import { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'

const Dashboard = () => {
  const initialState={
    id:"",
    title:"",
    image:"",
    comments:"",
    likes:"",
    isPublish:true,
    countOfVisitors:"",
    createdAt:"",
    updatedAt:"",
    __v:""
}
const [data, setData] = useState({initialState});
  const{getBlog}=useBlogCalls()
  const {blogs} = useSelector((state) => state.blog || {})
 useEffect(()=>{
    getBlog("blogs");
   console.log(blogs);
  },[])
  
  return (
    <Grid container justifyContent={"center"} gap={2}>
 
      <Grid item>
        <Card/>
      </Grid>


    </Grid>
  )
}

export default Dashboard
