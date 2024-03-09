// const Post = require("../model/post");

// //Create post
// const createPost = async (req, res) => {
//     const { title, author, description, likes, comments } = req.body;

//     try {
//         const post = await Post.create({
//             title,
//             author,
//             description,
//             likes,
//             comments,
//         })
//         res.status(200).json(post);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// //Read All Posts
// const getAllPosts = async (req, res) => {
//     try {
//         const posts = await Post.find();

//         res.status(200).json({
//             count: posts.length,
//             posts,
//         })
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// // Read A Specific Post
// // http://localhost:4000/api/posts/<object_id>
// const getPost = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const post = await Post.findById({ _id: id });
//         if (!post) return res.status(404).json({ error: "No post found."});

//         res.status(200).json(post);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// // Update Post
// const updatePost = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const post = await Post.findByIdAndUpdate(
//             { _id: id },
//             { ...req.body },
//             { new: true, runValidators: true }
//         );

//         if (!post) return res.status(404).json({error: "No matching post found."});

//         res.status(200).json({
//             message: "The post has been successfully updated.",
//             post
//         })
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// // Delete Post
// const deletePost = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const post = await Post.findByIdAndDelete({ _id: id });

//         if (!post) return res.status(404).json({ error: "No matching post found." })

//         res.status(200).json({ message: "The post has been successfully removed." })
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }



// module.exports = {
//     createPost,
//     getAllPosts,
//     getPost,
//     updatePost,
//     deletePost
// };

const Reservation = require("../model/reservation");

// Create Reservation
// Create Reservation
const createReservation = async (req, res) => {
    const { customerName, reservationDate, numberOfGuests, specialRequests, contactNumber } = req.body;

    try {
        const reservation = await Reservation.create({
            customerName,
            reservationDate,
            numberOfGuests,
            specialRequests,
            contactNumber
        });
        res.status(200).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json({
            count: reservations.length,
            reservations,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get A Specific Reservation
const getReservation = async (req, res) => {
    const { id } = req.params;

    try {
        const reservation = await Reservation.findById(id);
        if (!reservation) return res.status(404).json({ error: "No reservation found." });

        res.status(200).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update Reservation
const updateReservation = async (req, res) => {
    const { id } = req.params;

    try {
        const reservation = await Reservation.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!reservation) return res.status(404).json({ error: "No matching reservation found." });

        res.status(200).json({
            message: "The reservation has been successfully updated.",
            reservation
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Reservation
const deleteReservation = async (req, res) => {
    const { id } = req.params;

    try {
        const reservation = await Reservation.findByIdAndDelete(id);
        if (!reservation) return res.status(404).json({ error: "No matching reservation found." });

        res.status(200).json({ message: "The reservation has been successfully removed." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createReservation,
    getAllReservations,
    getReservation,
    updateReservation,
    deleteReservation
};
