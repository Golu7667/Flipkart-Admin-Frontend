import axios from "axios"
import axiosIntance from "../helpers/axios"
export const getAllCategory=()=>{
    return async dispatch=>{
        const res=await axiosIntance.get('/category/getcategory')
        console.log(res)
    }
}