const express = require('express');
const { getNotes , CreateNote, getNotebyID, UpdateNote, DeleteNote} = require('../controllers/noteController');
const { protect } = require('../Middlewares/authMiddleware');

const router = express.Router()


router.route("/").get(protect, getNotes);
router.route("/create").post(protect, CreateNote);
router.route("/:id").get(getNotebyID).put(protect, UpdateNote).delete(protect, DeleteNote);


module.exports = router
