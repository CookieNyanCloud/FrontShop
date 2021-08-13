import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ShopMap from '../components/ShopMap'
import SelectedZone from '../components/SelectedZone'
import { useContext, useEffect } from "react";
import { GlobalContext } from '../context/GlobalState'




export  const Home = () => {

    const { handleCheckLog } = useContext(GlobalContext);

    useEffect(() => {
        handleCheckLog()
        // return () => {
            
        // }
    }, [])
    
    return (
        <div>
            <Hero>
                <Banner title="map" subtitle="event">
                    <p>jj</p>
                </Banner>
            </Hero>
            <ShopMap/>
            <SelectedZone/>
        </div>
    )
}

export default Home;