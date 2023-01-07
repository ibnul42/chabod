const registerUser = (req, res) => {
    res.json({ message: 'User created'})
}

const LoginUser = (req, res) => {
    res.json({ message: 'User login'})
}

const getMe = (req, res) => {
    res.json({ message: 'User display'})
}

module.exports = {
    registerUser,
    LoginUser,
    getMe
}