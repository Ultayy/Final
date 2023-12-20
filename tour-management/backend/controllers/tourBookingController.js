import Booking from "../models/Booking.js";

export const createTourBooking = async (req, res) => {
    const { bookAt, /* other fields */ } = req.body;

    // Convert bookAt string to a Date object
    const bookAtDate = new Date(bookAt);

    const newBooking = new Booking({ ...req.body, bookAt: bookAtDate });

    try {
        const saveBooking = await newBooking.save();
        res.status(200).json({
            success: true,
            message: "Tour is booked",
            data: saveBooking
        });
    } catch (err) {
        console.error("Booking failed:", err.message);
        res.status(500).json({
            success: false,
            message: "Booking failed",
            error: err.message
        });
    }
};

export const getBooking = async (req, res) =>{
    const id = req.params.id;

    try {
        const book = await Booking.findById(id);

        res.status(200)
            .json({
                success: true,
                message: "successful",
                data: book,
            })
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
            error: err.message
        });
    }
}


export const getAllBooking = async (req, res) =>{

    try {
        const books = await Booking.find();

        res.status(200)
            .json({
                success: true,
                message: "successful",
                data: books,
            })
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: "error",
            error: err.message
        });
    }
}