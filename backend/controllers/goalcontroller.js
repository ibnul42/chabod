const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

const getGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.find()
    res.status(200).send(goal)
})

const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(404)
        throw new Error('Please provide a body')
    }
    const newGoal = await Goal.create({
        text: req.body.text
    })
    res.status(200).send(newGoal)
})

const updateGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(404)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(goal._id, req.body, {
        new: true
    })

    res.status(200).send(updatedGoal)
})

const deleteGoal = asyncHandler(async(req, res) => {
    // if(!req.params.id) {
    //     res.status(404)
    //     throw new Error('Goal not found')
    // }
    // const goal = await Goal.findById(req.params.id)

    // if(req.params.id || !goal) {
    //     res.status(404)
    //     throw new Error('Goal not found')

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
    // console.log(deletedGoal)
    res.status(200).send({ message: `Delete Goal ${req.params.id}` })
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}