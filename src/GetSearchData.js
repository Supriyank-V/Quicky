import { useState, useEffect } from "react";
import API_KEY from './keys';

const CONTEXT_KEY = "268274106dd2bf234"

const FetchData = (term) => {
    const[data, setData] = useState(null);

    useEffect(() => {
        const fetchGoogleData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                )
                .then(res => res.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchGoogleData()
    }, [term])

    return {data}
}

export default FetchData