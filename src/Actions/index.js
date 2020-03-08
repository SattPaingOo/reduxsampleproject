export const signin = (username,password) => {
    return (
        {
            type : "Sign_In",
            username : username,
            password : password
        }
    )
}