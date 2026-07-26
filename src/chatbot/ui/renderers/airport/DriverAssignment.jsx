// ======================================================
// WHITE RHINO HOTEL
// DRIVER ASSIGNMENT
// PART 1
// ======================================================

import "./DriverAssignment.css";

export default function DriverAssignment({

    transfer,

    driver,

    onCall,

    onTrack,

    onComplete,

    onBack

}) {

    // ======================================
    // SAFETY
    // ======================================

    if (!transfer) {

        return (

            <div className="driver-loading">

                <h2>

                    Transfer not found.

                </h2>

            </div>

        );

    }

    if (!driver) {

        return (

            <div className="driver-loading">

                <div className="loading-spinner"></div>

                <h2>

                    Assigning Your Chauffeur...

                </h2>

                <p>

                    White Rhino Hotel is locating the nearest
                    available professional chauffeur.

                </p>

            </div>

        );

    }

    return (

        <div className="driver-page">

            {/* ======================================
                HEADER
            ====================================== */}

            <section className="driver-hero">

                <div className="driver-success">

                    🚘

                </div>

                <span className="driver-badge">

                    DRIVER ASSIGNED

                </span>

                <h1>

                    Your Chauffeur Is Ready

                </h1>

                <p>

                    Your airport transfer has been assigned to one of
                    our professional hotel chauffeurs.

                </p>

            </section>

            {/* ======================================
                DRIVER CARD
            ====================================== */}

            <section className="driver-card">

                <div className="driver-avatar">

                    👨🏾‍✈️

                </div>

                <div className="driver-info">

                    <h2>

                        {driver.name}

                    </h2>

                    <div className="rating">

                        ⭐ {driver.rating}

                    </div>

                    <div className="driver-meta">

                        <span>

                            📞 {driver.phone}

                        </span>

                        <span>

                            🚗 {driver.vehicle}

                        </span>

                        <span>

                            🔖 {driver.registration}

                        </span>

                    </div>

                </div>

            </section>

            {/* ======================================
                ETA
            ====================================== */}

            <section className="eta-card">

                <div className="eta-icon">

                    ⏱

                </div>

                <div>

                    <small>

                        Estimated Arrival

                    </small>

                    <h2>

                        {driver.eta}

                    </h2>

                    <p>

                        Your chauffeur is travelling to the pickup
                        location.

                    </p>

                </div>

            </section>

            {/* ======================================
                TRANSFER SUMMARY
            ====================================== */}

            <section className="transfer-summary-card">

                <h2>

                    Transfer Summary

                </h2>

                <div className="summary-row">

                    <span>

                        Booking Reference

                    </span>

                    <strong>

                        {transfer.reference}

                    </strong>

                </div>

                <div className="summary-row">

                    <span>

                        Guest

                    </span>

                    <strong>

                        {transfer.guest}

                    </strong>

                </div>

                <div className="summary-row">

                    <span>

                        Airport

                    </span>

                    <strong>

                        {transfer.airport}

                    </strong>

                </div>

                <div className="summary-row">

                    <span>

                        Flight

                    </span>

                    <strong>

                        {transfer.flight || "Pending"}

                    </strong>

                </div>

                <div className="summary-row">

                    <span>

                        Vehicle

                    </span>

                    <strong>

                        {transfer.vehicleName}

                    </strong>

                </div>

                <div className="summary-row">

                    <span>

                        Status

                    </span>

                    <strong className="status-assigned">

                        Driver Assigned

                    </strong>

                </div>

            </section>

                        {/* ======================================
                TRIP PROGRESS
            ====================================== */}

            <section className="trip-progress-card">

                <h2>

                    Journey Progress

                </h2>

                <div className="timeline">

                    <div className="timeline-item completed">

                        <div className="timeline-dot">

                            ✓

                        </div>

                        <div>

                            <h4>

                                Transfer Confirmed

                            </h4>

                            <p>

                                Your booking has been successfully confirmed.

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item completed">

                        <div className="timeline-dot">

                            👨🏾‍✈️

                        </div>

                        <div>

                            <h4>

                                Driver Assigned

                            </h4>

                            <p>

                                {driver.name} has accepted your booking.

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item active">

                        <div className="timeline-dot">

                            🚘

                        </div>

                        <div>

                            <h4>

                                Driver En Route

                            </h4>

                            <p>

                                Your chauffeur is travelling to the pickup point.

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="timeline-dot">

                            📍

                        </div>

                        <div>

                            <h4>

                                Pickup

                            </h4>

                            <p>

                                You'll be picked up at your selected location.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ======================================
                HOTEL GUARANTEE
            ====================================== */}

            <section className="guarantee-card">

                <div className="guarantee-icon">

                    🛡

                </div>

                <div>

                    <h3>

                        White Rhino Transfer Guarantee

                    </h3>

                    <p>

                        Your chauffeur continuously receives live trip
                        updates. If your flight is delayed, we automatically
                        adjust your pickup schedule at no additional charge.

                    </p>

                </div>

            </section>

            {/* ======================================
                ACTION BUTTONS
            ====================================== */}

            <div className="driver-actions">

                <button

                    className="secondary-btn"

                    type="button"

                    onClick={() => onCall?.(driver)}

                >

                    📞 Call Driver

                </button>

                <button

                    className="secondary-btn"

                    type="button"

                    onClick={() => onTrack?.(driver)}

                >

                    📍 Track Driver

                </button>

                <button

                    className="primary-btn"

                    type="button"

                    onClick={onComplete}

                >

                    Driver Arrived →

                </button>

                <button

                    className="back-btn"

                    type="button"

                    onClick={onBack}

                >

                    ← Back

                </button>

            </div>

        </div>

    );

}