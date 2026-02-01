import c from "classnames"

import statsData from './statsData'


interface Props {
    setStep: CallableFunction
}


export default (props: Props) => (
    <div className="card-body flex flex-col justify-between h-full">
        <div>
            <div className="flex flex-col gap-3 sm:hidden">
                <label className="label">From airport</label>
                <label className="input input-lg input-success w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>
                    <input type="search" readOnly value="Istanbul Airport (IST)" />
                </label>
                <label className="label">To destination</label>
                <label className="input input-lg input-success w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>
                    <input type="search" readOnly value="Taksim" />
                </label>
            </div>
            <h2 className="card-title hidden sm:block">
                <span className="max-sm:block">
                    Istanbul Airport (IST)
                </span>
                <span className="">
                    →
                </span>
                <span className="max-sm:block">
                    Taksim Square
                </span>
            </h2>
            <p className="max-sm:hidden">Private transfer</p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-10 max-sm:grid-cols-1">
            {
                [
                    "Meet & greet at airport",
                    "Flight delay? We wait",
                ].map((included, index) =>
                    <p key={index} className="text-lg sm:text-[1rem] font-bold"><span className="text-success" key={index}>✔</span>&nbsp;{included}</p>
                )
            }
            {
                [
                    "Free cancellation up to 24h",
                    "Fixed price · up to 4 passengers",
                    "24/7 support via WhatsApp",
                    "Help with luggage included"
                ].map((included, index) =>
                    <p key={index} className="text-lg sm:text-[1rem]"><span className="text-success" key={index}>✔</span>&nbsp;{included}</p>
                )
            }
        </div>
        <div>
            <div className="stats bg-base-300 w-full">
                {statsData.map((stat, i) => (
                    <div key={i} className={c("stat", i == 0 && "max-sm:hidden")}>
                        <div className="stat-figure text-secondary size-7 max-md:hidden max-lg:block max-xl:hidden">{stat.icon}</div>
                        {stat.title && <div className="stat-title">{stat.title}</div>}
                        <div className="stat-value">{stat.value}</div>
                        {stat.desc && <div className="stat-desc">{stat.desc}</div>}
                    </div>
                ))}
            </div>
            <div className="card-actions justify-end mt-3">
                <button className="btn btn-xl sm:btn-md btn-neutral w-full sm:w-fit" onClick={() => props.setStep(2)}>Continue to booking</button>
            </div>
        </div>
    </div>
)