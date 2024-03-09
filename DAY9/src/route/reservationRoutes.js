// const express = require("express");
// const router = express.Router();
// const {createPost, getAllPosts, getPost, updatePost, deletePost} = require("../controller/reservationController");

// // http://localhost:4000/api/posts/ (POST)
// router.post("/", createPost);
// // http://localhost:4000/api/posts/ (GET)
// router.get("/", getAllPosts);
// // http://localhost:4000/api/posts/ (GET)
// router.get("/:id", getPost);

// // http://localhost:4000/api/posts/<object_id> (PATCH)
// router.patch("/:id", updatePost)

// // http://localhost:4000/api/posts/<object_id> (DELETE)
// router.delete("/:id", deletePost)



// module.exports = router;

const express = require("express");
const router = express.Router();
const {
    createReservation,
    getAllReservations,
    getReservation,
    updateReservation,
    deleteReservation
} = require("../controller/reservationController");

router.post("/", createReservation);
router.get("/", getAllReservations);
router.get("/:id", getReservation);
router.patch("/:id", updateReservation);
router.delete("/:id", deleteReservation);

module.exports = router;


