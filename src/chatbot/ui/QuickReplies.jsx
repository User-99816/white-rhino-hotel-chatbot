// ======================================================
// WHITE RHINO HOTEL
// PREMIUM QUICK REPLIES
// ======================================================

import { useState } from "react";

import "./QuickReplies.css";

export default function QuickReplies({

    options = [],

    onSelect

}) {

    const [active, setActive] = useState(null);

    if (!options.length) return null;

    function handleClick(option, index) {

        setActive(index);

        onSelect?.(option);

    }

    return (

        <div className="quick-replies">

            {options.map((option, index) => {

                const item =

                    typeof option === "string"

                        ? {

                              text: option,

                              action: option,

                              icon: ""

                          }

                        : option;

                return (

                    <button

                        key={

                            item.id ||

                            item.action ||

                            item.text ||

                            index

                        }

                        type="button"

                        disabled={item.disabled}

                        className={`

                            quick-reply-btn

                            ${active === index ? "active" : ""}

                            ${item.disabled ? "disabled" : ""}

                        `}

                        onClick={() =>

                            handleClick(

                                item,

                                index

                            )

                        }

                    >

                        {item.icon && (

                            <span className="quick-icon">

                                {item.icon}

                            </span>

                        )}

                        <span className="quick-text">

                            {item.text}

                        </span>

                    </button>

                );

            })}

        </div>

    );

}