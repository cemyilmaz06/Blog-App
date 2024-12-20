import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import {  toastSuccessNotify , toastErrorNotify} from "../helper/ToastNotify"
import { fetchFail, fetchStart, loginSuccess ,registerSuccess,logoutSuccess} from '../features/authSlice'
import { useNavigate } from 'react-router-dom'

const useApiRequest = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const{token}=useSelector((state)=>state.auth)
    const login = async (userData) => {
   

        dispatch(fetchStart())
        try {
          const { data } = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/auth/login`,
            userData
          )
          toastSuccessNotify("Login işlemi başarılı")
          dispatch(loginSuccess(data))
          navigate("/")
          console.log(data)
        } catch (error) {
          toastErrorNotify("Login işlemi başarısız")
          dispatch(fetchFail())
          console.log(error)
        }
      }
  
    const register= async(userInfo)=>{
        dispatch(fetchStart())
        try {
            const {data}=await axios.post(`${process.env.REACT_APP_BASE_URL}/users/`, userInfo)
            dispatch(registerSuccess(data))
            toastSuccessNotify("Register işlemi başarılı")
            navigate("/auth")

        } catch (error) {
            toastErrorNotify("Register işlemi başarısız")
            dispatch(fetchFail())
        }
    }
  

    const logout=async()=>{
      dispatch(fetchStart())
      try {
        await axios(`${process.env.REACT_APP_BASE_URL}/auth/logout`,{headers: {Authorization: `Token ${token}`},})
        dispatch(logoutSuccess())
      navigate("/auth")
      } catch (error) {
        dispatch(fetchFail())
      }
    }
  
  
  
  
  
  
    return {login, register,logout}
   
  
}

export default useApiRequest