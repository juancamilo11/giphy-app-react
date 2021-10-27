import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiphyGrid } from './components/GiphyGrid';

export const GiphyApp = () => {
    
    const [categories, setCategories] = useState(['dragon']);    
    
    return (
        <>
            <h1 className="text-center mt-4">Giphy App</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => {
                        return (
                            <>
                                <GiphyGrid 
                                    key={category}
                                    category={category} />
                                <hr />
                            </>
                        )
                    })
                }
            </ol>

        </>
    )
}
