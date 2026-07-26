import "./BookingPanel.css";

import { useState } from "react";

import {
    Calendar,
    Users,
    BadgeDollarSign,
    CheckCircle,
    AlertCircle,
    LoaderCircle,
    Plus,
    Minus
} from "lucide-react";

import AvailabilityService from "../../services/AvailabilityService";

export default function BookingPanel({

    room,

    onBook

}) {

    const [checkIn, setCheckIn] = useState("");

    const [checkOut, setCheckOut] = useState("");

    const [guests, setGuests] = useState(2);

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const increaseGuests = () => {

        if (guests < room.maxGuests) {

            setGuests((previous) => previous + 1);

        }

    };

    const decreaseGuests = () => {

        if (guests > 1) {

            setGuests((previous) => previous - 1);

        }

    };

    const handleAvailabilityCheck = async () => {

        setLoading(true);

        setResult(null);

        try {

            const response = await AvailabilityService.checkAvailability(

                room,

                checkIn,

                checkOut,

                guests

            );

            setResult(response);

        }

        catch (error) {

            console.error(error);

            setResult({

                success: false,

                available: false,

                status: "ERROR",

                message:

                    "Unable to check availability. Please try again."

            });

        }

        finally {

            setLoading(false);

        }

    };

    const handleBooking = () => {

        if (!result || !result.available) return;

        onBook({

            room,

            checkIn,

            checkOut,

            guests,

            booking: result

        });

    };

    return (

        <div className="booking-panel">

            <h2>

                Check Availability

            </h2>

                        {/* ============================
                CHECK-IN DATE
            ============================ */}

            <label>

                <Calendar size={18}/>

                Check-in

            </label>

            <input

                type="date"

                value={checkIn}

                onChange={(e)=>setCheckIn(e.target.value)}

            />

            {/* ============================
                CHECK-OUT DATE
            ============================ */}

            <label>

                <Calendar size={18}/>

                Check-out

            </label>

            <input

                type="date"

                value={checkOut}

                onChange={(e)=>setCheckOut(e.target.value)}

            />

            {/* ============================
                GUESTS
            ============================ */}

            <label>

                <Users size={18}/>

                Guests

            </label>

            <div className="guest-selector">

                <button

                    type="button"

                    onClick={decreaseGuests}

                >

                    <Minus size={16}/>

                </button>

                <span>

                    {guests}

                </span>

                <button

                    type="button"

                    onClick={increaseGuests}

                >

                    <Plus size={16}/>

                </button>

            </div>

            <small className="guest-limit">

                Maximum Guests:

                {room.maxGuests}

            </small>

            {/* ============================
                CHECK AVAILABILITY BUTTON
            ============================ */}

            <button

                className="availability-btn"

                type="button"

                disabled={loading}

                onClick={handleAvailabilityCheck}

            >

                {

                    loading

                    ?

                    <>

                        <LoaderCircle

                            className="spinner"

                            size={18}

                        />

                        Checking availability...

                    </>

                    :

                    "Check Availability"

                }

            </button>

            {/* ============================
                STATUS CARD
            ============================ */}

            {

                result && (

                    <div

                        className={`availability-card ${

                            result.available

                                ?

                                "success"

                                :

                                "error"

                        }`}

                    >

                        {

                            result.available

                            ?

                            <CheckCircle size={22}/>

                            :

                            <AlertCircle size={22}/>

                        }

                        <span>

                            {result.message}

                        </span>

                    </div>

                )

            }

                        {/* ===========================================
                BOOKING SUMMARY
            =========================================== */}

            {

                result && result.available && (

                    <div className="booking-summary">

                        <div>

                            <span>Price / Night</span>

                            <strong>

                                KSh {result.pricePerNight.toLocaleString()}

                            </strong>

                        </div>

                        <div>

                            <span>Nights</span>

                            <strong>

                                {result.nights}

                            </strong>

                        </div>

                        <div>

                            <span>Rooms Left</span>

                            <strong>

                                {

                                    result.roomsLeft === 1

                                    ?

                                    "🔥 Last Room"

                                    :

                                    result.roomsLeft

                                }

                            </strong>

                        </div>

                        <div>

                            <span>Subtotal</span>

                            <strong>

                                KSh {result.subtotal.toLocaleString()}

                            </strong>

                        </div>

                        {

                            result.discount > 0 && (

                                <div>

                                    <span>

                                        Discount

                                    </span>

                                    <strong className="discount">

                                        - KSh {result.discount.toLocaleString()}

                                    </strong>

                                </div>

                            )

                        }

                        <div>

                            <span>

                                Taxes

                            </span>

                            <strong>

                                KSh {result.taxes.toLocaleString()}

                            </strong>

                        </div>

                        <div>

                            <span>

                                Service Charge

                            </span>

                            <strong>

                                KSh {result.serviceCharge.toLocaleString()}

                            </strong>

                        </div>

                        {

                            result.promotion && (

                                <div className="promotion-box">

                                    🎁

                                    {result.promotion}

                                </div>

                            )

                        }

                        <div className="booking-total">

                            <div>

                                <BadgeDollarSign/>

                                <strong>

                                    Total

                                </strong>

                            </div>

                            <span>

                                KSh {result.total.toLocaleString()}

                            </span>

                        </div>

                    </div>

                )

            }

            {/* ===========================================
                BOOK BUTTON
            =========================================== */}

            <button

                className="book-room-btn"

                type="button"

                disabled={

                    !result ||

                    !result.available

                }

                onClick={handleBooking}

            >

                Book This Room

            </button>

        </div>

    );

}