import Step1 from './Step1'


export default () => {
    return <div
        className="hero bg-base-200 min-h-screen"
    >
        <div className="container p-4 md:p-6 lg:p-8">
            <div className="card card-side bg-base-100 max-w-300 mx-auto">
                <Step1/>
                <figure className="w-1/2">
                    <img src='https://citioapp.com/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FzoXpF7NA9PJGSgF8n4OxPQ%2F9bc44938-63df-48a4-ddd9-c11adbf5ae00%2Fpublic&w=1920&q=70' alt='map' />
                </figure>
            </div>
            <div className="flex justify-center mt-10">
                <div>
                    <p className='text-center mb-3 text-xs'>Step 1 of 4 · Takes less than 2 minutes</p>
                    <ul className="steps">
                        <li className="step step-neutral">Trip</li>
                        <li className="step">Contact</li>
                        <li className="step">Payment</li>
                        <li className="step">Instructions</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}