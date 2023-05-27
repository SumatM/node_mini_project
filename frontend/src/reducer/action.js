
import axios from 'axios'
import { loginFailAction, loginSucessAction, signfail, signupSuccess } from './actionType';



const SignUpFetch = (userInfo) => (dispatch) =>{

    axios.post('http://localhost:8080/signup/', userInfo)
    .then((res)=>{
        console.log(1)
    dispatch(signupSuccess())
    })
    .catch((err)=>{
        console.log(2)
    // console.log(err.response.data)
    dispatch(signfail(err.response.data))
    })
}

const loginFetch = (userInfo) => (dispatch) =>{

 
     axios.post('http://localhost:8080/login/', userInfo)
     .then((res)=>{
         console.log(res.data);
    localStorage.setItem('user',JSON.stringify({
        isAuth: true,
        token: res.data.token,
        signup: false,
        user:res.data.user
      }))
     dispatch(loginSucessAction({token:res.data.token,user:res.data.user}))
     })
     .catch((err)=>{
      console.log(err)
     dispatch(loginFailAction(err.response.data))
     })
 }



export {SignUpFetch,loginFetch}