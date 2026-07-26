import "./HeroOverlay.css";

import {

    Hotel,

    MapPin,

    Star,

    ShieldCheck,

    Wifi,

    Coffee,

} from "lucide-react";

export default function HeroOverlay({

    title,

    subtitle,

}) {

    return (

        <div className="hero-overlay">

            <div className="hero-card">

                <div className="hotel-badge">

                    <Hotel size={22} />

                    <span>WHITE RHINO HOTEL</span>

                </div>

                <div className="hotel-stars">

                    <Star fill="#D4AF37" strokeWidth={0} />

                    <Star fill="#D4AF37" strokeWidth={0} />

                    <Star fill="#D4AF37" strokeWidth={0} />

                    <Star fill="#D4AF37" strokeWidth={0} />

                    <Star fill="#D4AF37" strokeWidth={0} />

                </div>

                <h1>

                    {title}

                </h1>

                <p>

                    {subtitle}

                </p>

                <div className="hotel-features">

                    <div>

                        <Wifi size={18}/>

                        Free Wi-Fi

                    </div>

                    <div>

                        <Coffee size={18}/>

                        Restaurant

                    </div>

                    <div>

                        <ShieldCheck size={18}/>

                        24/7 Security

                    </div>

                </div>

                <div className="hotel-location">

                    <MapPin size={18}/>

                    Nyeri, Kenya

                </div>

                <div className="chat-hint">

                    <div className="pulse"></div>

                    <span>

                        Click the WhatsApp button below to chat with our Virtual Receptionist.

                    </span>

                </div>

            </div>

        </div>

    );

}