const asyncHandler = require('express-async-handler')
const Event = require('../models/eventModel')
const User = require('../models/userModel')

const createEvent = asyncHandler( async (req, res) => {
    if(!req.body.date) {
        res.status(404)
        throw new Error('Please provide event date')
    }
    if(!req.body.event) {
        res.status(404)
        throw new Error('Please provide event details')
    }
    const newEvent = await Event.create({
        date: req.body.date,
        event: req.body.event,
        user: req.user.id
    })
    res.status(200)
    res.json(newEvent)
})

const updateEvent = asyncHandler( async(req, res) => {
    const { id } = req.params
    if(!id) {
        res.status(404)
        throw new Error('Invalid Informations')
    }

    const eventExist = await Event.findById(id)

    if(!eventExist) {
        res.status(404)
        throw new Error('Requested event not founded')
    }
    
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body)

    if(updatedEvent) {
        const event = await Event.findOne({id})
        console.log(event)
        res.status(200)
        res.json({
            date: event.date,
            events: event.event
        })
    }
})

const getAllEvents = asyncHandler( async(req, res) => {    
    const events = await Event.find()
        res.status(200)
        res.json({
            events
        })
})

const getSingleEvent = asyncHandler( async(req, res) => {    
    const event = await Event.findById(req.params.id)

    if(!event) {
        res.status(401)
        throw new Error('Event not found')
    }

    res.status(200)
    res.json(event)
})

const deleteEvent = asyncHandler( async(req, res) => {    
    const event = await Event.findById(req.params.id)

    if(!event) {
        res.status(401)
        throw new Error('Event not found')
    }

    const user = await User.findById(req.user.id)

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    await Event.findByIdAndDelete(req.params.id)

        res.status(200)
        res.json({
            message: "Event deleted successfully"
        })
})

module.exports = {
    createEvent,
    updateEvent,
    getAllEvents,
    deleteEvent,
    getSingleEvent,
    deleteEvent
}