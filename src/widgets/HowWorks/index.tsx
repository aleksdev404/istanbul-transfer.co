'use client'
import Image from 'next/image'

import data from './data'

import car from './car.png'


type DataKey = keyof typeof data


export default () => {

    return (
        <div
            className="hero bg-base-200 py-10"
        >
            <div
                className="hero-content flex-col"
            >
                <h2 className="text-2xl sm:text-5xl text-start sm:text-center font-bold mb-10">How your transfer works?</h2>
                <ul className="timeline max-sm:timeline-compact timeline-vertical relative">
                    <Image
                        src={car}
                        alt='car'
                        className='absolute top-1/2 left-1/2 translate-x-[calc(-50%-300px)] -translate-y-1/2 h-[300px] w-auto hidden sm:block'
                    />
                    {
                        (Object.keys(data) as DataKey[]).map((key, index) =>
                            <li key={index}>
                                {
                                    index !== 0 && <hr />
                                }
                                {/* <div className="timeline-start">
                                    {data[key].value}
                                </div> */}
                                <div className="timeline-middle">
                                    <div
                                        className="badge badge-sm font-bold text-xl"
                                        style={{ aspectRatio: '1 / 1', height: '2.3rem' }}
                                    >{index + 1}</div>
                                </div>
                                <div className="ml-5 p-10 timeline-end timeline-box text-xl border border-blue-100">
                                    <p>
                                        <b>{data[key].title}</b>
                                    </p>
                                    <p>
                                        {data[key].desc}
                                    </p>
                                </div>
                                {
                                    (index + 1) !== Object.keys(data).length && <hr />
                                }
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}
