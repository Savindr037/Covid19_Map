import React, { useEffect, useState } from 'react';
import './Covid19_map.css';
import img1 from './ashoka-chakra-png-46973.png';

const Covid19_map = () => {

    const [data, setData] = useState([])
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');

            const actualData = await res.json();
            setData(actualData.statewise[0]);
            console.log(actualData.statewise[0]);

        } catch (error) {
            console.log('error');
        }
    }

    useEffect(() => {
        getCovidData();

    }, [])


    return (
        <>
            <div className="homePageContainer">
                <h1 className='liveLogo'><div className="redDot"></div>Live</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER </h2>
                <div className="cardsContainer">
                    <div className="cardsRow1">
                        <div className="card country">
                            <div className="flagContainer">
                                <div className='saffron'>
                                    <p className="showContent"><span>OUR</span> COUNTRY</p>
                                </div>
                                <div className='white'>
                                    <div className="ashoka-chakraContainer">
                                        <img src={img1} alt="ashoka-chakra" className='ashoka-chakra' />
                                    </div>
                                </div>
                                <div className='darkGreen'>
                                    <h1 className="showContent">INDIA</h1>
                                </div>
                            </div>
                        </div>
                        <div className="card recovered">
                            <p><span>TOTAL</span> RECOVERED</p>
                            <h1>{data.recovered}</h1>
                        </div>
                        <div className="card confirmed">
                            <p><span>TOTAL</span> CONFIRMED</p>
                            <h1>{data.confirmed}</h1>
                        </div>
                    </div>
                    <div className="cardsRow2">
                        <div className="card death">
                            <p><span>TOTAL</span> DEATH</p>
                            <h1>{data.deaths}</h1>
                        </div>
                        <div className="card activeCard">
                            <p><span>TOTAL</span> ACTIVE</p>
                            <h1>{data.active}</h1>
                        </div>
                        <div className="card update">
                            <p><span>LAST</span> UPDATE</p>
                            <h1>{data.lastupdatedtime}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Covid19_map;