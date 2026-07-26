// ======================================================
// WHITE RHINO HOTEL
// CONTACT RENDERER
// PART 1 - FOUNDATION
// ======================================================

import { useState } from "react";

import "./ContactRenderer.css";

export default function ContactRenderer({

    message,

    onAction

}) {

    // ==========================================
    // VIEW
    // ==========================================

    const [view, setView] = useState("HOME");

    // HOME
    // RECEPTION
    // RESTAURANT
    // HOUSEKEEPING
    // CONFERENCE
    // EMERGENCY
    // LOCATION

    // ==========================================
    // SELECTED DEPARTMENT
    // ==========================================

    const [department, setDepartment] =

        useState(null);

    // ==========================================
    // CONTACT REQUEST
    // ==========================================

    const [contactRequest, setContactRequest] =

        useState({

            name: "",

            room: "",

            phone: "",

            subject: "",

            message: ""

        });

    // ==========================================
    // SAFETY
    // ==========================================

    if (!message) {

        return null;

    }

    // ==========================================
    // UPDATE FORM
    // ==========================================

    function updateField(field, value) {

        setContactRequest(previous => ({

            ...previous,

            [field]: value

        }));

    }

    // ==========================================
    // OPEN DEPARTMENT
    // ==========================================

    function openDepartment(item) {

        setDepartment(item);

        setView("FORM");

    }

    // ==========================================
    // BACK
    // ==========================================

    function goBack() {

        switch (view) {

            case "FORM":

                setView("HOME");

                break;

            case "SUCCESS":

                setView("HOME");

                break;

            default:

                setView("HOME");

        }

    }

    // ==========================================
    // SEND REQUEST
    // ==========================================

    async function sendRequest() {

        if (!onAction) return;

        const response = await onAction({

            action: "CONTACT_DEPARTMENT",

            payload: {

                department,

                ...contactRequest

            }

        });

        if (response) {

            setView("SUCCESS");

        }

    }

   // ==================================================
// PART 2
// GUEST SERVICES HOME
// ==================================================

if (view === "HOME") {

    const departments = [

        {
            id: 1,
            name: "Reception",
            icon: "🛎️",
            description: "General inquiries, check-in, check-out and guest assistance.",
            phone: "+254 712 000 001"
        },

        {
            id: 2,
            name: "Reservations",
            icon: "🛏️",
            description: "Book rooms, modify reservations and accommodation enquiries.",
            phone: "+254 712 000 002"
        },

        {
            id: 3,
            name: "Restaurant",
            icon: "🍽️",
            description: "Reserve tables, room service and menu enquiries.",
            phone: "+254 712 000 003"
        },

        {
            id: 4,
            name: "Conference",
            icon: "🏢",
            description: "Meeting rooms, corporate events and conference bookings.",
            phone: "+254 712 000 004"
        },

        {
            id: 5,
            name: "Housekeeping",
            icon: "🧹",
            description: "Cleaning services, laundry and room amenities.",
            phone: "+254 712 000 005"
        },

        {
            id: 6,
            name: "Maintenance",
            icon: "🔧",
            description: "Report maintenance issues or request technical assistance.",
            phone: "+254 712 000 006"
        },

        {
            id: 7,
            name: "Emergency",
            icon: "🚨",
            description: "Immediate emergency and security assistance.",
            phone: "+254 712 000 007"
        },

        {
            id: 8,
            name: "Hotel Location",
            icon: "📍",
            description: "Directions, parking information and nearby attractions.",
            phone: "+254 712 000 008"
        }

    ];

    return (

        <div className="contact-renderer">

            <div className="contact-home">

                <div className="contact-hero">

                    <div className="contact-icon">

                        📞

                    </div>

                    <h1>

                        Guest Services

                    </h1>

                    <p>

                        Our team is available 24/7 to ensure you have
                        an exceptional stay at White Rhino Hotel.

                    </p>

                </div>

                <h2 className="contact-title">

                    How can we help you today?

                </h2>

                <div className="contact-grid">

                    {

                        departments.map(item => (

                            <div

                                key={item.id}

                                className="contact-card"

                            >

                                <div className="department-icon">

                                    {item.icon}

                                </div>

                                <h3>

                                    {item.name}

                                </h3>

                                <p>

                                    {item.description}

                                </p>

                                <div className="department-phone">

                                    {item.phone}

                                </div>

                                <button

                                    className="contact-btn"

                                    onClick={() =>

                                        openDepartment(item)

                                    }

                                >

                                    Contact Department

                                </button>

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
// CONTACT FORM
// ==================================================

if (

    view === "FORM" &&

    department

) {

    return (

        <div className="contact-renderer">

            <div className="contact-form-container">

                <button

                    className="contact-back-btn"

                    onClick={goBack}

                >

                    ← Back

                </button>

                {/* ============================= */}

                <div className="contact-selected-card">

                    <div className="department-large-icon">

                        {department.icon}

                    </div>

                    <div>

                        <h2>

                            {department.name}

                        </h2>

                        <p>

                            {department.description}

                        </p>

                        <strong>

                            {department.phone}

                        </strong>

                    </div>

                </div>

                {/* ============================= */}

                <h2>

                    Contact Information

                </h2>

                <div className="contact-form-grid">

                    <input

                        type="text"

                        placeholder="Your Name"

                        value={contactRequest.name}

                        onChange={(e)=>

                            updateField(

                                "name",

                                e.target.value

                            )

                        }

                    />

                    <input

                        type="text"

                        placeholder="Room Number (Optional)"

                        value={contactRequest.room}

                        onChange={(e)=>

                            updateField(

                                "room",

                                e.target.value

                            )

                        }

                    />

                    <input

                        type="tel"

                        placeholder="Phone Number"

                        value={contactRequest.phone}

                        onChange={(e)=>

                            updateField(

                                "phone",

                                e.target.value

                            )

                        }

                    />

                    <input

                        type="text"

                        placeholder="Subject"

                        value={contactRequest.subject}

                        onChange={(e)=>

                            updateField(

                                "subject",

                                e.target.value

                            )

                        }

                    />

                </div>

                {/* ============================= */}

                <textarea

                    rows={6}

                    placeholder={`Describe your request to ${department.name}...`}

                    value={contactRequest.message}

                    onChange={(e)=>

                        updateField(

                            "message",

                            e.target.value

                        )

                    }

                />

                {/* ============================= */}

                <div className="contact-actions">

                    <button

                        className="contact-send-btn"

                        onClick={sendRequest}

                    >

                        Send Request

                    </button>

                </div>

            </div>

        </div>

    );

}

// ==================================================
// PART 4
// REQUEST SENT SUCCESSFULLY
// ==================================================

if (view === "SUCCESS") {

    const reference =

        `REQ-${Date.now().toString().slice(-6)}`;

    return (

        <div className="contact-renderer">

            <div className="contact-success">

                <div className="success-icon">

                    ✅

                </div>

                <h1>

                    Request Submitted

                </h1>

                <p>

                    Your request has been sent successfully.

                </p>

                <div className="success-card">

                    <div className="summary-row">

                        <span>

                            Reference

                        </span>

                        <strong>

                            {reference}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Department

                        </span>

                        <strong>

                            {department.name}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Contact Number

                        </span>

                        <strong>

                            {department.phone}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Status

                        </span>

                        <strong>

                            Received

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>

                            Estimated Response

                        </span>

                        <strong>

                            Within 10 Minutes

                        </strong>

                    </div>

                </div>

                <div className="success-actions">

                    <button

                        className="contact-home-btn"

                        onClick={() => {

                            setView("HOME");

                            setDepartment(null);

                            setContactRequest({

                                name: "",

                                room: "",

                                phone: "",

                                subject: "",

                                message: ""

                            });

                        }}

                    >

                        Back to Guest Services

                    </button>

                </div>

            </div>

        </div>

    );

}
}