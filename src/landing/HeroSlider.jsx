import "./HeroSlider.css";

import { useEffect, useState } from "react";

import lobby from "../assets/hotel/lobby.jpg";
import suite from "../assets/hotel/suite.jpg";
import pool from "../assets/hotel/pool.jpg";
import restaurant from "../assets/hotel/restaurant.jpg";
import rooftop from "../assets/hotel/rooftop.jpg";

import HeroOverlay from "./HeroOverlay";

const slides = [

    {
        image: lobby,
        title: "Welcome to White Rhino Hotel",
        subtitle: "Experience Luxury Beyond Comfort",
    },

    {
        image: suite,
        title: "Executive Suites",
        subtitle: "Elegance Designed For Relaxation",
    },

    {
        image: pool,
        title: "Infinity Swimming Pool",
        subtitle: "Relax. Refresh. Rejuvenate.",
    },

    {
        image: restaurant,
        title: "Fine Dining",
        subtitle: "World-Class Cuisine Every Day",
    },

    {
        image: rooftop,
        title: "Luxury Lifestyle",
        subtitle: "Every Stay Becomes A Memory",
    },

];

export default function HeroSlider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentSlide(previous =>

                previous === slides.length - 1

                    ? 0

                    : previous + 1

            );

        }, 6000);

        return () => clearInterval(interval);

    }, []);

    return (

        <section className="hero-slider">

            {

                slides.map((slide, index) => (

                    <div

                        key={index}

                        className={`slide ${index === currentSlide ? "active" : ""}`}

                        style={{

                            backgroundImage: `url(${slide.image})`

                        }}

                    >

                        <div className="overlay"></div>

                    </div>

                ))

            }

            <HeroOverlay

                title={slides[currentSlide].title}

                subtitle={slides[currentSlide].subtitle}

            />

            <div className="slider-dots">

                {

                    slides.map((_, index) => (

                        <button

                            key={index}

                            className={

                                currentSlide === index

                                    ? "dot active"

                                    : "dot"

                            }

                            onClick={() =>

                                setCurrentSlide(index)

                            }

                        />

                    ))

                }

            </div>

        </section>

    );

}