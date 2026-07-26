import "./ImageGallery.css";

import { useState } from "react";

import {

    X,
    ChevronLeft,
    ChevronRight,
    Star,
    Users,
    BedDouble,
    Mountain,
    Coffee,
    Wifi,
    Tv,
    CheckCircle

} from "lucide-react";

export default function ImageGallery({

    room,

    onClose,

    onBook

}) {

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {

        setCurrentImage(

            currentImage === room.images.length - 1

                ? 0

                : currentImage + 1

        );

    };

    const previousImage = () => {

        setCurrentImage(

            currentImage === 0

                ? room.images.length - 1

                : currentImage - 1

        );

    };

    return (

        <div className="gallery-overlay">

            <div className="gallery-container">

                {/* Close */}

                <button

                    className="gallery-close"

                    onClick={onClose}

                >

                    <X size={26}/>

                </button>

                {/* LEFT SIDE */}

                <div className="gallery-left">

                    <div className="gallery-main-image">

                        <img

                            src={room.images[currentImage]}

                            alt={room.name}

                        />

                        <button

                            className="gallery-arrow left"

                            onClick={previousImage}

                        >

                            <ChevronLeft/>

                        </button>

                        <button

                            className="gallery-arrow right"

                            onClick={nextImage}

                        >

                            <ChevronRight/>

                        </button>

                        <div className="gallery-counter">

                            {currentImage + 1}

                            /

                            {room.images.length}

                        </div>

                    </div>

                    <div className="gallery-thumbnails">

                        {

                            room.images.map((image,index)=>(

                                <img

                                    key={index}

                                    src={image}

                                    alt="thumbnail"

                                    className={

                                        currentImage===index

                                            ? "active"

                                            : ""

                                    }

                                    onClick={()=>

                                        setCurrentImage(index)

                                    }

                                />

                            ))

                        }

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="gallery-right">

                    <div className="room-header">

                        <h1>

                            {room.name}

                        </h1>

                        <div className="room-stars">

                            {

                                [...Array(room.rating)].map((_,index)=>(

                                    <Star

                                        key={index}

                                        size={18}

                                        fill="#FFD700"

                                        color="#FFD700"

                                    />

                                ))

                            }

                        </div>

                    </div>

                    <div className="room-price">

                        KSh {room.price.toLocaleString()}

                        <span>

                            / Night

                        </span>

                    </div>

                    <div className="availability">

                        {

                            room.available

                            ?

                            "🟢 Available"

                            :

                            "🔴 Fully Booked"

                        }

                    </div>

                    <div className="room-details">

                        <div>

                            <Users/>

                            {room.guests} Guests

                        </div>

                        <div>

                            <BedDouble/>

                            {room.beds}

                        </div>

                        <div>

                            <Mountain/>

                            {room.size}

                        </div>

                    </div>

                    <h3>

                        Room Features

                    </h3>

                    <div className="room-features">

                        {

                            room.breakfast && (

                                <span>

                                    <Coffee size={16}/>

                                    Breakfast Included

                                </span>

                            )

                        }

                        {

                            room.wifi && (

                                <span>

                                    <Wifi size={16}/>

                                    Free Wi-Fi

                                </span>

                            )

                        }

                        {

                            room.netflix && (

                                <span>

                                    <Tv size={16}/>

                                    Netflix

                                </span>

                            )

                        }

                        {

                            room.mountainView && (

                                <span>

                                    <Mountain size={16}/>

                                    Mountain View

                                </span>

                            )

                        }

                    </div>

                    <button

                        className="gallery-book-btn"

                        disabled={!room.available}

                        onClick={() => onBook(room)}

                    >

                        <CheckCircle/>

                        {

                            room.available

                                ?

                                "Book This Room"

                                :

                                "Unavailable"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

}