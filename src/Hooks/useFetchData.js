import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetchData(path) {
    
    const [fetchData, setFetchData] = useState([]);
   
    const fetch = async () => {
        await axios.get(path).then( res => {
            const moviesData = res.data;
            setFetchData(moviesData);
        }
        )
    }

    useEffect(() => {
        fetch();
    },[])
   
    return (
        fetchData
    )
}


