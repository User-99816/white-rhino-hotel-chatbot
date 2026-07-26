import "./RoomCard.css";

export default function RoomCard({

    room,

    onAction

}) {

    if (!room) return null;

    return (

        <div className="room-card">

            {/* ======================================
               BADGES
            ====================================== */}

            <div className="room-badges">

                {room.offer && (

                    <span className="offer-badge">

                        {room.offer}

                    </span>

                )}

                {room.remainingRooms <= 2 && (

                    <span className="availability-badge">

                        🔥 Only {room.remainingRooms} left

                    </span>

                )}

            </div>

            {/* ======================================
               ROOM TITLE
            ====================================== */}

            <div className="room-header">

                <div>

                    <h2>

                        {room.name}

                    </h2>

                    <div className="room-rating">

                        ⭐⭐⭐⭐⭐

                        <span>

                            {room.rating || "4.9"}

                        </span>

                    </div>

                </div>

                <button className="favorite-button">

                    ♡

                </button>

            </div>

            {/* ======================================
               DESCRIPTION
            ====================================== */}

            <p className="room-description">

                {room.description}

            </p>

            {/* ======================================
               QUICK INFO
            ====================================== */}

            <div className="room-information">

                <div>

                    👤

                    <span>

                        {room.guests} Guests

                    </span>

                </div>

                <div>

                    🛏

                    <span>

                        {room.beds}

                    </span>

                </div>

                <div>

                    📐

                    <span>

                        {room.size}

                    </span>

                </div>

            </div>

            {/* ======================================
               FEATURES
            ====================================== */}

            <div className="feature-list">

                {room.features?.map(feature => (

                    <span

                        key={feature}

                        className="feature-chip"

                    >

                        ✓ {feature}

                    </span>

                ))}

            </div>

            {/* ======================================
               PRICE
            ====================================== */}

            <div className="price-section">

                <div>

                    <div className="price-label">

                        Starting From

                    </div>

                    <div className="room-price">

                        {room.price}

                    </div>
                </div>

                <div className="price-note">

                    Includes breakfast

                </div>

            </div>

            {/* ======================================
               ACTIONS
            ====================================== */}

            <div className="room-actions">

                <button

                    className="secondary-button"

                    onClick={() =>

                        onAction(

                            "VIEW_ROOM",

                            {

                                roomId: room.id

                            }

                        )

                    }

                >

                    View Details

                </button>

                <button

                    className="primary-button"

                    onClick={() =>

                        onAction(

                            "SELECT_ROOM",

                            {

                                roomId: room.id

                            }

                        )

                    }

                >

                    Book Now

                </button>

            </div>

        </div>

    );

}