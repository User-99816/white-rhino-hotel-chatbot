// ======================================================
// WHITE RHINO HOTEL
// LIVE TRACKING
// PART 1
// ======================================================

import { useEffect, useState } from "react";

import "./LiveTracking.css";

export default function LiveTracking({

    transfer,

    driver,

    onComplete

}) {

    const [eta, setEta] = useState(8);

    // ==========================================
    // COUNTDOWN
    // ==========================================

    useEffect(() => {

        if (eta <= 0) return;

        const timer = setInterval(() => {

            setEta(previous => previous - 1);

        }, 6000);

        return () => clearInterval(timer);

    }, [eta]);

    // ==========================================
    // AUTO COMPLETE
    // ==========================================

    useEffect(() => {

        if (eta === 0) {

            setTimeout(() => {

                onComplete();

            }, 2000);

        }

    }, [eta, onComplete]);

    if (!transfer || !driver) {

        return null;

    }

    return (

        <div className="tracking-page">

            {/* ==============================
                HEADER
            ============================== */}

            <section className="tracking-header">

                <span className="tracking-pill">

                    LIVE TRACKING

                </span>

                <h1>

                    Your Chauffeur Is On The Way

                </h1>

                <p>

                    Follow your White Rhino Hotel chauffeur
                    in real time as they travel to your pickup
                    location.

                </p>

            </section>

            {/* ==============================
                MAP
            ============================== */}

            <section className="tracking-map">

                <div className="map-background">

                    🗺️

                </div>

                <div className="hotel-marker">

                    🏨

                </div>

                <div className="airport-marker">

                    ✈️

                </div>

                <div className="vehicle-marker">

                    🚘

                </div>

            </section>

            {/* ==============================
                DRIVER CARD
            ============================== */}

            <section className="tracking-driver-card">

                <div className="driver-avatar">

                    👨🏾‍✈️

                </div>

                <div className="driver-info">

                    <h2>

                        {driver.name}

                    </h2>

                    <p>

                        ⭐ {driver.rating}

                    </p>

                    <p>

                        🚗 {driver.vehicle}

                    </p>

                    <p>

                        🔢 {driver.registration}

                    </p>

                </div>

            </section>

                        {/* ==============================
                ETA CARD
            ============================== */}

            <section className="tracking-eta-card">

                <div className="eta-circle">

                    {eta}

                </div>

                <div className="eta-details">

                    <h2>

                        {eta > 0
                            ? `${eta} min`
                            : "Arrived"}

                    </h2>

                    <p>

                        Estimated arrival time

                    </p>

                </div>

            </section>

            {/* ==============================
                JOURNEY PROGRESS
            ============================== */}

            <section className="tracking-progress-card">

                <h2>

                    Journey Progress

                </h2>

                <div className="progress-line">

                    <div className="progress-fill"></div>

                </div>

                <div className="progress-labels">

                    <span>

                        Driver Assigned

                    </span>

                    <span>

                        On The Way

                    </span>

                    <span>

                        Pickup

                    </span>

                </div>

            </section>

            {/* ==============================
                TRANSFER DETAILS
            ============================== */}

            <section className="tracking-trip-card">

                <h2>

                    Transfer Information

                </h2>

                <div className="trip-row">

                    <span>

                        Booking Ref

                    </span>

                    <strong>

                        {transfer.reference}

                    </strong>

                </div>

                <div className="trip-row">

                    <span>

                        Guest

                    </span>

                    <strong>

                        {transfer.guest}

                    </strong>

                </div>

                <div className="trip-row">

                    <span>

                        Airport

                    </span>

                    <strong>

                        {transfer.airport}

                    </strong>

                </div>

                <div className="trip-row">

                    <span>

                        Flight

                    </span>

                    <strong>

                        {transfer.flight || "-"}

                    </strong>

                </div>

                <div className="trip-row">

                    <span>

                        Vehicle

                    </span>

                    <strong>

                        {transfer.vehicleName}

                    </strong>

                </div>

            </section>

            {/* ==============================
                DRIVER ACTIONS
            ============================== */}

            <section className="tracking-actions">

                <button

                    className="call-driver-btn"

                    onClick={() =>

                        window.open(

                            `tel:${driver.phone}`

                        )

                    }

                >

                    📞 Call Driver

                </button>

                <button

                    className="message-driver-btn"

                    onClick={() =>

                        alert(

                            "Messaging service coming soon."

                        )

                    }

                >

                    💬 Message Driver

                </button>

            </section>

            {/* ==============================
                HOTEL STATUS
            ============================== */}

            <section className="tracking-status-card">

                <div className="status-icon">

                    🏨

                </div>

                <div>

                    <h3>

                        White Rhino Concierge

                    </h3>

                    <p>

                        Your chauffeur has accepted your booking.
                        The hotel is monitoring your journey and
                        preparing for your arrival.

                    </p>

                </div>

            </section>

                        {/* ==============================
                ARRIVAL NOTICE
            ============================== */}

            {

                eta === 0 && (

                    <section className="arrival-card">

                        <div className="arrival-icon">

                            🎉

                        </div>

                        <h2>

                            Your Chauffeur Has Arrived

                        </h2>

                        <p>

                            Please meet your White Rhino Hotel
                            chauffeur at the designated pickup
                            point. We hope you enjoy your journey.

                        </p>

                    </section>

                )

            }

            {/* ==============================
                FOOTER
            ============================== */}

            <section className="tracking-footer">

                <p>

                    White Rhino Hotel • Premium Airport Transfer

                </p>

            </section>

        </div>

    );

}