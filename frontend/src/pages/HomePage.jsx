import React from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import HomeMiddle from '../components/HomePage/HomeMiddle'
import Navbar from '../components/Navbar/Navbar'
import '../components/HomePage/HomePage.css'
import GeneralTop from '../components/GeneralTop'
// import bg4 from './../media/images/bg4.jpg'

export default function HomePage() {

    let item = GeneralTopData.HomePage

    return (
        <>
            <div className='home-main'>
                <GeneralTop item={item} />
                <HomeMiddle />
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}
