const asyncHandler = require('express-async-handler')

const getGoal = asyncHandler(async(req, res) => {
    res.status(200).send({ message: 'Get Goal'})
})

const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(404)
        throw new Error('Please provide a body')
    }
    res.status(200).send({ message: 'Set Goal'})
})

const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).send({ message: `Update Goal ${req.params.id}` })
})

const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).send({ message: `Delete Goal ${req.params.id}` })
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}