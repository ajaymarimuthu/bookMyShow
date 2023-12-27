 
import { useDispatch, useSelector } from "react-redux"
import { GetCurrentUser } from "../apicalls/users"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/loadersSlice";
import { setUsers } from "../redux/usersSlice";
import { message } from "antd";

const ProtectedRoute = ({children}) => {

    const navigate=useNavigate();
    const dispatch=useDispatch()

    const user=useSelector((state)=>state?.users);
    console.log("user",user);


    const getPresentUser = async()=>{
        try {

            dispatch(showLoading());
            const response = await GetCurrentUser(); // api call 
            dispatch(hideLoading());

            if(response.success){
                dispatch(setUsers(response.data))
            }
            else{
                dispatch(setUsers(null));
                message.error(response.message);
                localStorage.removeItem("token");
                navigate("/login");
            }
            
        } catch (error) {
            dispatch(hideLoading());
            dispatch(setUsers(null));
            message.error(error.message);
     
        }
    }


    useEffect(() => {

        if(localStorage.getItem("token")){
            getPresentUser();
        }
        else{
            navigate("/login");
        }
      
    }, [])
    

  return (
    
        
 
        <div className="content mt-1 p-1"> {children} </div>
      
  )
}

export default ProtectedRoute