import * as React from 'react';
import { useState, useEffect } from 'react';
const FetchApi = () => {

    const [golobalData, setGolobalData] = useState({})

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://api.covidtracking.com/v1/us/current.json');
            const data = await response.json()

            delete data[0].date;
            delete data[0].hospitalizedCumulative;
            delete data[0].inIcuCurrently;
            delete data[0].inIcuCumulative;
            delete data[0].onVentilatorCurrently;
            delete data[0].onVentilatorCumulative;
            delete data[0].dateChecked;
            delete data[0].hospitalized;
            delete data[0].totalTestResults;
            delete data[0].lastModified;
            delete data[0].posNeg;
            delete data[0].deathIncrease;
            delete data[0].hospitalizedIncrease;
            delete data[0].negativeIncrease;
            delete data[0].positiveIncrease;
            delete data[0].totalTestResultsIncrease;
            delete data[0].hash;
            delete data[0].hospitalizedCurrently;
            delete data[0].recovered;
            delete data[0].total;

            console.log(data)
            setGolobalData(data[0])

        }
        getData()
    }, [])

    let keyValues = Object.keys(golobalData)

    return (
        <>
            <div className='container p-10 m-auto'>
                <div>
                    <h1 className='uppercase pb-5 font-bold text-3xl antialiased'>COVID-19 TRACKER</h1>
                </div>
                <div className='grid lg:grid-cols-5 gap-2'>
                    {keyValues.map((key, ind) => {

                        return (
                            <div className='flex flex-col bg-slate-200 h-40 w-60 justify-center items-center hover:bg-slate-300' key={ind}>
                                <h1 className='font-bold text-3xl antialiased uppercase'>{key}</h1>
                                <p className='uppercase pt-2'>{golobalData[key]}</p>
                            </div>
                        )

                    })}

                </div>
            </div>
        </>
    );
}

export default FetchApi;