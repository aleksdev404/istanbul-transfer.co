'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import c from 'classnames'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'


export default () => {
    const [step, setStep] = useState(2)

    return <div
        className="hero bg-base-200 min-h-screen"
    >
        <div className="container p-4 flex flex-col md:p-6 lg:p-8 max-xl:max-w-full max-sm:h-full">
            <div className="card card-side bg-base-100 max-sm:w-full h-[475px] max-sm:flex-1 mx-auto">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="w-1/2 max-lg:w-full"
                    >
                        {step == 1 && <Step1 setStep={setStep} />}
                        {step == 2 && <Step2 setStep={setStep} />}
                        {step == 3 && <Step3 setStep={setStep} />}
                    </motion.div>
                </AnimatePresence>
                <figure className="w-1/2 relative max-lg:hidden">
                    <div className="absolute top-0 right-0 w-auto p-5">
                        <span className="badge badge-soft badge-neutral">
                            Representative image
                        </span>
                    </div>
                    <img src='https://citioapp.com/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FzoXpF7NA9PJGSgF8n4OxPQ%2F9bc44938-63df-48a4-ddd9-c11adbf5ae00%2Fpublic&w=1920&q=70' alt='map' />
                </figure>
            </div>
            <div className="flex justify-center mt-10 max-sm:mt-6">
                <div>
                    <p className='text-center mb-3 text-xs'>Step {String(step)} of 4 · Takes less than 2 minutes</p>
                    <ul className="steps">
                        <li className={c('step', step >= 1 && 'step-success')}>Trip</li>
                        <li className={c('step', step >= 2 && 'step-success')}>Passenger</li>
                        <li className={c('step', step >= 3 && 'step-success')}>Confirm</li>
                        <li className={c('step', step >= 4 && 'step-success')}>Instructions</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}