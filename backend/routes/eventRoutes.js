const express = require('express')
const { createEvent, updateEvent, getAllEvents, getSingleEvent, deleteEvent } = require('../controllers/eventController')
const { protect } = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').post(protect, createEvent).get(protect, getAllEvents)
router.route('/:id').put(protect, updateEvent).get(protect, getSingleEvent).delete(protect, deleteEvent)

module.exports = router