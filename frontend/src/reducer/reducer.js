import { LOGIN_FAIL, LOGIN_SUCCESS, SIGN_FAIL, SIGN_SUCCESS } from "./actionType";

let init = {
  isAuth: false,
  token: null,
  signup: false,
  res: '',
  user:{}
};

const reducer = (state = init, action) => {
  const { type, payload={} } = action;
  console.log(1);
  const {token,user} = payload
  switch (type) {
    case SIGN_SUCCESS:
      console.log(2);
      return { ...state, signup: true };
    case SIGN_FAIL:
      console.log(3);
      return { ...state,signup:false,res:payload };
    case LOGIN_SUCCESS: 
    console.log(4);
    return {...state,isAuth:true,token:token,user:user}
    case LOGIN_FAIL: 
    console.log(5);
    return {...init}
    default:
      return { ...state };
  }
};

export default reducer;
