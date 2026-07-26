import "./ChatHeader.css";
import hotellogo from "../assets/hotellogo.jpg"

import {
    Phone,
    Video,
    MoreVertical,
    ShieldCheck,
} from "lucide-react";

export default function ChatHeader() {

    return (

        <header className="chat-header">

            {/* Left Side */}

            <div className="chat-profile">

                <div className="avatar">

                    <img
                        src={hotellogo}
                        alt="White Rhino Hotel"
                    />

                    <span className="online-dot"></span>

                </div>

                <div className="profile-details">

                    <div className="profile-name">

                        <h3>

                            White Rhino Hotel

                        </h3>

                        <ShieldCheck
                            size={16}
                            className="verified"
                        />

                    </div>

                    <span>

                        Virtual Receptionist • Online

                    </span>

                </div>

            </div>

            {/* Right Side */}

            <div className="header-actions">

                <button>

                    <Phone size={20} />

                </button>

                <button>

                    <Video size={20} />

                </button>

                <button>

                    <MoreVertical size={20} />

                </button>

            </div>

        </header>

    );

}