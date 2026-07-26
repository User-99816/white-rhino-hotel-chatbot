// ======================================================
// WHITE RHINO HOTEL
// TRANSFER CONFIRMATION
// PART 1
// ======================================================

import "./TransferConfirmation.css";

export default function TransferConfirmation({

    transfer,

    onAssignDriver

}) {

    if (!transfer) {

        return (

            <div className="confirmation-empty">

                <h2>

                    No transfer found.

                </h2>

            </div>

        );

    }

    return (

        <div className="confirmation-page">

            {/* ======================================
                SUCCESS HERO
            ====================================== */}

            <section className="confirmation-hero">

                <div className="success-circle">

                    ✓

                </div>

                <span className="confirmation-pill">

                    BOOKING CONFIRMED

                </span>

                <h1>

                    Airport Transfer Confirmed

                </h1>

                <p>

                    Your airport transfer has been successfully reserved.
                    White Rhino Hotel is now preparing your chauffeur and
                    vehicle for pickup.

                </p>

            </section>

            {/* ======================================
                BOOKING REFERENCE
            ====================================== */}

            <section className="booking-card">

                <div className="booking-row">

                    <span>

                        Booking Reference

                    </span>

                    <strong>

                        {transfer.reference || "APT-248731"}

                    </strong>

                </div>

                <div className="booking-row">

                    <span>

                        Status

                    </span>

                    <strong className="status-success">

                        Confirmed

                    </strong>

                </div>

                <div className="booking-row">

                    <span>

                        Vehicle

                    </span>

                    <strong>

                        {transfer.vehicleName || "Executive Sedan"}

                    </strong>

                </div>

                <div className="booking-row">

                    <span>

                        Guest

                    </span>

                    <strong>

                        {transfer.guest}

                    </strong>

                </div>

            </section>

                        {/* ======================================
                TRANSFER DETAILS
            ====================================== */}

            <section className="transfer-card">

                <h2>

                    Transfer Details

                </h2>

                <div className="detail-row">

                    <span>

                        👤 Guest

                    </span>

                    <strong>

                        {transfer.guest}

                    </strong>

                </div>

                <div className="detail-row">

                    <span>

                        ✈ Airport

                    </span>

                    <strong>

                        {transfer.airport || "JKIA"}

                    </strong>

                </div>

                <div className="detail-row">

                    <span>

                        🛫 Flight

                    </span>

                    <strong>

                        {transfer.flight || "Not Provided"}

                    </strong>

                </div>

                <div className="detail-row">

                    <span>

                        📅 Arrival Date

                    </span>

                    <strong>

                        {transfer.arrivalDate || "Pending"}

                    </strong>

                </div>

                <div className="detail-row">

                    <span>

                        👥 Passengers

                    </span>

                    <strong>

                        {transfer.passengers}

                    </strong>

                </div>

                <div className="detail-row">

                    <span>

                        🧳 Luggage

                    </span>

                    <strong>

                        {transfer.luggage}

                    </strong>

                </div>

            </section>

            {/* ======================================
                DRIVER STATUS
            ====================================== */}

            <section className="driver-status-card">

                <div className="driver-icon">

                    👨‍✈️

                </div>

                <div>

                    <h3>

                        Chauffeur Assignment

                    </h3>

                    <p>

                        A professional White Rhino Hotel chauffeur
                        will be assigned shortly.

                    </p>

                    <span className="driver-status">

                        Awaiting Assignment

                    </span>

                </div>

            </section>

            {/* ======================================
                BOOKING PROGRESS
            ====================================== */}

            <section className="timeline-card">

                <h2>

                    Booking Progress

                </h2>

                <div className="timeline">

                    <div className="timeline-item completed">

                        <div className="timeline-dot">

                            ✓

                        </div>

                        <div>

                            <h4>

                                Booking Confirmed

                            </h4>

                            <p>

                                Your airport transfer has been successfully reserved.

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item active">

                        <div className="timeline-dot">

                            ⏳

                        </div>

                        <div>

                            <h4>

                                Driver Assignment

                            </h4>

                            <p>

                                Our dispatch team is assigning your chauffeur.

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="timeline-dot">

                            🚘

                        </div>

                        <div>

                            <h4>

                                Vehicle Preparation

                            </h4>

                            <p>

                                Your selected vehicle will be prepared.

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="timeline-dot">

                            📍

                        </div>

                        <div>

                            <h4>

                                Live Tracking

                            </h4>

                            <p>

                                Track your chauffeur in real time before pickup.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

                        {/* ======================================
                HOTEL CONCIERGE
            ====================================== */}

            <section className="concierge-card">

                <h2>

                    White Rhino Concierge Services

                </h2>

                <div className="concierge-list">

                    <div className="concierge-item">

                        <div className="concierge-icon">

                            🛬

                        </div>

                        <div>

                            <h4>

                                Flight Monitoring

                            </h4>

                            <p>

                                We continuously monitor your flight for delays
                                and arrival updates.

                            </p>

                        </div>

                    </div>

                    <div className="concierge-item">

                        <div className="concierge-icon">

                            🧳

                        </div>

                        <div>

                            <h4>

                                Luggage Assistance

                            </h4>

                            <p>

                                Our chauffeur will assist with all luggage upon
                                arrival.

                            </p>

                        </div>

                    </div>

                    <div className="concierge-item">

                        <div className="concierge-icon">

                            ⏱

                        </div>

                        <div>

                            <h4>

                                Complimentary Waiting

                            </h4>

                            <p>

                                Enjoy free waiting time should your flight be
                                delayed.

                            </p>

                        </div>

                    </div>

                    <div className="concierge-item">

                        <div className="concierge-icon">

                            ☎

                        </div>

                        <div>

                            <h4>

                                24/7 Concierge Support

                            </h4>

                            <p>

                                Hotel reception remains available throughout
                                your journey.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ======================================
                HOTEL GUARANTEE
            ====================================== */}

            <section className="guarantee-card">

                <div className="guarantee-badge">

                    🛡

                </div>

                <div>

                    <h3>

                        White Rhino Booking Guarantee

                    </h3>

                    <p>

                        Your chauffeur will receive your booking immediately.
                        We monitor your flight, prepare your vehicle, and ensure
                        timely pickup from the airport.

                    </p>

                </div>

            </section>

            {/* ======================================
                ACTION BUTTONS
            ====================================== */}

            <div className="confirmation-actions">

                <button

                    className="secondary-btn"

                    type="button"

                >

                    Download Receipt

                </button>

                <button

                    className="primary-btn"

                    type="button"

                    onClick={onAssignDriver}

                >

                    Assign Driver →

                </button>

            </div>

        </div>

    );

}