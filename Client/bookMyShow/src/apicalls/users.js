 
 
// const { axiosInstance } = require(".");
import { axiosInstance } from ".";
 
// Registering a new user 

export const RegisterUser = async (payload)=>{
    try {     

        console.log("payload",payload);

        const response=await axiosInstance.post('http://localhost:8002/api/users/register',payload);
        console.log("inside try of register users",response)
        return response.data
        
    } catch (error) {

        console.log("inside errror of register users",error)
        return error;
    }
}


export const LoginUser = async (payload)=>{

    try {

        const response=await axiosInstance.post('http://localhost:8002/api/users/login',payload)
        return response.data;
        

    } catch (error) {

        return error;
        
    }

}



