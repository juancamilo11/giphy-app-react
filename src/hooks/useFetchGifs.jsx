import { useEffect, useState } from 'react';
import fetchGifs from '../helpers/fetchGifs';

export const useFetchGifs = (category) => {
    
    const [state, setstate] = useState({
        data: [],
        loading:true
    })

    useEffect(() => {
        fetchGifs(category)
            .then(gifs => {
                setstate({
                    data:gifs,
                    loading:false
                });
            });
    }, [category]);

    return state;

}
