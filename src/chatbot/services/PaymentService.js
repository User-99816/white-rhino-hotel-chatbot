// ======================================================
// WHITE RHINO HOTEL
// PAYMENT SERVICE
// ======================================================

import StorageService from "./StorageService";

class PaymentService {

    constructor() {

        this.storageKey = "wrh_payments";

    }

    // ==========================================
    // AVAILABLE METHODS
    // ==========================================

    getPaymentMethods() {

        return [

            {
                id: "hotel",
                name: "Pay at Hotel",
                enabled: true,
                status: "active"
            },

            {
                id: "mpesa",
                name: "M-Pesa",
                enabled: false,
                status: "coming_soon"
            },

            {
                id: "card",
                name: "Visa / Mastercard",
                enabled: false,
                status: "coming_soon"
            },

            {
                id: "bank",
                name: "Bank Transfer",
                enabled: false,
                status: "coming_soon"
            }

        ];

    }

    // ==========================================
    // CREATE PAYMENT
    // ==========================================

    createPayment({

        reservationId,

        amount,

        method

    }) {

        const payment = {

            paymentId: this.generatePaymentId(),

            reservationId,

            amount,

            method,

            status:

                method === "hotel"

                    ? "Pay on Arrival"

                    : "Pending",

            currency: "KES",

            createdAt:

                new Date().toISOString()

        };

        this.savePayment(payment);

        return {

            success: true,

            payment

        };

    }

    // ==========================================
    // SAVE
    // ==========================================

    savePayment(payment) {

        const payments = this.getPayments();

        payments.push(payment);

        StorageService.set(

            this.storageKey,

            payments

        );

    }

    // ==========================================
    // GET ALL
    // ==========================================

    getPayments() {

        return StorageService.get(

            this.storageKey,

            []

        );

    }

    // ==========================================
    // FIND BY PAYMENT ID
    // ==========================================

    findPayment(paymentId) {

        return this.getPayments().find(

            payment =>

                payment.paymentId === paymentId

        );

    }

    // ==========================================
    // FIND BY RESERVATION
    // ==========================================

    findByReservation(reservationId) {

        return this.getPayments().find(

            payment =>

                payment.reservationId === reservationId

        );

    }

    // ==========================================
    // UPDATE STATUS
    // ==========================================

    updateStatus(

        paymentId,

        status

    ) {

        const payments = this.getPayments();

        const index = payments.findIndex(

            payment =>

                payment.paymentId === paymentId

        );

        if (index === -1) {

            return false;

        }

        payments[index].status = status;

        payments[index].updatedAt =

            new Date().toISOString();

        StorageService.set(

            this.storageKey,

            payments

        );

        return true;

    }

    // ==========================================
    // MARK AS PAID
    // ==========================================

    markAsPaid(paymentId) {

        return this.updateStatus(

            paymentId,

            "Paid"

        );

    }

    // ==========================================
    // MARK AS REFUNDED
    // ==========================================

    refund(paymentId) {

        return this.updateStatus(

            paymentId,

            "Refunded"

        );

    }

    // ==========================================
    // CANCEL PAYMENT
    // ==========================================

    cancel(paymentId) {

        return this.updateStatus(

            paymentId,

            "Cancelled"

        );

    }

    // ==========================================
    // DELETE PAYMENT
    // ==========================================

    delete(paymentId) {

        const filtered = this.getPayments().filter(

            payment =>

                payment.paymentId !== paymentId

        );

        StorageService.set(

            this.storageKey,

            filtered

        );

        return true;

    }

    // ==========================================
    // PAYMENT HISTORY
    // ==========================================

    history() {

        return this.getPayments();

    }

    // ==========================================
    // TOTAL REVENUE
    // ==========================================

    totalRevenue() {

        return this.getPayments()

            .filter(

                payment =>

                    payment.status === "Paid"

            )

            .reduce(

                (total, payment) =>

                    total + payment.amount,

                0

            );

    }

    // ==========================================
    // PENDING PAYMENTS
    // ==========================================

    pendingPayments() {

        return this.getPayments().filter(

            payment =>

                payment.status ===

                "Pending"

        );

    }

    // ==========================================
    // PAYMENT SUMMARY
    // ==========================================

    getSummary() {

        const payments = this.getPayments();

        return {

            totalPayments:

                payments.length,

            paid:

                payments.filter(

                    p => p.status === "Paid"

                ).length,

            pending:

                payments.filter(

                    p =>

                        p.status === "Pending"

                ).length,

            payOnArrival:

                payments.filter(

                    p =>

                        p.status ===

                        "Pay on Arrival"

                ).length,

            refunded:

                payments.filter(

                    p =>

                        p.status ===

                        "Refunded"

                ).length,

            revenue:

                this.totalRevenue()

        };

    }

    // ==========================================
    // PAYMENT ID
    // ==========================================

    generatePaymentId() {

        const random = Math.floor(

            100000 +

            Math.random() * 900000

        );

        return `PAY-${Date.now()}-${random}`;

    }

}

export default new PaymentService();