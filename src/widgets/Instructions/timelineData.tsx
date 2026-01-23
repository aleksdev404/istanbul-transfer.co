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
                    After baggage claim, follow the signs to Exit 14.
                    Our colleagues will meet you there with a sign showing code H01.
                </p>
                <p>
                    You will receive the final meeting instructions via WhatsApp before arrival.
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
                    After meeting our colleague, you will be escorted to the vehicle parked
                    at the official pickup area.
                </p>
                <p>
                    Luggage assistance will be provided, and the destination will be confirmed
                    prior to departure.
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
