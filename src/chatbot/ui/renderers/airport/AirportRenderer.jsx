// WHITE RHINO HOTEL
// AIRPORT RENDERER
// PART 1
// ======================================================

import { useState } from "react";

import "./AirportRenderer.css";

import AirportHome from "./AirportHome";
import TransferForm from "./TransferForm";
import TransferSummary from "./TransferSummary";
import TransferConfirmation from "./TransferConfirmation";
import DriverAssignment from "./DriverAssignment";
import LiveTracking from "./LiveTracking";
import TransferComplete from "./TransferComplete";
import Rating from "./Rating";

export default function AirportRenderer({

    message,

    onAction

}) {

    // =====================================
    // CURRENT SCREEN
    // =====================================

    const [view, setView] = useState("HOME");

    // =====================================
    // VEHICLE
    // =====================================

    const [selectedVehicle, setSelectedVehicle] =

        useState(null);

    // =====================================
    // DRIVER
    // =====================================

    const [driver, setDriver] =

        useState(null);

    // =====================================
    // CREATED TRANSFER
    // =====================================

    const [createdTransfer, setCreatedTransfer] =

        useState(null);

    // =====================================
    // STAR RATING
    // =====================================

    const [rating, setRating] =

        useState(5);

    // =====================================
    // PASSENGER FORM
    // =====================================

    const [transfer, setTransfer] = useState({

        guest: "",

        phone: "",

        airport: "JKIA",

        flight: "",

        airline: "",

        arrivalDate: "",

        arrivalTime: "",

        passengers: 1,

        luggage: 1,

        childSeat: false,

        specialRequests: ""

    });

    // =====================================
    // AVAILABLE DRIVERS
    // =====================================

    const drivers = [

        {
            id: 1,
            name: "James Mwangi",
            rating: "4.9 ★",
            phone: "+254 712 345 678",
            registration: "KDM 472X",
            eta: "8 mins"
        },

        {
            id: 2,
            name: "Faith Wanjiku",
            rating: "5.0 ★",
            phone: "+254 721 548 331",
            registration: "KDG 118L",
            eta: "6 mins"
        },

        {
            id: 3,
            name: "David Kamau",
            rating: "4.8 ★",
            phone: "+254 734 802 111",
            registration: "KBP 963R",
            eta: "10 mins"
        }

    ];

    // =====================================
    // SAFETY
    // =====================================

    if (!message) {

        return null;

    }

    // =====================================
    // UPDATE FORM
    // =====================================

    function updateField(field, value) {

        setTransfer(previous => ({

            ...previous,

            [field]: value

        }));

    }

    // =====================================
    // SELECT VEHICLE
    // =====================================

    function selectVehicle(vehicle) {

        setSelectedVehicle(vehicle);

        setView("FORM");

    }

        // =====================================
    // CONFIRM TRANSFER
    // =====================================

    function confirmTransfer() {

        const newTransfer = {

            transferId:
                "APT-" +
                Math.floor(
                    100000 +
                    Math.random() * 900000
                ),

            reference:
                "APT-" +
                Math.floor(
                    100000 +
                    Math.random() * 900000
                ),

            guest: transfer.guest,

            phone: transfer.phone,

            airport: transfer.airport,

            flight: transfer.flight,

            airline: transfer.airline,

            arrivalDate: transfer.arrivalDate,

            arrivalTime: transfer.arrivalTime,

            passengers: transfer.passengers,

            luggage: transfer.luggage,

            childSeat: transfer.childSeat,

            specialRequests:
                transfer.specialRequests,

            vehicle: selectedVehicle,

            vehicleName:
                selectedVehicle.name,

            amount:
                selectedVehicle.price,

            status: "Confirmed"

        };

        setCreatedTransfer(newTransfer);

        setView("CONFIRMATION");

    }

    // =====================================
    // ASSIGN DRIVER
    // =====================================

    function assignDriver() {

        const randomDriver =

            drivers[
                Math.floor(
                    Math.random() *
                    drivers.length
                )
            ];

        const assignedDriver = {

            ...randomDriver,

            vehicle:
                selectedVehicle.name

        };

        setDriver(assignedDriver);

        setView("DRIVER");

    }

    // =====================================
    // START LIVE TRACKING
    // =====================================

    function startTracking() {

        setView("TRACKING");

    }

    // =====================================
    // COMPLETE TRANSFER
    // =====================================

    function completeTransfer() {

        setView("COMPLETE");

    }

    // =====================================
    // OPEN RATING
    // =====================================

    function openRating() {

        setView("RATING");

    }

    // =====================================
    // RESTART AIRPORT BOOKING
    // =====================================

    function restartTransfer() {

        setSelectedVehicle(null);

        setDriver(null);

        setCreatedTransfer(null);

        setTransfer({

            guest: "",

            phone: "",

            airport: "JKIA",

            flight: "",

            airline: "",

            arrivalDate: "",

            arrivalTime: "",

            passengers: 1,

            luggage: 1,

            childSeat: false,

            specialRequests: ""

        });

        setView("HOME");

    }

        // =====================================
    // VIEW ROUTER
    // =====================================

    switch (view) {

        // =====================================
        // HOME
        // =====================================

        case "HOME":

            return (

                <AirportHome

                    vehicles={message.vehicles || []}

                    onSelectVehicle={selectVehicle}

                />

            );

        // =====================================
        // TRANSFER FORM
        // =====================================

        case "FORM":

            return (

                <TransferForm

                    selectedVehicle={selectedVehicle}

                    transfer={transfer}

                    updateField={updateField}

                    goBack={() => setView("HOME")}

                    onContinue={() => setView("SUMMARY")}

                />

            );

        // =====================================
        // SUMMARY
        // =====================================

        case "SUMMARY":

            return (

                <TransferSummary

                    transfer={transfer}

                    selectedVehicle={selectedVehicle}

                    goBack={() => setView("FORM")}

                    onConfirm={confirmTransfer}

                />

            );

        // =====================================
        // CONFIRMATION
        // =====================================

        case "CONFIRMATION":

            return (

                <TransferConfirmation

                    transfer={createdTransfer}

                    onAssignDriver={assignDriver}

                />

            );

        // =====================================
        // DRIVER ASSIGNMENT
        // =====================================

        case "DRIVER":

            return (

                <DriverAssignment

                    transfer={createdTransfer}

                    driver={driver}

                    onCall={(driver) =>

                        window.open(

                            `tel:${driver.phone}`

                        )

                    }

                    onComplete={startTracking}

                    onBack={() =>

                        setView("CONFIRMATION")

                    }

                />

            );

        // =====================================
        // LIVE TRACKING
        // =====================================

        case "TRACKING":

            return (

                <LiveTracking

                    transfer={createdTransfer}

                    driver={driver}

                    onComplete={completeTransfer}

                />

            );

        // =====================================
        // COMPLETED
        // =====================================

        case "COMPLETE":

            return (

                <TransferComplete

                    transfer={createdTransfer}

                    driver={driver}

                    onRate={openRating}

                />

            );

        // =====================================
        // RATING
        // =====================================

        case "RATING":

            return (

                <Rating

                    transfer={createdTransfer}

                    driver={driver}

                    value={rating}

                    onChange={setRating}

                    onDone={restartTransfer}

                />

            );

        // =====================================
        // DEFAULT
        // =====================================

        default:

            return (

                <AirportHome

                    vehicles={message.vehicles || []}

                    onSelectVehicle={selectVehicle}

                />

            );

    }

}