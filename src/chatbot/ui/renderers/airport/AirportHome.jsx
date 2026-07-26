// ======================================================
// WHITE RHINO HOTEL
// AIRPORT HOME
// ======================================================

import VehicleCard from "./VehicleCard";
import "./AirportHome.css"
export default function AirportHome({

    vehicles = [],

    onSelectVehicle

}) {

    return (

        <div className="airport-home">

            {/* ==========================================
                HERO
            ========================================== */}

            <section className="airport-hero">

                <div className="airport-icon">

                    ✈️

                </div>

                <h1>

                    Airport Transfers

                </h1>

                <p>

                    Travel comfortably between

                    <strong> White Rhino Hotel </strong>

                    and

                    <strong> Jomo Kenyatta International Airport (JKIA)</strong>

                    using our premium fleet.

                </p>

            </section>

            {/* ==========================================
                SECTION TITLE
            ========================================== */}

            <div className="airport-section-header">

                <div>

                    <h2>

                        Choose Your Vehicle

                    </h2>

                    <p>

                        Select the vehicle that best suits your journey.

                    </p>

                </div>

                <span className="airport-badge">

                    {vehicles.length} Available

                </span>

            </div>

            {/* ==========================================
                VEHICLES
            ========================================== */}

            <div className="airport-grid">

                {

                    vehicles.length > 0 ? (

                        vehicles.map(vehicle => (

                           <VehicleCard
    key={vehicle.id}
    vehicle={vehicle}
    onSelect={() => onSelectVehicle(vehicle)}
/>

                        ))

                    ) : (

                        <div className="airport-empty">

                            <div className="airport-empty-icon">

                                🚘

                            </div>

                            <h3>

                                No Vehicles Available

                            </h3>

                            <p>

                                Please try again later or contact reception.

                            </p>

                        </div>

                    )

                }

            </div>

        </div>

    );

}