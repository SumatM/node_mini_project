import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import About from '../pages/About'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'


export default function RoutesProvider(){

    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
    )

}