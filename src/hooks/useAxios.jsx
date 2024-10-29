import { useSelector } from "react-redux"


const axiosToken=()=>{
    const{token}=useSelector((state)=>state.auth)

    const axiosToken=axios.create({
        baseURL: `${process.env.REACT_APP_BASE_URL}/`,
        headers: {Authorization: `Token ${token}`},
    })


const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/`,
  })
  return { axiosToken, axiosPublic }
}

export default useAxios