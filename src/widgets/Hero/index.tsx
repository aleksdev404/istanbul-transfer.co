'use client'
import React from "react"
import { useEffect, useRef } from "react"


const trust = [
  "✈️ Flight delay? We wait",
  "🪧 Fixed price",
  "🚐 Licensed local drivers",
  "🗣️ English - speaking driver"
]


export default () => {

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let picker: import('pikaday') | null

    (async () => {
      const Pikaday = (await import("pikaday")).default;

      if (!inputRef.current) return;

      picker = new Pikaday({
        field: inputRef.current,
        format: "MM/DD/YYYY",
      });
    })();

    return () => {
      picker?.destroy?.();
    };
  }, []);

  return (
    <div
      className="hero bg-base-200 min-h-screen"
    >
      <div className="hero-content text-center">
        <div>
          <div>
            <h1 className="text-2xl sm:text-5xl font-bold text-start sm:text-center">Reliable Airport Transfers from IST & SAW</h1>
            <p className="py-6 text-start sm:text-center">
              Private airport transfers with fixed prices, meet & greet, and real-time flight tracking.
            </p>
          </div>
          <div className="card bg-base-100 border border-blue-100">
            <div className="card-body">
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <label className="input w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <input type="text" placeholder="From where" list="from-data" />
                </label>
                <datalist id="from-data">
                  <option value="Chocolate"></option>
                  <option value="Coconut"></option>
                  <option value="Mint"></option>
                  <option value="Strawberry"></option>
                  <option value="Vanilla"></option>
                </datalist>
                <label className="input w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <input type="text" placeholder="To where" list="from-data" />
                </label>
                <input
                  type="text"
                  className="input w-full pika-single"
                  placeholder="Arrival date"
                  ref={inputRef}
                  defaultValue={new Date().toLocaleDateString("en-GB").replace(/\//g, "/")}
                />
                <div className="join">
                  <input type="number" className="input w-full join-item" placeholder="Adult" />
                  <input type="number" className="input w-full join-item" placeholder="Child" />
                </div>
                <button className="btn btn-neutral">Get Price</button>
              </div>
            </div>
          </div>
          <div className="py-6 md:flex justify-center hidden">
            {
              trust.map((trustItem, index) =>
                <React.Fragment key={index}>
                  {trustItem}
                  {
                    (index + 1) !== trust.length && <div className="divider divider-horizontal"></div>
                  }
                </React.Fragment>
              )
            }
          </div>
          <div className="py-6 flex justify-center flex-wrap gap-3 md:hidden">
            <span className="text-rotate duration-5000">
              <span className="justify-items-center">
                {
                  trust.map((included, index) => <span key={index}>✔ {included}</span>)
                }
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
