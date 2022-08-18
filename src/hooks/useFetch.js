import { useEffect, useState } from "react";
import paginate from "../utils/utils";

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // console.log(loading)
    // console.log(data)

    const getProducts = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(paginate(data));
        setLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, [])
    return {loading, data}
}