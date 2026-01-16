export default () => {
    return <div
        className="hero bg-base-200 min-h-screen"
        style={{
            backgroundImage:
                "url(https://images.unsplash.com/photo-1582631608254-f75fdf938e19?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXRhJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D)",
        }}
    >
        <div className="container p-4 md:p-6 lg:p-8">
            <div className="card card-side bg-base-100">
                <div className="card-body">
                    {/* <h2 className="card-title">New movie is released!</h2> */}
                    {/* <p>Click the button to watch on Jetflix app.</p> */}
                    <div className="stats bg-base-300">
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
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
                            <div className="stat-title">Time</div>
                            <div className="stat-value">45min</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                    <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                                    <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div className="stat-title">Price</div>
                            <div className="stat-value">50€</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-neutral">BOOK NOW</button> */}
                    </div>
                </div>
                <figure className="w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1582631608254-f75fdf938e19?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsYXRhJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D"
                        alt="Movie" />
                </figure>
            </div>
        </div>
    </div>
}