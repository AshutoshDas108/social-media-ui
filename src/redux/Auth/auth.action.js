
import { API_BASE_URL, api } from "../../config/api"
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./auth.actionType"
import axios from "axios"


export const loginUserAction = (loginData) => async (dispatch) => {

   dispatch({type:LOGIN_REQUEST});
    
    try 
    {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data)

        if(data.token) {
            localStorage.setItem('jwt', data.token)
        }

        console.log("login successful", data);

        dispatch({type:LOGIN_SUCCESS, payload: data.jwt})

    } 
    
    catch (error) {

        console.log("--------" , error)
        dispatch({type:LOGIN_FAILURE, payload:error})
        
    }
}

export const registerUserAction = (registerData) => async (dispatch) => {

    dispatch({type:REGISTER_REQUEST});
    
    try 
    {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signup`, registerData.data)

        if(data.token) {
            localStorage.setItem('jwt', data.jwt)
        }

        console.log("register success" , data)

        dispatch({type:REGISTER_SUCCESS, payload: data.token})

    } 
    
    catch (error) {

        console.log("----->" , error.message)
        dispatch({type:REGISTER_FAILURE, payload:error})
        
    }
}

export const getProfileAction = (jwt) => async (dispatch) => {

    dispatch({type:GET_PROFILE_REQUEST});
    
    try 
    {
        const {data} = await axios.get(`${API_BASE_URL}/api/user/profile`,
        {
        headers:{
            "Authorization": `Bearer ${jwt}`
        } 
    }
        )


        console.log("profile" , data)

        dispatch({type:GET_PROFILE_SUCCESS, payload: data})

    } 
    
    catch (error) {

        console.log("----->" , error.message)
        dispatch({type:GET_PROFILE_FAILURE, payload:error})
        
    }
}

export const updateUserAction = (reqData) => async (dispatch) => {

    dispatch({type:UPDATE_PROFILE_REQUEST});
    
    try 
    {
        const {data} = await api.post(`${API_BASE_URL}/api/users/`, reqData.data)

        if(data.jwt) {
            localStorage.setItem('jwt', data.jwt)
        }

        console.log("update success" , data)

        dispatch({type:UPDATE_PROFILE_SUCCESS, payload: data.jwt})

    } 
    
    catch (error) {

        console.log("----->" , error.message)
        dispatch({type:UPDATE_PROFILE_FAILURE, payload:error})
        
    }
}


