// ======================================================
// WHITE RHINO HOTEL
// VEHICLE CARD
// ======================================================
import "./VehicleCard.css"
export default function VehicleCard({

    vehicle,

    onSelect

}) {

    if (!vehicle) return null;

    return (

        <div className="airport-card">

            {/* ==========================================
                IMAGE
            ========================================== */}

            <div className="airport-image-wrapper">

                <img

                    src={vehicle.image}

                    alt={vehicle.name}

                    className="airport-image"

                />

                <span

                    className={`airport-status ${
                        vehicle.available
                            ? "available"
                            : "unavailable"
                    }`}

                >

                    {vehicle.available
                        ? "Available"
                        : "Unavailable"}

                </span>

            </div>

            {/* ==========================================
                CONTENT
            ========================================== */}

            <div className="airport-content">

                <div className="airport-card-header">

                    <h3>

                        {vehicle.name}

                    </h3>

                    <span className="airport-badge">

                        Premium

                    </span>

                </div>

                <div className="airport-features">

                    <div className="airport-feature">

                        👥

                        <span>

                            {vehicle.capacity} Guests

                        </span>

                    </div>

                    <div className="airport-feature">

                        🧳

                        <span>

                            {vehicle.luggage} Bags

                        </span>

                    </div>

                </div>

                <div className="airport-divider" />

                <div className="airport-footer">

                    <div>

                        <small>

                            Starting From

                        </small>

                        <div className="airport-price">

                            KSh{" "}

                            {vehicle.price.toLocaleString()}

                        </div>

                    </div>

                    <button

                        className="airport-select-btn"

                        disabled={!vehicle.available}

                        onClick={onSelect}

                    >

                        {

                            vehicle.available

                                ? "Select Vehicle"

                                : "Unavailable"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

}