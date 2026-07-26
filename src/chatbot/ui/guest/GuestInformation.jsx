import "./GuestInformation.css";

import { useState } from "react";

import {
    User,
    Phone,
    Mail,
    Globe,
    Clock3,
    Car,
    FileText,
    CreditCard,
    CheckCircle
} from "lucide-react";

const NATIONALITIES = [
    "Kenyan",
    "Ugandan",
    "Tanzanian",
    "Rwandan",
    "Burundian",
    "South Sudanese",
    "Ethiopian",
    "Nigerian",
    "South African",
    "American",
    "British",
    "Canadian",
    "German",
    "French",
    "Chinese",
    "Indian",
    "Japanese",
    "Australian",
    "Other"
];

export default function GuestInformation({

    booking,

    onContinue,

    onBack

}) {

    const [guest, setGuest] = useState({

        fullName: "",

        phone: "",

        email: "",

        nationality: "Kenyan",

        idNumber: "",

        gender: "",

        arrivalTime: "18:00",

        airportPickup: false,

        specialRequests: "",

        agreed: false

    });

    const updateField = (field, value) => {

        setGuest(previous => ({

            ...previous,

            [field]: value

        }));

    };

    const handleContinue = () => {

        if (!guest.fullName.trim()) {

            alert("Please enter your full name.");

            return;

        }

        if (!guest.phone.trim()) {

            alert("Please enter your phone number.");

            return;

        }

        if (!guest.email.trim()) {

            alert("Please enter your email address.");

            return;

        }

        if (!guest.agreed) {

            alert("Please accept the hotel terms.");

            return;

        }

        onContinue({

            booking,

            guest

        });

    };

    return (

        <div className="guest-information">

            <div className="guest-header">

                <h2>

                    Guest Information

                </h2>

                <p>

                    Please complete your reservation details.

                </p>

            </div>

            {/* Full Name */}

            <label>

                <User size={18}/>

                Full Name

            </label>

            <input

                type="text"

                placeholder="John Doe"

                value={guest.fullName}

                onChange={(e)=>

                    updateField(

                        "fullName",

                        e.target.value

                    )

                }

            />

            {/* Phone */}

            <label>

                <Phone size={18}/>

                Phone Number

            </label>

            <input

                type="tel"

                placeholder="+254 712 345678"

                value={guest.phone}

                onChange={(e)=>

                    updateField(

                        "phone",

                        e.target.value

                    )

                }

            />

            {/* Email */}

            <label>

                <Mail size={18}/>

                Email Address

            </label>

            <input

                type="email"

                placeholder="guest@email.com"

                value={guest.email}

                onChange={(e)=>

                    updateField(

                        "email",

                        e.target.value

                    )

                }

            />

            {/* Nationality */}

            <label>

                <Globe size={18}/>

                Nationality

            </label>

            <select

                value={guest.nationality}

                onChange={(e)=>

                    updateField(

                        "nationality",

                        e.target.value

                    )

                }

            >

                {

                    NATIONALITIES.map(country=>(

                        <option

                            key={country}

                            value={country}

                        >

                            {country}

                        </option>

                    ))

                }

            </select>

            {/* ID */}

            <label>

                <CreditCard size={18}/>

                ID / Passport

            </label>

            <input

                type="text"

                placeholder="Optional"

                value={guest.idNumber}

                onChange={(e)=>

                    updateField(

                        "idNumber",

                        e.target.value

                    )

                }

            />

            {/* Gender */}

            <label>

                Gender

            </label>

            <div className="gender-options">

                <label>

                    <input

                        type="radio"

                        name="gender"

                        checked={guest.gender==="Male"}

                        onChange={()=>

                            updateField(

                                "gender",

                                "Male"

                            )

                        }

                    />

                    Male

                </label>

                <label>

                    <input

                        type="radio"

                        name="gender"

                        checked={guest.gender==="Female"}

                        onChange={()=>

                            updateField(

                                "gender",

                                "Female"

                            )

                        }

                    />

                    Female

                </label>

                <label>

                    <input

                        type="radio"

                        name="gender"

                        checked={guest.gender==="Prefer not to say"}

                        onChange={()=>

                            updateField(

                                "gender",

                                "Prefer not to say"

                            )

                        }

                    />

                    Prefer not to say

                </label>

            </div>

            {/* Arrival */}

            <label>

                <Clock3 size={18}/>

                Estimated Arrival Time

            </label>

            <input

                type="time"

                value={guest.arrivalTime}

                onChange={(e)=>

                    updateField(

                        "arrivalTime",

                        e.target.value

                    )

                }

            />

            {/* Airport Pickup */}

            <label className="pickup-toggle">

                <Car size={18}/>

                Airport Pickup

                <input

                    type="checkbox"

                    checked={guest.airportPickup}

                    onChange={(e)=>

                        updateField(

                            "airportPickup",

                            e.target.checked

                        )

                    }

                />

            </label>

            {/* Requests */}

            <label>

                <FileText size={18}/>

                Special Requests

            </label>

            <textarea

                rows="4"

                placeholder="High floor, quiet room, baby cot, early check-in..."

                value={guest.specialRequests}

                onChange={(e)=>

                    updateField(

                        "specialRequests",

                        e.target.value

                    )

                }

            />

            {/* Terms */}

            <label className="terms">

                <input

                    type="checkbox"

                    checked={guest.agreed}

                    onChange={(e)=>

                        updateField(

                            "agreed",

                            e.target.checked

                        )

                    }

                />

                I agree to the hotel's booking terms and privacy policy.

            </label>

            {/* Buttons */}

            <div className="guest-actions">

                <button

                    className="back-btn"

                    onClick={onBack}

                >

                    Back

                </button>

                <button

                    className="continue-btn"

                    onClick={handleContinue}

                >

                    <CheckCircle size={18}/>

                    Continue to Payment

                </button>

            </div>

        </div>

    );

}