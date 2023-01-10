const express = require('express')
const { createEvent, updateEvent, getAllEvents, getSingleEvent, deleteEvent } = require('../controllers/eventController')
const { protect } = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').post(protect, createEvent).get(protect, getAllEvents)
router.route('/:id').get(getSingleEvent).put(protect, updateEvent).delete(protect, deleteEvent)
router.route('/single-event').post(getSingleEvent)

module.exports = router