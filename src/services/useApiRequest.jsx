import axios from 'axios'

import { useDispatch } from 'react-redux'
import {  toastSuccessNotify , toastErrorNotify} from "../helper/ToastNotify"
import { fetchFail, fetchStart, loginSuccess } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'

const useApiRequest = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const login=async(userData)=>{
        dispatch(fetchStart())
        try {
            const {data}= await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`,userData)
            dispatch(loginSuccess(data))
            toastSuccessNotify("Login işlemi başarılı")
            navigate("dashboard")
            
        }
        catch(error){
            toastErrorNotify("Login işlemi başarısız")
            dispatch(fetchFail())

        }
    }
  
  
  
  
  
  
  
  
    return {login}
   
  
}

export default useApiRequest