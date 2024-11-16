import React, { useState } from "react";
import Card from "../components/blog/Card";
import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import useApiRequest from "../services/useApiRequest";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Dashboard = () => {
  const initialState = {
    id: [],
    title: [],
    image: [],
    comments: [],
    likes: "",
    isPublish: true,
    countOfVisitors: "",
    createdAt: "",
    updatedAt: "",
    __v: "",
  };
  const [data, setData] = useState({ initialState });
  const { getBlog } = useBlogCalls();
  const { blogs } = useSelector((state) => state.blog || {});

  useEffect(() => {
    getBlog("blogs");
  }, []);

  return (
    <>
      <Grid container justifyContent={"center"} gap={5} sx={{ height: 1356 }}>
        {blogs?.map((blog, index) => (
          <Grid item key={index}>
            <Card blog={blog} />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center",mb:2}}>
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
};

export default Dashboard;
