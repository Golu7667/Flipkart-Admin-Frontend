import axiosIntance from "../helpers/axios"
import { categoryConstansts, initialDataConstansts, productConstants } from "./constants"

export const getInitailData=()=>{
   return async dispatch=>{
    
        const res=await axiosIntance.get('/initialData')
        console.log(res.status)
        if(res.status===200){
          const {categories,products}=res.data;
          dispatch({
            type:categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,
            payload:{categories}
          })
          dispatch({
            type:productConstants.GET_ALL_PRODUCTS_SUCCESS,
            payload:{products}
          })
        } 
       
   
   
   
   
    }



}