import { useState, useEffect } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    setError('Fetch failed');
                    setLoading(false);
                    return;
                }

                const contentType = res.headers.get("content-type");

                if (contentType && contentType.includes("application/json")) {
                    // If the response is JSON, parse it
                    const result = await res.json();
                    setData(result.data);
                } else {
                    // If the response is not JSON, handle it accordingly
                    // For example, you might want to set data to the raw response text
                    setData(await res.text());
                }

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    // Return the object with data, error, and loading properties
    return {
        data,
        error,
        loading
    };
};

export default UseFetch;
