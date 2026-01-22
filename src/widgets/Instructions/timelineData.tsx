export default {
    arrival: {
      value: "20:00",
      title: "Arrival",
      content: (
        <>
          <p>
            After your flight lands, the driver monitors the actual arrival time in real time.
            If your flight is delayed, the pickup time is adjusted automatically.
          </p>
          <p>
            Once you exit the aircraft, proceed through passport control and baggage claim as usual.
          </p>
        </>
      ),
    },
  
    meet: {
      value: "~1hr",
      title: "Meet & Greet",
      content: (
        <>
          <p>
            After baggage claim, the driver will meet you inside the arrivals hall.
            You will be greeted personally and assisted to the vehicle if needed.
          </p>
          <p>
            The exact meeting point will be confirmed via WhatsApp shortly before your arrival.
          </p>
        </>
      ),
    },
  
    pickup: {
      value: "~15min",
      title: "Pick-up",
      content: (
        <>
          <p>
            Once you meet the driver, you’ll walk together to the vehicle parked
            at the official pickup area.
          </p>
          <p>
            The driver will help with luggage and confirm the destination before departure.
          </p>
        </>
      ),
    },
  
    road: {
      value: "~40min",
      title: "Road trip",
      content: (
        <>
          <p>
            The transfer is private and direct, with no additional stops.
            The route and price are fixed in advance.
          </p>
          <p>
            If you need assistance during the ride, support is available via WhatsApp.
          </p>
        </>
      ),
    },
  } as const
  