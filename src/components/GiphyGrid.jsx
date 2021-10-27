import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GiphyItem } from './GiphyItem';

export const GiphyGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h2 className="grid-title">{category}</h2>

            {loading ? 
                <p>Cargando...</p>
            :
                <div className="card-grid">
                    {
                        images.map(image => {
                             return (<GiphyItem 
                                key={image.id}
                                {...image}/>)
                        })
                    }

                </div>
            }

        </>
    )
}
