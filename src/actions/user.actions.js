import axiosIntance from "../helpers/axios"
import { authConstants, userConstants } from "./constants"


export  const signup = (user) => {
    console.log(user)
    return async (dispatch) => {
        dispatch({type:userConstants.USER_REGISTER_REQUEST});
        const res = await axiosIntance.post('/admin/signup', {
            ...user
        })
        console.log(res)
        if (res.status = 201) {
            const  {message}  = res.data;
            console.log(res.data)
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message
                }
            })
        } else {
            if (res.status == 400) {
                  dispatch({
                    type:userConstants.USER_REGISTER_FAILURE,
                    payload:{error:res.data.error}
                  })

            }

        }


    }
}
