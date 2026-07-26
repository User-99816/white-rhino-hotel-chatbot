import "./BookingConfirmation.css";

import {

    CheckCircle2,

    Hotel,

    Calendar,

    User,

    Phone,

    Mail,

    Wallet,

    BedDouble,

    Users,

    MessageCircle,

    Home,

    Download,

    Copy,

    BadgeCheck

} from "lucide-react";

export default function BookingConfirmation({

    reservation,

    onHome,

    onWhatsApp,

    onDownload

}) {

    if (!reservation) return null;

    const {

        reservationId,

        booking,

        guest,

        paymentMethod,

        paymentStatus,

        reservationStatus,

        createdAt

    } = reservation;

    const bookingDate = new Date(createdAt);

    const copyReference = async () => {

        try{

            await navigator.clipboard.writeText(reservationId);

            alert("Booking reference copied.");

        }

        catch{

            alert("Unable to copy booking reference.");

        }

    };

    return(

        <div className="booking-confirmation">

            {/* Success Banner */}

            <div className="confirmation-header">

                <CheckCircle2

                    size={70}

                    className="success-icon"

                />

                <h1>

                    Reservation Confirmed

                </h1>

                <p>

                    Thank you for choosing

                    <strong>

                        {" "}White Rhino Hotel

                    </strong>

                    .

                </p>

            </div>

            {/* Booking Reference */}

            <div className="reference-card">

                <span>

                    Booking Reference

                </span>

                <h2>

                    {reservationId}

                </h2>

                <button

                    onClick={copyReference}

                >

                    <Copy size={16}/>

                    Copy Reference

                </button>

            </div>

            {/* Reservation Details */}

            <div className="confirmation-card">

                <h3>

                    Reservation Details

                </h3>

                <div className="row">

                    <Hotel size={18}/>

                    <span>

                        Hotel

                    </span>

                    <strong>

                        White Rhino Hotel

                    </strong>

                </div>

                <div className="row">

                    <BedDouble size={18}/>

                    <span>

                        Room

                    </span>

                    <strong>

                        {booking.room.name}

                    </strong>

                </div>

                <div className="row">

                    <Calendar size={18}/>

                    <span>

                        Check-in

                    </span>

                    <strong>

                        {booking.checkIn}

                    </strong>

                </div>

                <div className="row">

                    <Calendar size={18}/>

                    <span>

                        Check-out

                    </span>

                    <strong>

                        {booking.checkOut}

                    </strong>

                </div>

                <div className="row">

                    <Users size={18}/>

                    <span>

                        Guests

                    </span>

                    <strong>

                        {booking.guests}

                    </strong>

                </div>

                <div className="row">

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

            </div>

            {/* Guest */}

            <div className="confirmation-card">

                <h3>

                    Guest Information

                </h3>

                <div className="row">

                    <User size={18}/>

                    <span>

                        Name

                    </span>

                    <strong>

                        {guest.fullName}

                    </strong>

                </div>

                <div className="row">

                    <Phone size={18}/>

                    <span>

                        Phone

                    </span>

                    <strong>

                        {guest.phone}

                    </strong>

                </div>

                <div className="row">

                    <Mail size={18}/>

                    <span>

                        Email

                    </span>

                    <strong>

                        {guest.email}

                    </strong>

                </div>

            </div>

            {/* Payment */}

            <div className="confirmation-card">

                <h3>

                    Payment

                </h3>

                <div className="row">

                    <Wallet size={18}/>

                    <span>

                        Method

                    </span>

                    <strong>

                        {

                            paymentMethod==="hotel"

                            ?

                            "Pay at Hotel"

                            :

                            paymentMethod

                        }

                    </strong>

                </div>

                <div className="row">

                    <BadgeCheck size={18}/>

                    <span>

                        Status

                    </span>

                    <strong>

                        {paymentStatus}

                    </strong>

                </div>

                <div className="row">

                    <Calendar size={18}/>

                    <span>

                        Reserved On

                    </span>

                    <strong>

                        {bookingDate.toLocaleString()}

                    </strong>

                </div>

                <div className="row">

                    <CheckCircle2 size={18}/>

                    <span>

                        Reservation

                    </span>

                    <strong>

                        {reservationStatus}

                    </strong>

                </div>

            </div>

            {/* Notice */}

            <div className="confirmation-message">

                Please arrive at least

                <strong>

                    {" "}30 minutes

                </strong>

                before check-in time.

                Kindly present your booking reference and a valid ID at reception.

            </div>

            {/* Actions */}

            <div className="confirmation-actions">

                <button

                    className="download-btn"

                    onClick={onDownload}

                >

                    <Download size={18}/>

                    Download Confirmation

                </button>

                <button

                    className="whatsapp-btn"

                    onClick={onWhatsApp}

                >

                    <MessageCircle size={18}/>

                    Contact Reception

                </button>

                <button

                    className="home-btn"

                    onClick={onHome}

                >

                    <Home size={18}/>

                    Return Home

                </button>

            </div>

        </div>

    );

}