import { useEffect, useState } from "react";

import "./Carousel.css";
import RoomCard from "./RoomCard";

export default function Carousel({

    rooms = [],

    onAction

}) {

    // ==========================================
    // CURRENT ROOM
    // ==========================================

    const [roomIndex, setRoomIndex] = useState(0);

    // ==========================================
    // CURRENT IMAGE
    // ==========================================

    const [imageIndex, setImageIndex] = useState(0);

    // ==========================================
    // SAFETY
    // ==========================================

    if (!rooms.length) {

        return null;

    }

    const room = rooms[roomIndex];

    const images =

        room.images?.length

            ? room.images

            : room.image

                ? [room.image]

                : [];

    // ==========================================
    // RESET IMAGE WHEN ROOM CHANGES
    // ==========================================

    useEffect(() => {

        setImageIndex(0);

    }, [roomIndex]);

    // ==========================================
    // AUTO PLAY
    // ==========================================

    useEffect(() => {

        if (images.length <= 1) return;

        const timer = setInterval(() => {

            setImageIndex(previous =>

                previous === images.length - 1

                    ? 0

                    : previous + 1

            );

        }, 5000);

        return () => clearInterval(timer);

    }, [images]);

    // ==========================================
    // NEXT ROOM
    // ==========================================

    function nextRoom() {

        setRoomIndex(previous =>

            previous === rooms.length - 1

                ? 0

                : previous + 1

        );

    }

    // ==========================================
    // PREVIOUS ROOM
    // ==========================================

    function previousRoom() {

        setRoomIndex(previous =>

            previous === 0

                ? rooms.length - 1

                : previous - 1

        );

    }

    // ==========================================
    // NEXT IMAGE
    // ==========================================

    function nextImage(e) {

        e.stopPropagation();

        setImageIndex(previous =>

            previous === images.length - 1

                ? 0

                : previous + 1

        );

    }

    // ==========================================
    // PREVIOUS IMAGE
    // ==========================================

    function previousImage(e) {

        e.stopPropagation();

        setImageIndex(previous =>

            previous === 0

                ? images.length - 1

                : previous - 1

        );

    }

    return (

        <div className="carousel">

            {/* ROOM NAVIGATION */}

            <div className="carousel-header">

                <button

                    className="carousel-arrow"

                    onClick={previousRoom}

                >

                    ❮

                </button>

                <div className="carousel-counter">

                    Room {roomIndex + 1} of {rooms.length}

                </div>

                <button

                    className="carousel-arrow"

                    onClick={nextRoom}

                >

                    ❯

                </button>

            </div>

            {/* HERO IMAGE */}

            <div className="carousel-image-container">

                {images.length > 0 && (

                    <img

                        src={images[imageIndex]}

                        alt={room.name}

                        className="carousel-image"

                    />

                )}

                {images.length > 1 && (

                    <>

                        <button

                            className="image-arrow left"

                            onClick={previousImage}

                        >

                            ❮

                        </button>

                        <button

                            className="image-arrow right"

                            onClick={nextImage}

                        >

                            ❯

                        </button>
                    </>

                )}

                {images.length > 0 && (

                    <div className="image-counter">

                        {imageIndex + 1} / {images.length}

                    </div>

                )}

            </div>

            {/* THUMBNAILS */}

            {images.length > 1 && (

                <div className="thumbnail-strip">

                    {images.map((image, index) => (

                        <img

                            key={index}

                            src={image}

                            alt={`Thumbnail ${index + 1}`}

                            className={`thumbnail ${
                                index === imageIndex
                                    ? "active"
                                    : ""
                            }`}

                            onClick={() =>

                                setImageIndex(index)

                            }

                        />

                    ))}

                </div>

            )}

            {/* ROOM DETAILS */}

            <RoomCard

                room={room}

                onAction={onAction}

            />

            {/* ROOM DOTS */}

            <div className="room-dots">

                {rooms.map((_, index) => (

                    <button

                        key={index}

                        className={`room-dot ${
                            index === roomIndex
                                ? "active"
                                : ""
                        }`}

                        onClick={() =>

                            setRoomIndex(index)

                        }

                    />

                ))}

            </div>

        </div>

    );

}