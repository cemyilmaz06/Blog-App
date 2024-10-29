
import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { fetchFail, fetchStart, getBlogSuccess } from '../features/blogSlice'


const useBlogCalls = () => {
    const dispatch=useDispatch()
    const{axiosToken}=useAxios()

    const getBlog= async(blogs)=>{
      dispatch(fetchStart)
      try {
        const{data}=await axiosToken.get(blogs)
        dispatch(getBlogSuccess(data.data,blogs))
        console.log(data.data);
      } catch (error) {
        dispatch(fetchFail())
          console.log(error)
      }  
    }
  return {getBlog}
}

export default useBlogCalls