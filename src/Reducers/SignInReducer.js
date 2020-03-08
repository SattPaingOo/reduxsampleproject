const SignInReduce = (state = 0 , action ) => {
    let username = "Mg Mg";
    let password = "54321";
    switch(action.type){
        case "Sign_In":
            if(username == action.username && password == action.password){
                return state = 1;
            }else{
                return state = 2;
            }
        default :
            return state;    
    }
}

export default SignInReduce;