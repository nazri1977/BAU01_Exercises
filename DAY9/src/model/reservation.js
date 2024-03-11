// const mongoose = require("mongoose")

// const postSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     author: {type: String, required: true},
//     description: {type: String, required: true},
//     likes: {type: Number, required: true},
//     comments: [{body: String}]
// })

// const Post = mongoose.model("Post", postSchema);

// module.exports = Post;


const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    reservationDate: { type: Date, required: true },
    numberOfGuests: { type: Number, required: true },
    specialRequests: { type: String },
    contactNumber: { type: String, required: true }
});

const Reservation = mongoose.model("Reservation", reservationSchema);

// mongoose.connection.useDb('<database name>')
// const db = mongoose.connection.useDb('School');
// const User = db.model("Student", userSchema);

// module.exports = User;
module.exports = Reservation;
