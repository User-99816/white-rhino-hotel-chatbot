



import "./RestaurantRenderer.css";




export default function RestaurantRenderer({

    message,

    onAction

}) {

    console.log("RestaurantRenderer rendered");
    console.log(message);

    if (!message) return null;

    return (

        <div className="restaurant-renderer">

            {/* =========================
                HEADER
            ========================== */}

            <div className="restaurant-header">

                <h2>

                    🍽 {message.title || "White Rhino Restaurant"}

                </h2>

                {

                    message.message && (

                        <p>

                            {message.message}

                        </p>

                    )

                }

            </div>

            {/* =========================
                MENU ITEMS
            ========================== */}

            {

                message.items && (

                    <div className="restaurant-grid">

                        {

                            message.items.map(item => (

                                <div

                                    key={item.id}

                                    className="restaurant-card"

                                >

                                    {

                                        item.image && (

                                            <img

                                                src={item.image}

                                                alt={item.name}

                                                className="restaurant-image"

                                            />

                                        )

                                    }

                                    <h3>

                                        {item.name}

                                    </h3>

                                    {

                                        item.description && (

                                            <p>

                                                {item.description}

                                            </p>

                                        )

                                    }

                                    {

                                        item.price && (

                                            <div className="restaurant-price">

                                                KSh {item.price.toLocaleString()}

                                            </div>

                                        )

                                    }

                                    <button

                                        className="restaurant-btn"

                                        onClick={() =>

                                            onAction(

                                                "ORDER_FOOD",

                                                {

                                                    itemId: item.id

                                                }

                                            )

                                        }

                                    >

                                        Order

                                    </button>

                                </div>

                            ))

                        }

                    </div>

                )

            }

            {/* =========================
                QUICK ACTIONS
            ========================== */}

            {

                message.quickActions && (

                    <div className="restaurant-actions">

                        {

                            message.quickActions.map(action => (

                                <button

                                    key={action.action}

                                    className="restaurant-action"

                                    onClick={() =>

                                        onAction(

                                            action.action,

                                            action.payload || {}

                                        )

                                    }

                                >

                                    {action.icon}

                                    {" "}

                                    {action.label}

                                </button>

                            ))

                        }

                    </div>

                )

            }

            {/* =========================
                TABLE RESERVATION
            ========================== */}

            {

                message.type === "table-reservation" && (

                    <div className="restaurant-panel">

                        <h3>

                            🪑 Reserve a Table

                        </h3>

                        <p>

                            Reserve your preferred dining table.

                        </p>

                        <button

                            className="restaurant-btn"

                            onClick={() =>

                                onAction(

                                    "CONFIRM_TABLE"

                                )

                            }

                        >

                            Confirm Reservation

                        </button>

                    </div>

                )

            }

            {/* =========================
                CHEF SPECIALS
            ========================== */}

            {

                message.type === "chef-specials" && (

                    <div className="restaurant-panel">

                        <h3>

                            👨‍🍳 Today's Chef Specials

                        </h3>

                        <button

                            className="restaurant-btn"

                            onClick={() =>

                                onAction(

                                    "ORDER_CHEF_SPECIAL"

                                )

                            }

                        >

                            Order Special

                        </button>

                    </div>

                )

            }

        </div>

    );

}