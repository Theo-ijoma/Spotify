import React from 'react'
import Navbar from  './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import SongItem from './SongItem'

const DisplayHome = () => {

  return (
    <>
    <Navbar />
    <div className='my-5 font-bold text-2xl'>
    <h1 className='my-5 font-bold'>Featured Charts</h1>
    <div className='flex overflow-x-hidden'>
   {albumsData.map((item, index)=> (<Albumitem key={index} name={item.name} id={item.id} desc={item.desc} image={item.image}/>))}
    </div>

    <div className='flex overflow-x-hidden'> 
      {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>

  
    </div>
    </>
     )
}

export default DisplayHome