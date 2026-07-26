import "./PaymentOptions.css";

import { useState } from "react";

import {

    Hotel,

    Smartphone,

    CreditCard,

    Landmark,

    BadgeCheck,

    Calendar,

    Users,

    BedDouble,

    Wallet

} from "lucide-react";

const PAYMENT_METHODS = [

    {

        id: "hotel",

        title: "Pay at Hotel",

        description:

            "Reserve now and pay during check-in at reception.",

        icon: Hotel,

        available: true,

        recommended: true

    },

    {

        id: "mpesa",

        title: "M-Pesa",

        description:

            "Secure mobile payments via Safaricom.",

        icon: Smartphone,

        available: false

    },

    {

        id: "card",

        title: "Visa / Mastercard",

        description:

            "Credit & Debit Cards",

        icon: CreditCard,

        available: false

    },

    {

        id: "bank",

        title: "Bank Transfer",

        description:

            "Direct bank payment.",

        icon: Landmark,

        available: false

    }

];

export default function PaymentOptions({

    booking,

    guest,

    onBack,

    onConfirm

}) {

    const [selectedPayment, setSelectedPayment] =

        useState("hotel");

    const handleSelect = (method) => {

        if (!method.available) return;

        setSelectedPayment(method.id);

    };

    return (

        <div className="payment-options">

            <div className="payment-header">

                <h2>

                    Payment Options

                </h2>

                <p>

                    Choose how you would like to complete your reservation.

                </p>

            </div>

            {/* =======================================
                PAYMENT METHODS
            ======================================= */}

            <div className="payment-grid">

                {

                    PAYMENT_METHODS.map(method => {

                        const Icon = method.icon;

                        const selected =

                            selectedPayment === method.id;

                        return (

                            <div

                                key={method.id}

                                className={

                                    `payment-card

                                    ${selected ? "selected" : ""}

                                    ${!method.available ? "disabled" : ""}`

                                }

                                onClick={()=>

                                    handleSelect(method)

                                }

                            >

                                <div className="payment-icon">

                                    <Icon size={30}/>

                                </div>

                                <div className="payment-info">

                                    <h3>

                                        {method.title}

                                    </h3>

                                    <p>

                                        {method.description}

                                    </p>

                                    {

                                        method.recommended && (

                                            <span className="recommended">

                                                Recommended

                                            </span>

                                        )

                                    }

                                    {

                                        !method.available && (

                                            <span className="coming-soon">

                                                Coming Soon

                                            </span>

                                        )

                                    }

                                </div>

                            </div>

                        );

                    })

                }

            </div>

            {/* =======================================
                BOOKING SUMMARY
            ======================================= */}

            <div className="booking-summary-card">

                <h3>

                    Booking Summary

                </h3>

                <div className="summary-row">

                    <BedDouble size={18}/>

                    <span>

                        Room

                    </span>

                    <strong>

                        {booking.room.name}

                    </strong>

                </div>

                <div className="summary-row">

                    <Calendar size={18}/>

                    <span>

                        Check-in

                    </span>

                    <strong>

                        {booking.checkIn}

                    </strong>

                </div>

                <div className="summary-row">

                    <Calendar size={18}/>

                    <span>

                        Check-out

                    </span>

                    <strong>

                        {booking.checkOut}

                    </strong>

                </div>

                <div className="summary-row">

                    <Users size={18}/>

                    <span>

                        Guests

                    </span>

                    <strong>

                        {booking.guests}

                    </strong>

                </div>

                <div className="summary-row">

                    <Wallet size={18}/>

                    <span>

                        Total

                    </span>

                    <strong>

                        KSh {

                            booking.booking.total.toLocaleString()

                        }

                    </strong>

                </div>

                <div className="summary-row">

                    <BadgeCheck size={18}/>

                    <span>

                        Guest

                    </span>

                    <strong>

                        {guest.fullName}

                    </strong>

                </div>

                                {/* =======================================
                    PAYMENT INFORMATION
                ======================================= */}

                {

                    selectedPayment === "hotel" && (

                        <div className="payment-notice">

                            <Hotel size={22}/>

                            <div>

                                <h4>

                                    Pay at Hotel

                                </h4>

                                <p>

                                    Your room will be reserved immediately.

                                    Payment will be made during check-in at the

                                    White Rhino Hotel reception.

                                </p>

                            </div>

                        </div>

                    )

                }

            </div>

            {/* =======================================
                ACTION BUTTONS
            ======================================= */}

            <div className="payment-actions">

                <button

                    className="back-btn"

                    type="button"

                    onClick={onBack}

                >

                    Back

                </button>

                <button

                    className="confirm-btn"

                    type="button"

                    onClick={() => {

                        const reservation = {

                            reservationId:

                                "WRH-" +

                                Date.now(),

                            booking,

                            guest,

                            paymentMethod: selectedPayment,

                            paymentStatus:

                                selectedPayment === "hotel"

                                    ? "Pay on Arrival"

                                    : "Pending",

                            reservationStatus:

                                "Reserved",

                            createdAt:

                                new Date().toISOString()

                        };

                        onConfirm(reservation);

                    }}

                >

                    <BadgeCheck size={20}/>

                    Confirm Reservation

                </button>

            </div>

        </div>

    );

}