import "./BookingRenderer.css";

export default function BookingRenderer({

    message,

    onAction

}) {

    if (!message) return null;

    // =====================================================
    // ROOM CAROUSEL
    // =====================================================

    if (message.type === "carousel") {

        return (

            <div className="booking-renderer">

                <div className="rooms-carousel">

                    {

                        message.rooms?.map(room => (

                            <div

                                key={room.id}

                                className="room-card"

                            >

                                {/* IMAGE */}

                                <div className="room-image-wrapper">

                                    <img

                                        src={room.image}

                                        alt={room.name}

                                        className="room-image"

                                    />

                                    <div className="room-rating">

                                        ⭐ {room.rating}

                                    </div>

                                    {

                                        room.remainingRooms <= 2 && (

                                            <div className="room-badge">

                                                Only {room.remainingRooms} Left

                                            </div>

                                        )

                                    }

                                </div>

                                {/* DETAILS */}

                                <div className="room-content">

                                    <h3>

                                        {room.name}

                                    </h3>

                                    <p className="room-description">

                                        {room.description}

                                    </p>

                                    <div className="room-meta">

                                        <span>

                                            👥 {room.guests} Guests

                                        </span>

                                        <span>

                                            🛏 {room.beds}

                                        </span>

                                        <span>

                                            📐 {room.size}

                                        </span>

                                    </div>

                                    <div className="features">

                                        {

                                            room.features

                                                ?.slice(0,4)

                                                .map(feature => (

                                                    <span

                                                        key={feature}

                                                        className="feature"

                                                    >

                                                        ✓ {feature}

                                                    </span>

                                                ))

                                        }

                                    </div>

                                    <div className="price-row">

                                        <div>

                                            <h2>

                                                {room.priceLabel}

                                            </h2>

                                        </div>

                                        <button

                                            className="select-room-btn"

                                            onClick={() =>

                                                onAction(

                                                    "SELECT_ROOM",

                                                    {

                                                        roomId: room.id

                                                    }

                                                )

                                            }

                                        >

                                            Select

                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        );

    }

    // =====================================================
    // ROOM DETAILS
    // =====================================================

    if (message.type === "room-details") {

        const room = message.room;

        if (!room) return null;

        return (

            <div className="room-details">

                <img

                    src={room.image}

                    alt={room.name}

                    className="details-image"

                />

                <h2>

                    {room.name}

                </h2>

                <p>

                    {room.description}

                </p>

                <div className="detail-grid">

                    <span>

                        👥 {room.guests} Guests

                    </span>

                    <span>

                        🛏 {room.beds}

                    </span>

                    <span>

                        📐 {room.size}

                    </span>

                    <span>

                        🚿 {room.bathroom}

                    </span>

                    <span>

                        🌄 {room.view}

                    </span>

                </div>

                <div className="feature-list">

                    {

                        room.features.map(feature => (

                            <div

                                key={feature}

                            >

                                ✓ {feature}

                            </div>

                        ))

                    }

                </div>

                <div className="price-box">

                    <h2>

                        {room.priceLabel}

                    </h2>

                </div>

                <button

                    className="primary-btn"

                    onClick={() =>

                        onAction(

                            "CHECK_AVAILABILITY",

                            {

                                roomId: room.id

                            }

                        )

                    }

                >

                    Check Availability

                </button>

            </div>

        );

    }

    // =====================================================
    // ROOM COMPARISON
    // =====================================================

    if (message.type === "room-comparison") {

        return (

            <div className="comparison">

                {

                    message.rooms?.map(room => (

                        <div

                            key={room.id}

                            className="comparison-card"

                        >

                            <strong>

                                {room.name}

                            </strong>

                            <p>

                                {room.priceLabel}

                            </p>

                            <p>

                                👥 {room.guests}

                            </p>

                            <p>

                                📐 {room.size}

                            </p>

                        </div>

                    ))

                }

            </div>

        );

    }

    // =====================================================
    // AVAILABILITY
    // =====================================================

    if (message.type === "availability") {

        return (

            <div className="availability-card">

                <div

                    className={`availability-status ${message.badge}`}

                >

                    {message.message}

                </div>

                <div className="pricing-summary">

                    <p>

                        Nights

                        <strong>

                            {message.pricing?.nights}

                        </strong>

                    </p>

                    <p>

                        Total

                        <strong>

                            KSh {message.pricing?.total?.toLocaleString()}

                        </strong>

                    </p>

                </div>

                <button

                    className="primary-btn"

                    onClick={() =>

                        onAction(

                            "CONTINUE_BOOKING"

                        )

                    }

                >

                    Continue Booking

                </button>

            </div>

        );

    }

    // =====================================================
    // PAYMENT
    // =====================================================

    if (message.type === "payment") {

        return (

            <div className="payment-card">

                {

                    message.methods?.map(method => (

                        <button

                            key={method.id}

                            className="payment-option"

                            onClick={() =>

                                onAction(

                                    "SELECT_PAYMENT",

                                    {

                                        method:

                                            method.id

                                    }

                                )

                            }

                        >

                            💳 {method.name}

                        </button>

                    ))

                }

            </div>

        );

    }

    // =====================================================
// RESERVATION CONFIRMATION
// =====================================================

if (message.type === "reservation-confirmation") {

    const reservation = message.reservation;

    return (

        <div className="reservation-card">

            <div className="reservation-success">

                ✅

            </div>

            <h2>

                Room Successfully Reserved

            </h2>

            <p>

                Your room has been reserved at
                <strong> White Rhino Hotel.</strong>

            </p>

            <div className="reservation-id-box">

                <span>

                    Reservation ID

                </span>

                <h1>

                    {reservation.reservationId}

                </h1>

            </div>

            <div className="booking-summary">

                <p>

                    Hotel

                    <strong>

                        {reservation.hotel}

                    </strong>

                </p>

                <p>

                    Room

                    <strong>

                        {reservation.room}

                    </strong>

                </p>

                <p>

                    Price Per Night

                    <strong>

                        KSh {reservation.price.toLocaleString()}

                    </strong>

                </p>

                <p>

                    Status

                    <strong className="status-success">

                        {reservation.status}

                    </strong>

                </p>

            </div>

            <div className="reservation-note">

                <strong>

                    Please proceed to White Rhino Hotel Reception
                    with this Reservation ID to complete your
                    booking.

                </strong>

            </div>

            <button

                className="primary-btn"

                onClick={() => {

                    navigator.clipboard.writeText(
                        reservation.reservationId
                    );

                    alert("Reservation ID copied.");

                }}

            >

                Copy Reservation ID

            </button>

        </div>

    );

}




    if (message.type === "booking-confirmation") {

        const booking = message.booking;

        return (

            <div className="confirmation-card">

                <h2>

                    ✅ Reservation Confirmed

                </h2>

                <p>

                    Thank you for choosing

                    White Rhino Hotel.

                </p>

                <div className="booking-summary">

                    <p>

                        Room

                        <strong>

                            {booking.room}

                        </strong>

                    </p>

                    <p>

                        Check In

                        <strong>

                            {booking.checkIn}

                        </strong>

                    </p>

                    <p>

                        Check Out

                        <strong>

                            {booking.checkOut}

                        </strong>

                    </p>

                    <p>

                        Total

                        <strong>

                            KSh {booking.total?.toLocaleString()}

                        </strong>

                    </p>

                </div>

            </div>

        );

    }

    return null;

}