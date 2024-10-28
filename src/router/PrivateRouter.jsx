import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = () => {
  const {username}= useSelector(state=>state.auth)

  return username ? <Outlet /> : <Navigate to="/auth" />
}

export default PrivateRouter
