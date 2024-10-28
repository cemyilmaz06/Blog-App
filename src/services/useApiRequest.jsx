import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import {  toastSuccessNotify , toastErrorNotify} from "../helper/ToastNotify"
import { fetchFail, fetchStart, loginSuccess ,registerSuccess} from '../features/authSlice'
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
          navigate("dashboard")
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
            navigate("")

        } catch (error) {
            toastErrorNotify("Register işlemi başarısız")
            dispatch(fetchFail())
        }
    }
  
  
  
  
  
  
  
    return {login, register}
   
  
}

export default useApiRequest