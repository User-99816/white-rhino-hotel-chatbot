import "./TransferComplete.css";

export default function TransferComplete({

    transfer,

    onHome,

    onBookAgain

}) {

    if (!transfer) return null;

    return (

        <div className="transfer-complete">

            <div className="complete-card">

                <div className="complete-icon">
                    🎉
                </div>

                <h1>

                    Transfer Completed

                </h1>

                <p>

                    Thank you for choosing
                    White Rhino Hotel Airport Transfers.

                </p>

                <div className="complete-summary">

                    <div className="summary-row">

                        <span>Transfer ID</span>

                        <strong>

                            {transfer.transferId}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>Guest</span>

                        <strong>

                            {transfer.guest}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>Driver</span>

                        <strong>

                            {transfer.driver?.name}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>Vehicle</span>

                        <strong>

                            {transfer.vehicle?.name}

                        </strong>

                    </div>

                    <div className="summary-row">

                        <span>Status</span>

                        <strong className="status-complete">

                            ✅ Completed

                        </strong>

                    </div>

                </div>

                <div className="rating-section">

                    <h3>

                        Rate Your Experience

                    </h3>

                    <div className="stars">

                        ⭐⭐⭐⭐⭐

                    </div>

                    <small>

                        We'd love your feedback.

                    </small>

                </div>

                <div className="complete-actions">

                    <button

                        className="primary-btn"

                        onClick={onBookAgain}

                    >

                        Book Another Transfer

                    </button>

                    <button

                        className="secondary-btn"

                        onClick={onHome}

                    >

                        Return Home

                    </button>

                </div>

            </div>

        </div>

    );

}