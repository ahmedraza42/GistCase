import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addAllUserGist } from "../redux/actions/UserGist";
export const useAllGist= () => {
  const dispatch=useDispatch()
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
  
    const fetchGists = async () => {
        try {
          const response = await axios.get('https://api.github.com/gists/public');
          setData(response.data);
          dispatch(addAllUserGist(response.data))
         
        } catch (error) {
          console.error(error);
        }finally{
         setLoading(false)
        }
      };
   
    useEffect(() => {
        fetchGists();
    }, []);
  
    return { loading, data };
  };