import { Route ,Routes } from "react-router-dom"
import { LoginPage } from "../module/auth/LoginPage"


export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/login" element={<LoginPage/>} />
        


    </Routes>
  )
}
