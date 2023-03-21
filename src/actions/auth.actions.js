import axiosIntance from "../helpers/axios"
import { authConstants } from "./constants"
import api from "../urlConfig"

export const login = (user) => {
    return async (dispatch) => {
        dispatch({type:authConstants.LOGIN_REQUEST});
        const res = await axiosIntance.post('/admin/signin', {
            ...user
        })
        if (res.status = 200) {
            const { token, user } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem('user',JSON.stringify(user))
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            if (res.status == 400) {
                  dispatch({
                    type:authConstants.LOGIN_FAILURE,
                    payload:{error:res.data.error}
                  })

            }

        }


    }
}

export const isUserLoggedIn=()=>{
    return async dispatch=>{
        const token=localStorage.getItem('token')
        // if(token){
        //     dispatch({
        //             payload:{
        //                 token
        //             }
        //         })
        // }else{
        //     dispatch({
        //         payload:{
        //            authenticate:false,
        //            message:"User needs to login"
        //         }
        //     })
        // }
        if(token){
            const user=JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        }else{
            dispatch({
                type:authConstants.LOGIN_FAILURE,
                payload:{error:'Failed to login'}
              })

        }
    }

}