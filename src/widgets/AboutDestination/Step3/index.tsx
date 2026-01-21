'use client'
import { useState } from 'react'

import Select from './Select'
import Whatsapp from './Whatsapp'

interface Props {
    setStep: CallableFunction
}

export default (props: Props) => {

    const [method, setMethod] = useState("whatsapp")

    return <div className="card-body w-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-6 h-full">
            <div>
                <a href='#' className="flex items-center gap-2 link">
                    IST → Taksim (~55 min)
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>
                </a>
                <h2 className="card-title text-2xl">
                    { !method && "How would you like to confirm your booking?" }
                    { method == "whatsapp" && <>
                        Awaiting confirmation
                        <div className="inline-grid *:[grid-area:1/1]">
                            <div className="status status-success animate-ping"></div>
                            <div className="status status-success"></div>
                        </div>
                    </> }
                </h2>
                { method == "whatsapp" &&
                    <p className='mt-5'>We’ve received your booking request. To confirm availability and finalize the transfer, please contact us on WhatsApp. Confirmation usually takes a few minutes.</p>
                }
            </div>
            <div className="flex flex-col gap-2 h-full">
                { !method && <Select setMethod={setMethod}/> }
                { method == "whatsapp" && <Whatsapp/> }
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="card-actions justify-end mt-3">
                <button className="btn btn-ghost link" onClick={() => props.setStep(2)}>Back to passengers</button>
            </div>
        </div>
    </div>
}