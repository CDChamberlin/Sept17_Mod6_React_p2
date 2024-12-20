import axios from "axios";
import { useEffect, useState } from "react";

export function useData(url) {
    const [data, setData] = useState(null);
    useEffect(() => {
        if (url) {
            let ignore = false;
            axios.get(url).then((response) => {
                // console.log(response)
                if (!ignore) {
                    setData(response.data);
                }
            });
            return () => {
                ignore = true;
            };
        }
    }, [url]);
    return data;
}
