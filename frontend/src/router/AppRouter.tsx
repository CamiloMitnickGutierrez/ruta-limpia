import { Navigate ,Route ,Routes } from "react-router-dom"
import { LoginPage } from "../module/auth/LoginPage"
import { HomePage } from "../module/home/HomePage"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={<HomePage/>} />
        <Route path="/rutalimpia" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='*' element={<Navigate to="/" replace />} />
        
    </Routes>
  )
}
