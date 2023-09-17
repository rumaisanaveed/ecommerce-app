import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
    const [ data, setData ] = useState(null);
    const [ fetchError, setFetchError ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        // isMounted means the component is created and inserted into the react DOM
        let isMounted = true;
        // cancel token helps to cancel a request 
        const source = axios.CancelToken.source();
        
        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken : source.token 
                });
                if (isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            }
            catch(err) {
                if (isMounted) {
                    // console.log(err);
                    setFetchError(err.message);
                    setData([]);
                }
            }
            finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        fetchData(dataUrl);

        // Cleanup function to avoid memory leaks 
        const cleanUp = () => {
            isMounted = false;
            source.cancel("Request cancelled after fetching the data.");
        }

        return cleanUp;

    }, [ dataUrl ])

    return { data, fetchError, isLoading }

}

export default useAxiosFetch;