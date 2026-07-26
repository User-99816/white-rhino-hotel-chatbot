// ======================================================
// WHITE RHINO HOTEL
// PREMIUM TRANSFER SUMMARY
// PART 1
// ======================================================

import "./TransferSummary.css";

export default function TransferSummary({

    transfer,

    selectedVehicle,

    goBack,

    onConfirm

}) {

    if (!selectedVehicle) return null;

    const bookingNumber =
        "APT-" +
        Math.floor(
            100000 + Math.random() * 900000
        );

    return (

        <div className="summary-page">

            {/* =======================================
                HERO
            ======================================= */}

            <section className="summary-hero">

                <div className="hero-left">

                    <span className="summary-pill">

                        ✈ White Rhino Airport Transfer

                    </span>

                    <h1>

                        Review Your Booking

                    </h1>

                    <p>

                        Please review your transfer details before confirming
                        your reservation.

                    </p>

                </div>

                <div className="booking-reference">

                    <small>

                        Booking Reference

                    </small>

                    <h2>

                        {bookingNumber}

                    </h2>

                    <span>

                        Pending Confirmation

                    </span>

                </div>

            </section>

            {/* =======================================
                VEHICLE
            ======================================= */}

            <section className="vehicle-banner">

                <div className="vehicle-image">

                    <img
                        src={selectedVehicle.image}
                        alt={selectedVehicle.name}
                    />

                    <span className="vehicle-status">

                        Available

                    </span>

                </div>

                <div className="vehicle-details">

                    <span className="premium-label">

                        White Rhino Executive Fleet

                    </span>

                    <h2>

                        {selectedVehicle.name}

                    </h2>

                    <p>

                        Luxury chauffeur-driven airport transfer designed for
                        comfort, elegance and reliability.

                    </p>

                    <div className="vehicle-features">

                        <div>

                            👥

                            <strong>

                                {selectedVehicle.capacity}

                            </strong>

                            Guests

                        </div>

                        <div>

                            🧳

                            <strong>

                                {selectedVehicle.luggage}

                            </strong>

                            Bags

                        </div>

                        <div>

                            ❄ Air Conditioned

                        </div>

                        <div>

                            📶 Free Wi-Fi

                        </div>

                    </div>

                </div>

                <div className="vehicle-price">

                    <small>

                        Total Fare

                    </small>

                    <h1>

                        KSh {selectedVehicle.price.toLocaleString()}

                    </h1>

                    <span>

                        Fixed Hotel Rate

                    </span>

                </div>

            </section>

            {/* =======================================
                BOOKING DETAILS
            ======================================= */}

            <section className="summary-grid">

                {/* Guest */}

                <div className="summary-card">

                    <h3>

                        👤 Guest Information

                    </h3>

                    <div className="summary-item">

                        <span>Guest Name</span>

                        <strong>

                            {transfer.guest || "Not Provided"}

                        </strong>

                    </div>

                    <div className="summary-item">

                        <span>Passengers</span>

                        <strong>

                            {transfer.passengers}

                        </strong>

                    </div>

                    <div className="summary-item">

                        <span>Destination</span>

                        <strong>

                            White Rhino Hotel

                        </strong>

                    </div>

                    <div className="summary-item">

                        <span>Transfer Type</span>

                        <strong>

                            Airport Pickup

                        </strong>

                    </div>

                    <div className="summary-item">

                        <span>Status</span>

                        <span className="status-badge">

                            Awaiting Confirmation

                        </span>

                    </div>

                </div>

                {/* Flight */}

                <div className="summary-card">

                    <h3>

                        ✈ Flight Details

                    </h3>

                    <div className="summary-item">

                        <span>Airport</span>

                        <strong>

                            {transfer.airport}

                        </strong>

                    </div>

                    <div className="summary-item">

                        <span>Flight Number</span>

                        <strong>

                            {transfer.flight || "Pending"}

                        </strong>

                    </div>

                    <div className="summary-item">

                        <span>Airline</span>

                        <strong>

                            {transfer.airline || "Pending"}

                        </strong>

                    </div>

                    <div className="summary-item">

                        <span>Arrival Date</span>

                        <strong>

                            {transfer.arrivalDate || "Pending"}

                        </strong>

                    </div>

                </div>

                {/* Journey */}

                <div className="summary-card">

                    <h3>

                        🚘 Journey

                    </h3>

                    <div className="summary-item">

                        <span>Vehicle</span>

                        <strong>

                            {selectedVehicle.name}

                        </strong>

                    </div>

                    <div className="summary-item">

                        <span>Luggage</span>

                        <strong>

                            {transfer.luggage}

                        </strong>

                    </div>

                    <div className="summary-item">

                        <span>Pickup Point</span>

                        <strong>

                            JKIA Arrivals

                        </strong>

                    </div>

                    <div className="summary-item">

                        <span>Estimated Journey</span>

                        <strong>

                            2 hrs 30 mins

                        </strong>

                    </div>

                </div>

                {/* Notes */}

                <div className="summary-card">

                    <h3>

                        📝 Special Requests

                    </h3>

                    <div className="notes-box">

                        {

                            transfer.specialRequests ||

                            `No special requests have been added.

Your chauffeur will meet you inside the arrivals terminal holding a White Rhino Hotel welcome sign.

Flight delays are automatically monitored to ensure timely pickup.`

                        }

                    </div>

                </div>

            </section>
  
              {/* =======================================
                PREMIUM FARE SUMMARY
            ======================================= */}

            <section className="fare-card">

                <div className="fare-header">

                    <div>

                        <small>

                            Total Transfer Fare

                        </small>

                        <h1>

                            KSh {selectedVehicle.price.toLocaleString()}

                        </h1>

                        <p>

                            Fixed White Rhino Hotel Airport Transfer Rate

                        </p>

                    </div>

                    <span className="fare-badge">

                        Fixed Price

                    </span>

                </div>

                <div className="fare-divider"></div>

                <div className="fare-breakdown">

                    <div className="fare-row">

                        <span>Executive Vehicle</span>

                        <strong>

                            Included

                        </strong>

                    </div>

                    <div className="fare-row">

                        <span>Professional Chauffeur</span>

                        <strong>

                            Included

                        </strong>

                    </div>

                    <div className="fare-row">

                        <span>Airport Pickup</span>

                        <strong>

                            Included

                        </strong>

                    </div>

                    <div className="fare-row">

                        <span>Flight Monitoring</span>

                        <strong>

                            Included

                        </strong>

                    </div>

                    <div className="fare-row">

                        <span>Luggage Assistance</span>

                        <strong>

                            Included

                        </strong>

                    </div>

                    <div className="fare-row total">

                        <span>Total Amount</span>

                        <strong>

                            KSh {selectedVehicle.price.toLocaleString()}

                        </strong>

                    </div>

                </div>

            </section>

            {/* =======================================
                INCLUDED SERVICES
            ======================================= */}

            <section className="services-grid">

                <div className="service-card">

                    🚘

                    <h4>

                        Executive Vehicle

                    </h4>

                    <p>

                        Clean, luxury and fully air-conditioned vehicle.

                    </p>

                </div>

                <div className="service-card">

                    👨‍✈️

                    <h4>

                        Professional Chauffeur

                    </h4>

                    <p>

                        Experienced hotel driver for a safe journey.

                    </p>

                </div>

                <div className="service-card">

                    🧳

                    <h4>

                        Luggage Assistance

                    </h4>

                    <p>

                        Assistance from airport arrivals to hotel reception.

                    </p>

                </div>

                <div className="service-card">

                    📶

                    <h4>

                        Complimentary Wi-Fi

                    </h4>

                    <p>

                        Stay connected throughout your transfer.

                    </p>

                </div>

            </section>

            {/* =======================================
                HOTEL GUARANTEE
            ======================================= */}

            <section className="hotel-guarantee">

                <div className="guarantee-icon">

                    🛡

                </div>

                <div>

                    <h2>

                        White Rhino Hotel Guarantee

                    </h2>

                    <p>

                        Our chauffeur will monitor your flight, wait for your arrival,
                        assist with your luggage and ensure a comfortable journey
                        to White Rhino Hotel regardless of flight delays.

                    </p>

                </div>

            </section>

            {/* =======================================
                SECURITY
            ======================================= */}

            <section className="summary-footer">

                <div className="footer-card">

                    <div className="footer-icon">

                        🔒

                    </div>

                    <div>

                        <h3>

                            Secure Reservation

                        </h3>

                        <p>

                            Your booking information is securely processed and
                            protected by White Rhino Hotel.

                        </p>

                    </div>

                </div>

                <div className="footer-card">

                    <div className="footer-icon">

                        ☎

                    </div>

                    <div>

                        <h3>

                            Concierge Support

                        </h3>

                        <p>

                            Available 24 hours a day for any booking changes or
                            assistance before arrival.

                        </p>

                    </div>

                </div>

            </section>

            {/* =======================================
                ACTION BUTTONS
            ======================================= */}

            <section className="summary-actions">

                <button

                    className="edit-booking-btn"

                    onClick={goBack}

                >

                    ← Edit Booking

                </button>

                <button

                    className="confirm-booking-btn"

                    onClick={onConfirm}

                >

                    Confirm Airport Transfer →

                </button>

            </section>

            <div className="summary-note">

                ⭐ After confirmation, your chauffeur will be assigned automatically.
                You'll receive driver details, vehicle information and live tracking
                before pickup.

            </div>

        </div>

    );

}