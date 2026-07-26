// ======================================================
// WHITE RHINO HOTEL
// PREMIUM AIRPORT TRANSFER FORM
// PART 1
// ======================================================

import "./TransferForm.css";

export default function TransferForm({

    selectedVehicle,

    transfer,

    updateField,

    goBack,

    onContinue

}) {

    if (!selectedVehicle) {

        return (

            <div className="transfer-empty">

                <h2>No vehicle selected</h2>

                <button

                    className="back-btn"

                    onClick={goBack}

                >

                    ← Back

                </button>

            </div>

        );

    }

    // ======================================
    // VALIDATION
    // ======================================

    function continueBooking() {

        if (!transfer.guest.trim()) {

            alert("Please enter guest name.");

            return;

        }

        if (!transfer.phone?.trim()) {

            alert("Please enter phone number.");

            return;

        }

        if (!transfer.arrivalDate) {

            alert("Please choose arrival date.");

            return;

        }

        onContinue();

    }

    return (

        <div className="transfer-page">

            {/* =====================================
                    HEADER
            ====================================== */}

            <div className="transfer-header">

                <button

                    className="back-btn"

                    onClick={goBack}

                >

                    ← Change Vehicle

                </button>

                <div>

                    <h1>

                        Airport Transfer Booking

                    </h1>

                    <p>

                        Complete your airport transfer details.

                    </p>

                </div>

            </div>

            {/* =====================================
                    PROGRESS
            ====================================== */}

            <div className="progress-bar">

                <div className="progress-step active">

                    <div className="progress-circle">

                        ✓

                    </div>

                    <span>

                        Vehicle

                    </span>

                </div>

                <div className="progress-line active"></div>

                <div className="progress-step active">

                    <div className="progress-circle">

                        2

                    </div>

                    <span>

                        Passenger

                    </span>

                </div>

                <div className="progress-line"></div>

                <div className="progress-step">

                    <div className="progress-circle">

                        3

                    </div>

                    <span>

                        Review

                    </span>

                </div>

            </div>

            {/* =====================================
                    VEHICLE CARD
            ====================================== */}

            <div className="vehicle-card">

                <img

                    src={selectedVehicle.image}

                    alt={selectedVehicle.name}

                />

                <div className="vehicle-info">

                    <span className="vehicle-tag">

                        PREMIUM TRANSFER

                    </span>

                    <h2>

                        {selectedVehicle.name}

                    </h2>

                    <div className="vehicle-meta">

                        <span>

                            👥 {selectedVehicle.capacity} Guests

                        </span>

                        <span>

                            🧳 {selectedVehicle.luggage} Bags

                        </span>

                    </div>

                    <h3>

                        KSh {selectedVehicle.price.toLocaleString()}

                    </h3>

                </div>

            </div>

            {/* =====================================
                    PASSENGER INFORMATION
            ====================================== */}

            <div className="form-card">

                <h2>

                    Passenger Information

                </h2>

                <p>

                    Please provide your travel details.

                </p>

                <div className="form-group">

                    <label>

                        Guest Name

                    </label>

                    <input

                        type="text"

                        placeholder="John Doe"

                        value={transfer.guest}

                        onChange={(e)=>

                            updateField(

                                "guest",

                                e.target.value

                            )

                        }

                    />

                </div>

                <div className="form-group">

                    <label>

                        Phone Number

                    </label>

                    <input

                        type="tel"

                        placeholder="+254712345678"

                        value={transfer.phone || ""}

                        onChange={(e)=>

                            updateField(

                                "phone",

                                e.target.value

                            )

                        }

                    />

                </div>

                <div className="form-group">

                    <label>

                        Airport

                    </label>

                    <select

                        value={transfer.airport}

                        onChange={(e)=>

                            updateField(

                                "airport",

                                e.target.value

                            )

                        }

                    >

                        <option>

                            JKIA

                        </option>

                        <option>

                            Wilson Airport

                        </option>

                    </select>

                </div>

                                {/* =====================================
                        FLIGHT INFORMATION
                ====================================== */}

                <div className="two-column">

                    <div className="form-group">

                        <label>

                            Flight Number

                        </label>

                        <input

                            type="text"

                            placeholder="KQ417"

                            value={transfer.flight}

                            onChange={(e)=>

                                updateField(

                                    "flight",

                                    e.target.value

                                )

                            }

                        />

                    </div>

                    <div className="form-group">

                        <label>

                            Airline

                        </label>

                        <input

                            type="text"

                            placeholder="Kenya Airways"

                            value={transfer.airline}

                            onChange={(e)=>

                                updateField(

                                    "airline",

                                    e.target.value

                                )

                            }

                        />

                    </div>

                </div>

                <div className="form-group">

                    <label>

                        Arrival Date

                    </label>

                    <input

                        type="date"

                        value={transfer.arrivalDate}

                        onChange={(e)=>

                            updateField(

                                "arrivalDate",

                                e.target.value

                            )

                        }

                    />

                </div>

            </div>

            {/* =====================================
                    TRAVEL DETAILS
            ====================================== */}

            <div className="form-card">

                <h2>

                    Travel Details

                </h2>

                <p>

                    Tell us about your journey.

                </p>

                {/* Passengers */}

                <div className="counter-card">

                    <div>

                        <h4>

                            Passengers

                        </h4>

                        <small>

                            Number of guests travelling

                        </small>

                    </div>

                    <div className="counter">

                        <button

                            type="button"

                            onClick={()=>

                                transfer.passengers > 1 &&

                                updateField(

                                    "passengers",

                                    transfer.passengers - 1

                                )

                            }

                        >

                            −

                        </button>

                        <span>

                            {transfer.passengers}

                        </span>

                        <button

                            type="button"

                            onClick={()=>

                                updateField(

                                    "passengers",

                                    transfer.passengers + 1

                                )

                            }

                        >

                            +

                        </button>

                    </div>

                </div>

                {/* Luggage */}

                <div className="counter-card">

                    <div>

                        <h4>

                            Luggage

                        </h4>

                        <small>

                            Number of bags

                        </small>

                    </div>

                    <div className="counter">

                        <button

                            type="button"

                            onClick={()=>

                                transfer.luggage > 0 &&

                                updateField(

                                    "luggage",

                                    transfer.luggage - 1

                                )

                            }

                        >

                            −

                        </button>

                        <span>

                            {transfer.luggage}

                        </span>

                        <button

                            type="button"

                            onClick={()=>

                                updateField(

                                    "luggage",

                                    transfer.luggage + 1

                                )

                            }

                        >

                            +

                        </button>

                    </div>

                </div>

                {/* Child Seat */}

                <div className="switch-card">

                    <div>

                        <h4>

                            Child Seat

                        </h4>

                        <small>

                            Complimentary child safety seat

                        </small>

                    </div>

                    <label className="switch">

                        <input

                            type="checkbox"

                            checked={transfer.childSeat || false}

                            onChange={(e)=>

                                updateField(

                                    "childSeat",

                                    e.target.checked

                                )

                            }

                        />

                        <span className="slider"></span>

                    </label>

                </div>

                {/* Special Requests */}

                <div className="form-group">

                    <label>

                        Special Requests

                    </label>

                    <textarea

                        rows="5"

                        placeholder="Wheelchair assistance, VIP pickup, extra luggage..."

                        value={transfer.specialRequests}

                        onChange={(e)=>

                            updateField(

                                "specialRequests",

                                e.target.value

                            )

                        }

                    />

                </div>

            </div>

                        {/* =====================================
                    FARE SUMMARY
            ====================================== */}

            <div className="fare-card">

                <div className="fare-header">

                    <div>

                        <small>

                            Selected Vehicle

                        </small>

                        <h2>

                            {selectedVehicle.name}

                        </h2>

                    </div>

                    <div className="fare-price">

                        KSh {selectedVehicle.price.toLocaleString()}

                    </div>

                </div>

                <div className="fare-divider"></div>

                <div className="fare-services">

                    <div className="service-item">

                        ✅ Professional Chauffeur

                    </div>

                    <div className="service-item">

                        ✅ Meet & Greet at Arrival

                    </div>

                    <div className="service-item">

                        ✅ Complimentary Bottled Water

                    </div>

                    <div className="service-item">

                        ✅ Luggage Assistance

                    </div>

                    <div className="service-item">

                        ✅ Flight Monitoring

                    </div>

                    <div className="service-item">

                        ✅ 24/7 White Rhino Concierge

                    </div>

                </div>

            </div>

            {/* =====================================
                    HOTEL NOTICE
            ====================================== */}

            <div className="notice-card">

                <div className="notice-icon">

                    🛡

                </div>

                <div>

                    <h3>

                        White Rhino Hotel Guarantee

                    </h3>

                    <p>

                        Your chauffeur will monitor your flight in real time.
                        If your flight is delayed, your pickup time will be
                        adjusted automatically at no extra charge.

                    </p>

                </div>

            </div>

            {/* =====================================
                    ACTION BUTTONS
            ====================================== */}

            <div className="form-actions">

                <button

                    type="button"

                    className="secondary-btn"

                    onClick={goBack}

                >

                    ← Change Vehicle

                </button>

                <button

                    type="button"

                    className="primary-btn"

                    onClick={continueBooking}

                >

                    Continue to Review →

                </button>

            </div>

        </div>

    );

}