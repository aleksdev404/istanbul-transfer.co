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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div>
          <div>
            <h1 className="text-5xl font-bold">Book Your Transfer in Minutes</h1>
            <p className="py-6">
              Comfortable and reliable transfers from airports, hotels, and cities — no hidden fees, no stress.
            </p>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="grid grid-cols-5 gap-4">
                <input type="text" placeholder="From" className="input" defaultValue="Istanbul International Airport (IST)" />
                <input type="text" placeholder="Where" className="input" defaultValue="Taksim square"/>
                <input type="text" className="input pika-single" defaultValue="Pick a date" ref={inputRef} />
                <div className="join">
                  <input type="number" className="input join-item" placeholder="Adult" />
                  <input type="number" className="input join-item" placeholder="Child" />
                </div>
                <button className="btn btn-neutral">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
