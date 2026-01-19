interface Props
{
    setStep: CallableFunction
}


export default (props: Props) => (
    <div className="card-body flex flex-col justify-between w-1/2">
        <div>
            <h2 className="card-title text-2xl">Istanbul Airport (IST) → Taksim Square</h2>
            <p>Private transfer</p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-10">
            {
                [
                    "Flight delay? We wait",
                    "Free cancellation up to 24h",
                    "Meet & greet inside the airport",
                    "Fixed price · up to 4 passengers",
                    "24/7 support via WhatsApp",
                    "Help with luggage included"
                ].map((included, index) =>
                    <p key={index} className="text-[1rem]"><span className="text-success" key={index}>✔</span>&nbsp;{included}</p>
                )
            }
        </div>
        <div>
            <div className="stats bg-base-300 w-full">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                            <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="stat-title">Distance</div>
                    <div className="stat-value">40km</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <div className="stat-title">Estimated</div>
                    <div className="stat-value">~55m</div>
                    <div className="stat-desc">Traffic included</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                            <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                            <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="stat-title">Fixed price</div>
                    <div className="stat-value">50€</div>
                    <div className="stat-desc">All included</div>
                </div>
            </div>
            <div className="card-actions justify-end mt-3">
                <button className="btn btn-neutral" onClick={() => props.setStep(2)}>Continue to booking</button>
            </div>
        </div>
    </div>
)