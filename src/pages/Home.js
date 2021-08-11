import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ShopMap from '../components/ShopMap'
import SelectedZone from '../components/SelectedZone'
import { GlobalContext } from '../context/GlobalState'
import { useContext} from "react";


// import { Link } from 'react-router-dom'

export  const Home = () => {

    // const {handleZones} = useContext(GlobalContext);

    // handleZones()
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