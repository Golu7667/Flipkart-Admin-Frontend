import { Action } from "@remix-run/router";
import { authConstants } from "../actions/constants";

const initState={
    token:'',
    user:{
        firstName:'',
        lastName:'',
        email:'',
        password:''
    },
    authenticate:false,
    authenticating:false,
    loading:false,
    error:null,
    message:''
};

export default (state=initState,action)=>{
    console.log(action)
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
                authenticating:true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state={
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                authenticate:true
            } 
            break;  
            case authConstants.LOGIN_FAILURE:
                state={
                    ...state,
                    
                } 
                break;
             case authConstants.LOGOUT_REQUEST:
                
             state={       
                   ...state,
                   loading:true
                }          
                break;
                case authConstants.LOGOUT_SUCCESS:
                
                state={       
                      ...initState,
                   }          
                   break;
                   case authConstants.LOGOUT_FAILURE:
                
                   state={       
                         ...state,
                         error:action.payload.error,
                         loading:false
                      }          
                      break;

    }
    return state
}