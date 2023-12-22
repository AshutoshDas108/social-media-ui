import { API_BASE_URL } from "../../config/api"
import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from "./auth.actionType"


const loginUserAction = (loginData) => async (dispatch) => {
    
    try 
    {
        const {data} = await axios.post(`${API_BASE_URL}/auth/login`, loginData)

        if(data.jwt) {
            localStorage.setItem('jwt', data.jwt)
        }

        dispatch({type:LOGIN_SUCCESS, payload: data.jwt})

    } 
    
    catch (error) {

        console.log("----->" , error.message)
        dispatch({type:LOGIN_FAILURE, payload:error})
        
    }
}


const registerUserAction = (registerData) => async (dispatch) => {
    
    try 
    {
        const {data} = await axios.post(`${API_BASE_URL}/auth/register`, registerData)

        if(data.jwt) {
            localStorage.setItem('jwt', data.jwt)
        }

        dispatch({type:REGISTER_SUCCESS, payload: data.jwt})

    } 
    
    catch (error) {

        console.log("----->" , error.message)
        dispatch({type:REGISTER_FAILURE, payload:error})
        
    }
}