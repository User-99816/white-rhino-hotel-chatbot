// ======================================================
// WHITE RHINO HOTEL
// CONFERENCE RENDERER
// PART 1 - FOUNDATION
// ======================================================

import { useState } from "react";

import "./ConferenceRenderer.css";

export default function ConferenceRenderer({

    message,

    onAction

}) {

    // ==================================================
    // UI STATE
    // ==================================================

    const [view, setView] = useState("HOME");

    // HOME
    // ROOMS
    // FORM
    // SUMMARY
    // CONFIRMATION

    // ==================================================
    // SELECTED ROOM
    // ==================================================

    const [selectedRoom, setSelectedRoom] =

        useState(null);

    // ==================================================
    // CREATED BOOKING
    // ==================================================

    const [booking, setBooking] =

        useState(null);

    // ==================================================
    // BOOKING FORM
    // ==================================================

    const [reservation, setReservation] =

        useState({

            organizer: "",

            company: "",

            email: "",

            phone: "",

            eventName: "",

            eventType: "Meeting",

            attendees: 10,

            eventDate: "",

            startTime: "",

            endTime: "",

            layout: "Boardroom",

            catering: false,

            equipment: [],

            notes: ""

        });

    // ==================================================
    // SAFETY
    // ==================================================

    if (!message) {

        return null;

    }

    // ==================================================
    // UPDATE FORM
    // ==================================================

    function updateField(

        field,

        value

    ) {

        setReservation(previous => ({

            ...previous,

            [field]: value

        }));

    }

    // ==================================================
    // TOGGLE EQUIPMENT
    // ==================================================

    function toggleEquipment(item) {

        const exists =

            reservation.equipment.includes(item);

        if (exists) {

            updateField(

                "equipment",

                reservation.equipment.filter(

                    equipment =>

                        equipment !== item

                )

            );

        }

        else {

            updateField(

                "equipment",

                [

                    ...reservation.equipment,

                    item

                ]

            );

        }

    }

    // ==================================================
    // SELECT ROOM
    // ==================================================

    function selectRoom(room) {

        setSelectedRoom(room);

        setView("FORM");

    }

    // ==================================================
    // BACK
    // ==================================================

    function goBack() {

        switch (view) {

            case "FORM":

                setView("HOME");

                break;

            case "SUMMARY":

                setView("FORM");

                break;

            case "CONFIRMATION":

                setView("HOME");

                break;

            default:

                setView("HOME");

        }

    }

    // ==================================================
    // CONFIRM BOOKING
    // ==================================================

    async function confirmBooking() {

        if (!onAction) return;

        const response = await onAction({

            action: "CREATE_CONFERENCE_BOOKING",

            payload: {

                roomId: selectedRoom?.id,

                ...reservation

            }

        });

        if (response) {

            setBooking(

                response.booking ||

                response

            );

            setView(

                "CONFIRMATION"

            );

        }

    }

    // ==================================================
// PART 2
// CONFERENCE HOME
// ==================================================

if (view === "HOME") {

    const rooms = message.rooms || [

        {
            id: 1,
            name: "Savannah Conference Hall",
            capacity: 200,
            price: 25000,
            image: "/images/conference/savannah.jpg",
            amenities: [
                "Projector",
                "Sound System",
                "Wi-Fi"
            ]
        },

        {
            id: 2,
            name: "Rhino Executive Boardroom",
            capacity: 25,
            price: 12000,
            image: "/images/conference/boardroom.jpg",
            amenities: [
                "Smart TV",
                "Video Conferencing",
                "Coffee Station"
            ]
        },

        {
            id: 3,
            name: "Mount Kenya Meeting Room",
            capacity: 60,
            price: 18000,
            image: "/images/conference/meetingroom.jpg",
            amenities: [
                "Projector",
                "Whiteboard",
                "Wi-Fi"
            ]
        }

    ];

    return (

        <div className="conference-renderer">

            <div className="conference-home">

                <div className="conference-hero">

                    <div className="conference-icon">

                        🏢

                    </div>

                    <h1>

                        Conference & Events

                    </h1>

                    <p>

                        Host meetings, seminars, workshops,
                        training sessions and corporate events
                        at White Rhino Hotel.

                    </p>

                </div>

                <h2 className="conference-title">

                    Available Conference Rooms

                </h2>

                <div className="conference-grid">

                    {

                        rooms.map(room => (

                            <div

                                key={room.id}

                                className="conference-card"

                            >

                                <img

                                    src={room.image}

                                    alt={room.name}

                                    className="conference-image"

                                />

                                <div className="conference-content">

                                    <h3>

                                        {room.name}

                                    </h3>

                                    <p>

                                        👥 Capacity:

                                        {" "}

                                        {room.capacity}

                                        {" "}Guests

                                    </p>

                                    <div className="conference-amenities">

                                        {

                                            room.amenities.map(

                                                amenity => (

                                                    <span

                                                        key={amenity}

                                                        className="conference-tag"

                                                    >

                                                        {amenity}

                                                    </span>

                                                )

                                            )

                                        }

                                    </div>

                                    <div className="conference-price">

                                        KSh

                                        {" "}

                                        {room.price.toLocaleString()}

                                    </div>

                                    <button

                                        className="conference-select-btn"

                                        onClick={() =>

                                            selectRoom(room)

                                        }

                                    >

                                        Book This Room

                                    </button>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    );

}

// ==================================================
// PART 3
// CONFERENCE BOOKING FORM
// ==================================================

if (

    view === "FORM" &&

    selectedRoom

) {

    return (

        <div className="conference-renderer">

            <div className="conference-form-container">

                <button

                    className="conference-back-btn"

                    onClick={goBack}

                >

                    ← Back

                </button>

                {/* ========================= */}

                <div className="conference-selected-card">

                    <img

                        src={selectedRoom.image}

                        alt={selectedRoom.name}

                        className="conference-selected-image"

                    />

                    <div>

                        <h2>

                            {selectedRoom.name}

                        </h2>

                        <p>

                            👥 Capacity:

                            {" "}

                            {selectedRoom.capacity}

                            Guests

                        </p>

                        <h3>

                            KSh

                            {" "}

                            {selectedRoom.price.toLocaleString()}

                        </h3>

                    </div>

                </div>

                {/* ========================= */}

                <h2>

                    Reservation Details

                </h2>

                <div className="conference-form-grid">

                    <input

                        type="text"

                        placeholder="Organizer Name"

                        value={reservation.organizer}

                        onChange={(e)=>

                            updateField(

                                "organizer",

                                e.target.value

                            )

                        }

                    />

                    <input

                        type="text"

                        placeholder="Company"

                        value={reservation.company}

                        onChange={(e)=>

                            updateField(

                                "company",

                                e.target.value

                            )

                        }

                    />

                    <input

                        type="email"

                        placeholder="Email Address"

                        value={reservation.email}

                        onChange={(e)=>

                            updateField(

                                "email",

                                e.target.value

                            )

                        }

                    />

                    <input

                        type="tel"

                        placeholder="Phone Number"

                        value={reservation.phone}

                        onChange={(e)=>

                            updateField(

                                "phone",

                                e.target.value

                            )

                        }

                    />

                    <input

                        type="text"

                        placeholder="Event Name"

                        value={reservation.eventName}

                        onChange={(e)=>

                            updateField(

                                "eventName",

                                e.target.value

                            )

                        }

                    />

                    <select

                        value={reservation.eventType}

                        onChange={(e)=>

                            updateField(

                                "eventType",

                                e.target.value

                            )

                        }

                    >

                        <option>

                            Meeting

                        </option>

                        <option>

                            Training

                        </option>

                        <option>

                            Workshop

                        </option>

                        <option>

                            Conference

                        </option>

                        <option>

                            Seminar

                        </option>

                    </select>

                    <input

                        type="number"

                        min="1"

                        max={selectedRoom.capacity}

                        value={reservation.attendees}

                        onChange={(e)=>

                            updateField(

                                "attendees",

                                Number(

                                    e.target.value

                                )

                            )

                        }

                    />

                    <input

                        type="date"

                        value={reservation.eventDate}

                        onChange={(e)=>

                            updateField(

                                "eventDate",

                                e.target.value

                            )

                        }

                    />

                    <input

                        type="time"

                        value={reservation.startTime}

                        onChange={(e)=>

                            updateField(

                                "startTime",

                                e.target.value

                            )

                        }

                    />

                    <input

                        type="time"

                        value={reservation.endTime}

                        onChange={(e)=>

                            updateField(

                                "endTime",

                                e.target.value

                            )

                        }

                    />

                    <select

                        value={reservation.layout}

                        onChange={(e)=>

                            updateField(

                                "layout",

                                e.target.value

                            )

                        }

                    >

                        <option>

                            Boardroom

                        </option>

                        <option>

                            Classroom

                        </option>

                        <option>

                            Theatre

                        </option>

                        <option>

                            U-Shape

                        </option>

                        <option>

                            Banquet

                        </option>

                    </select>

                </div>

                {/* ========================= */}

                <h3>

                    Equipment Required

                </h3>

                <div className="conference-equipment">

                    {

                        [

                            "Projector",

                            "Microphone",

                            "Sound System",

                            "Whiteboard",

                            "Video Conferencing"

                        ].map(item => (

                            <label

                                key={item}

                                className="conference-checkbox"

                            >

                                <input

                                    type="checkbox"

                                    checked={

                                        reservation.equipment.includes(

                                            item

                                        )

                                    }

                                    onChange={()=>

                                        toggleEquipment(item)

                                    }

                                />

                                {item}

                            </label>

                        ))

                    }

                </div>

                <label className="conference-checkbox">

                    <input

                        type="checkbox"

                        checked={reservation.catering}

                        onChange={(e)=>

                            updateField(

                                "catering",

                                e.target.checked

                            )

                        }

                    />

                    Include Catering

                </label>

                <textarea

                    rows={4}

                    placeholder="Additional Notes"

                    value={reservation.notes}

                    onChange={(e)=>

                        updateField(

                            "notes",

                            e.target.value

                        )

                    }

                />

                <button

                    className="conference-next-btn"

                    onClick={()=>

                        setView(

                            "SUMMARY"

                        )

                    }

                >

                    Continue →

                </button>

            </div>

        </div>

    );

}

// ==================================================
// PART 4
// BOOKING SUMMARY
// ==================================================

if (

    view === "SUMMARY" &&

    selectedRoom

) {

    return (

        <div className="conference-renderer">

            <div className="conference-summary">

                <button

                    className="conference-back-btn"

                    onClick={goBack}

                >

                    ← Back

                </button>

                <h1>

                    Review Conference Booking

                </h1>

                <p>

                    Please review your reservation before confirming.

                </p>

                {/* ================================= */}

                <div className="summary-card">

                    <h2>

                        🏢 Conference Room

                    </h2>

                    <div className="summary-row">

                        <span>

                            Room

                        </span>

                        <strong>

                            {selectedRoom.name}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Capacity

                        </span>

                        <strong>

                            {selectedRoom.capacity} Guests

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Price

                        </span>

                        <strong>

                            KSh {selectedRoom.price.toLocaleString()}

                        </strong>

                    </div>

                </div>

                {/* ================================= */}

                <div className="summary-card">

                    <h2>

                        👤 Organizer

                    </h2>

                    <div className="summary-row">

                        <span>

                            Name

                        </span>

                        <strong>

                            {reservation.organizer}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Company

                        </span>

                        <strong>

                            {reservation.company}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Email

                        </span>

                        <strong>

                            {reservation.email}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Phone

                        </span>

                        <strong>

                            {reservation.phone}

                        </strong>

                    </div>

                </div>

                {/* ================================= */}

                <div className="summary-card">

                    <h2>

                        📅 Event Details

                    </h2>

                    <div className="summary-row">

                        <span>

                            Event

                        </span>

                        <strong>

                            {reservation.eventName}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Type

                        </span>

                        <strong>

                            {reservation.eventType}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Date

                        </span>

                        <strong>

                            {reservation.eventDate}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Time

                        </span>

                        <strong>

                            {reservation.startTime}

                            {" - "}

                            {reservation.endTime}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Attendees

                        </span>

                        <strong>

                            {reservation.attendees}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Layout

                        </span>

                        <strong>

                            {reservation.layout}

                        </strong>

                    </div>

                </div>

                {/* ================================= */}

                <div className="summary-card">

                    <h2>

                        🎤 Equipment

                    </h2>

                    {

                        reservation.equipment.length > 0 ? (

                            reservation.equipment.map(item => (

                                <div

                                    key={item}

                                    className="summary-row"

                                >

                                    <span>

                                        ✔

                                    </span>

                                    <strong>

                                        {item}

                                    </strong>

                                </div>

                            ))

                        ) : (

                            <p>

                                No additional equipment requested.

                            </p>

                        )

                    }

                </div>

                {/* ================================= */}

                <div className="summary-card">

                    <div className="summary-row">

                        <span>

                            Catering

                        </span>

                        <strong>

                            {

                                reservation.catering

                                    ? "Included"

                                    : "Not Included"

                            }

                        </strong>

                    </div>

                </div>

                {

                    reservation.notes && (

                        <div className="summary-card">

                            <h2>

                                📝 Notes

                            </h2>

                            <p>

                                {reservation.notes}

                            </p>

                        </div>

                    )

                }

                {/* ================================= */}

                <div className="summary-total">

                    <span>

                        Total

                    </span>

                    <strong>

                        KSh

                        {" "}

                        {selectedRoom.price.toLocaleString()}

                    </strong>

                </div>

                <div className="summary-actions">

                    <button

                        className="conference-edit-btn"

                        onClick={()=>

                            setView("FORM")

                        }

                    >

                        Edit Booking

                    </button>

                    <button

                        className="conference-confirm-btn"

                        onClick={confirmBooking}

                    >

                        Confirm Booking

                    </button>

                </div>

            </div>

        </div>

    );

}

// ==================================================
// PART 5
// CONFERENCE BOOKING CONFIRMATION
// ==================================================

if (view === "CONFIRMATION") {

    const confirmedBooking = booking || {

        bookingId: `CONF-${Date.now()}`,

        organizer: reservation.organizer,

        company: reservation.company,

        room: selectedRoom,

        status: "Confirmed",

        amount: selectedRoom.price,

        date: reservation.eventDate,

        startTime: reservation.startTime,

        endTime: reservation.endTime,

        attendees: reservation.attendees

    };

    return (

        <div className="conference-renderer">

            <div className="conference-confirmation">

                <div className="confirmation-icon">

                    ✅

                </div>

                <h1>

                    Booking Confirmed

                </h1>

                <p>

                    Your conference reservation has been successfully received.

                </p>

                {/* ============================ */}

                <div className="confirmation-card">

                    <div className="summary-row">

                        <span>

                            Booking ID

                        </span>

                        <strong>

                            {confirmedBooking.bookingId}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Organizer

                        </span>

                        <strong>

                            {confirmedBooking.organizer}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Company

                        </span>

                        <strong>

                            {confirmedBooking.company}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Conference Room

                        </span>

                        <strong>

                            {confirmedBooking.room.name}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Event Date

                        </span>

                        <strong>

                            {confirmedBooking.date}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Time

                        </span>

                        <strong>

                            {confirmedBooking.startTime}

                            {" - "}

                            {confirmedBooking.endTime}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Guests

                        </span>

                        <strong>

                            {confirmedBooking.attendees}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Status

                        </span>

                        <strong>

                            {confirmedBooking.status}

                        </strong>

                    </div>

                    <div className="summary-total">

                        <span>

                            Total

                        </span>

                        <strong>

                            KSh

                            {" "}

                            {confirmedBooking.amount.toLocaleString()}

                        </strong>

                    </div>

                </div>

                {/* ============================ */}

                <div className="confirmation-actions">

                    <button

                        className="conference-home-btn"

                        onClick={() => {

                            setView("HOME");

                            setSelectedRoom(null);

                            setBooking(null);

                            setReservation({

                                organizer: "",

                                company: "",

                                email: "",

                                phone: "",

                                eventName: "",

                                eventType: "Meeting",

                                attendees: 10,

                                eventDate: "",

                                startTime: "",

                                endTime: "",

                                layout: "Boardroom",

                                catering: false,

                                equipment: [],

                                notes: ""

                            });

                        }}

                    >

                        Book Another Conference

                    </button>

                </div>

            </div>

        </div>

    );

}
}