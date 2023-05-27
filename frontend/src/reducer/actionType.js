

export const SIGN_SUCCESS = 'SIGN_SUCCESS'

export const SIGN_FAIL = 'SIGN_FAIL'

export const LOGIN_SUCCESS= 'LOGIN_SUCCESS'

export const LOGIN_FAIL = 'LOGIN_FAIL'


export function signupSuccess(payload){
    return {type: SIGN_SUCCESS , payload:payload}
}

export function signfail(payload){
    return {type: SIGN_FAIL,payload:payload }
}



export function loginSucessAction(payload){
    return {type: LOGIN_SUCCESS , payload:payload}
}

export function loginFailAction(){
    return {type: LOGIN_FAIL }
}