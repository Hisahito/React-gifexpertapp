import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { categoria } ) => {

    const {data:images, loading} = useFetchGifs( categoria );


  return (
    <>
        <h3 className="card animate__animated animate__bounce"> {categoria} </h3>
        { loading && <p className='card animate__animated animate__bounce'>Loading</p> }

        
        <div className='card-grid'>
            {
                images.map( img => (
                <GifGridItem 
                    key={ img.id }
                    {...img }
                 />
                ))
            }
        
        </div>
    </>
  )
}
