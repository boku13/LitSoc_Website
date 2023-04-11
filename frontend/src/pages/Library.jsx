import React from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import Navbar from '../components/Navbar/Navbar'
import '../components/Library/Library.css'
import GeneralTop from '../components/GeneralTop'
import LibraryMain from '../components/Library/LibraryMain'

export default function Library() {
  
    let item = GeneralTopData.Library
    let imgsrc = item.imgsrc

    return (
        <>
            <div className='library-main' style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0)), url(${imgsrc})`}}>
                <GeneralTop item={item} />
                <LibraryMain />
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}
