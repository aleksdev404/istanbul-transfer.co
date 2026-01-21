'use client'

import { useEffect, useRef } from "react"


interface Props {
    setStep: CallableFunction
}

export default (props: Props) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {

        let picker: import('pikaday') | null

        (async () => {
            const Pikaday = (await import("pikaday")).default;

            if (!inputRef.current) return;

            picker = new Pikaday({
                field: inputRef.current,
                format: "YYYY-MM-DD",
            });
        })();

        return () => {
            picker?.destroy?.();
        };
    }, []);

    return <div className="card-body flex flex-col justify-between h-full">
        <div>
            <div className="mb-6">
                <a href='#' className="flex items-center gap-2 link">
                    IST → Taksim (~55 min)
                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>

                </a>
                <h2 className="card-title text-2xl">Passenger details</h2>
                <p>Required to confirm pickup and airport access</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <fieldset className="fieldset !px-0">
                    <legend className="fieldset-legend mb-1">Your full name</legend>
                    <input type="text" className="input input-sm" placeholder="ex. Alex" />
                </fieldset>
                <fieldset className="fieldset !px-0">
                    <legend className="fieldset-legend mb-1">Hotel</legend>
                    <input type="text" className="input input-sm" placeholder="ex. Radisson Blue" />
                </fieldset>
                <fieldset className="fieldset !px-0">
                    <legend className="fieldset-legend mb-1">Pick-up date (arrival date)</legend>
                    <input type="text" className="input pika-single input-sm" defaultValue="Pick a date" ref={inputRef} />
                </fieldset>
                <fieldset className="fieldset !px-0">
                    <legend className="fieldset-legend mb-1">Flight code</legend>
                    <input type="text" placeholder="ex. TK1207" className="input input-sm" />
                    <p className="label">Used to track delays and adjust pickup time</p>
                </fieldset>
                <fieldset className="fieldset !px-0">
                    <legend className="fieldset-legend mb-1">Passengers</legend>
                    <div className="join">
                        <input type="number" className="input input-sm join-item" placeholder="Adult" />
                        <input type="number" className="input input-sm join-item" placeholder="Child" />
                    </div>
                </fieldset>
            </div>
        </div>
        <div className="card-actions justify-end mt-3">
            <button className="btn btn-ghost link" onClick={() => props.setStep(1)}>Back to details</button>
            <button className="btn btn-success" onClick={() => props.setStep(3)}>Continue to confirm</button>
        </div>
    </div>
}