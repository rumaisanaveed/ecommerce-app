import { useState, useEffect } from "react";
import { items } from "../data/db";

const useAxiosFetch = () => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = () => {
      setIsLoading(true);
      try {
        if (isMounted) {
          setData(items);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
