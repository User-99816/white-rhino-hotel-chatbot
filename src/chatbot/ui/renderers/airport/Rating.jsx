// ======================================================
// WHITE RHINO HOTEL
// RATE YOUR TRANSFER
// ======================================================

import { useState } from "react";

import "./Rating.css";

export default function Rating({

    transfer,

    driver,

    onSubmit

}) {

    const [rating, setRating] = useState(5);

    const [feedback, setFeedback] = useState("");

    function submitRating() {

        onSubmit?.({

            transferId: transfer?.transferId,

            driverId: driver?.id,

            rating,

            feedback

        });

    }

    return (

        <div className="rating-container">

            <div className="rating-header">

                <div className="rating-icon">

                    ⭐

                </div>

                <h2>

                    Rate Your Transfer

                </h2>

                <p>

                    Thank you for choosing White Rhino Hotel.

                </p>

            </div>

            {driver && (

                <div className="rating-driver">

                    <div className="rating-avatar">

                        👨

                    </div>

                    <div>

                        <h3>

                            {driver.name}

                        </h3>

                        <p>

                            🚘 {driver.vehicle}

                        </p>

                        <p>

                            {driver.plate}

                        </p>

                    </div>

                </div>

            )}

            <div className="rating-stars">

                {

                    [1,2,3,4,5].map(star => (

                        <span

                            key={star}

                            className={

                                star <= rating

                                    ? "active"

                                    : ""

                            }

                            onClick={() =>

                                setRating(star)

                            }

                        >

                            ★

                        </span>

                    ))

                }

            </div>

            <div className="rating-value">

                {rating} / 5

            </div>

            <textarea

                placeholder="Tell us about your experience..."

                value={feedback}

                onChange={(e)=>

                    setFeedback(

                        e.target.value

                    )

                }

            />

            <button

                className="rating-submit"

                onClick={submitRating}

            >

                Submit Review

            </button>

        </div>

    );

}