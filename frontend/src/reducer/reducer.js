

let init = {
    isAuth: false,
    token:null,
}


const reducer = (state = init , action) => {
    const {type,payload} = action;

    switch(action){
        
        default :  return { ...state}
    }
}

export default reducer;