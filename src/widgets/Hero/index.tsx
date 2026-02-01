'use client'
import { useEffect, useRef } from "react"

export default () => {

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

  return (
    <div
      className="hero bg-base-200 min-h-screen"
    >
      <div className="hero-content text-center">
        <div>
          <div>
            <h1 className="text-2xl sm:text-5xl font-bold text-start sm:text-center">Reliable Airport Transfers from IST & SAW</h1>
            <p className="py-6 text-start sm:text-center">
              Private transfers from Istanbul airports to hotels and city districts.
            </p>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <input type="text" placeholder="From" className="input w-full" defaultValue="Istanbul International Airport (IST)" list="from-data" />
                <datalist id="from-data">
                  <option value="Chocolate"></option>
                  <option value="Coconut"></option>
                  <option value="Mint"></option>
                  <option value="Strawberry"></option>
                  <option value="Vanilla"></option>
                </datalist>
                <input type="text" placeholder="Where" className="input w-full" defaultValue="Taksim square" />
                <input type="text" className="input w-full pika-single" defaultValue="Pick a date" ref={inputRef} />
                <div className="join">
                  <input type="number" className="input w-full join-item" placeholder="Adult" />
                  <input type="number" className="input w-full join-item" placeholder="Child" />
                </div>
                <button className="btn btn-neutral">Get Price</button>
              </div>
            </div>
          </div>
          <div className="py-6 md:flex justify-center hidden">
            ✔ Flight delay? We wait
            <div className="divider divider-horizontal"></div>
            ✔ Fixed price
            <div className="divider divider-horizontal"></div>
            ✔ 24/7 support
            <div className="divider divider-horizontal"></div>
            ✔ English-speaking driver
          </div>
          <div className="py-6 flex justify-center flex-wrap gap-3 md:hidden">
            <span className="text-rotate duration-5000">
              <span className="justify-items-center">
                {
                  [
                    "Free cancellation up to 24h",
                    "Fixed price · up to 4 passengers",
                    "24/7 support via WhatsApp",
                    "Help with luggage included"
                  ].map((included, index) => <span key={index}>✔ {included}</span>)

                }
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
