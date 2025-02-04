import React from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import HomeMiddle from '../components/HomePage/HomeMiddle'
import Navbar from '../components/Navbar/Navbar'
import GeneralTop from '../components/GeneralTop'
import '../components/Archive/Archive.css'

export default function Archive() {
    
    let item = GeneralTopData.Archive
    let imgsrc = item.imgsrc

    return (
        <>
            <div className='archive-main' style={{backgroundImage: `url(${imgsrc})`}}>
                <GeneralTop item={item} />
                <HomeMiddle />
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}
