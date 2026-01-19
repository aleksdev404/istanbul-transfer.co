'use client'
import { useState } from 'react'
import c from 'classnames'

import Step1 from './Step1'
import Step2 from './Step2'


export default () => {
    const [step, setStep] = useState(2)

    return <div
        className="hero bg-base-200 min-h-screen"
    >
        <div className="container p-4 md:p-6 lg:p-8">
            <div className="card card-side bg-base-100 max-w-300 h-[450px] mx-auto">
                {
                    step == 1 && <Step1 setStep={setStep}/>
                }
                {
                    step == 2 && <Step2 setStep={setStep}/>
                }
                <figure className="w-1/2 relative">
                    <div className="absolute top-0 right-0 w-auto p-5">
                        <span className="badge badge-soft badge-neutral">
                            Representative image
                        </span>
                    </div>
                    <img src='https://citioapp.com/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FzoXpF7NA9PJGSgF8n4OxPQ%2F9bc44938-63df-48a4-ddd9-c11adbf5ae00%2Fpublic&w=1920&q=70' alt='map' />
                </figure>
            </div>
            <div className="flex justify-center mt-10">
                <div>
                    <p className='text-center mb-3 text-xs'>Step {String(step)} of 4 · Takes less than 2 minutes</p>
                    <ul className="steps">
                        <li className={c('step', step >= 1 && 'step-success')}>Trip</li>
                        <li className={c('step', step >= 2 && 'step-success')}>Passenger</li>
                        <li className={c('step', step >= 3 && 'step-success')}>Payment</li>
                        <li className={c('step', step >= 4 && 'step-success')}>Instructions</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}