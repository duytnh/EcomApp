import axios from 'axios';
import { useEffect, useState } from 'react';

const UseFetch = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('http://192.168.1.11:3000/api/products/')
            setData(response.data)
            setIsLoading(false)
        } catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }
    return { data, isLoading, error, refetch }
}

export default UseFetch;
