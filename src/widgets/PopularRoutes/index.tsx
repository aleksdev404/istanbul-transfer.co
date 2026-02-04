import data from './data'

export default () => {

    return (
        <div
            className="hero bg-base-200 py-10"
        >
            <div
                className="hero-content flex-col"
            >
                <h2 className="text-2xl sm:text-5xl text-start sm:text-center font-bold mb-10">Popular routes</h2>
                <div className="grid gap-3 sm:gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
                    {
                        Array.from(Array(9)).map((_, index) =>
                            <a key={index} href='#' className="card bg-white">
                                <div className="card-body">
                                    <div className="flex gap-5">
                                        <div className="flex gap-3 items-center">
                                            Istanbul Airport
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                            Sabiha Gokcen Airport Transfer
                                        </div>
                                        <button className="btn btn-xs btn-success">
                                            50$
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
