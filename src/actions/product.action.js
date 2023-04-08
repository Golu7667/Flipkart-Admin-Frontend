import axiosIntance from "../helpers/axios"

export const addProduct=form=>{
    return async dispatch=>{
        const res=await axiosIntance.post("product/create",form)
        console.log(res)
    }
}