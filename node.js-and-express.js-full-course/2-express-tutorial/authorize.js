const authorize = (req, res, next) => {
    const { user } = req.query

    if (user === 'seup') {
        req.user = { name: 'seup', id: 3 }
        next()
    } else {
        res.status(401).send('Unanthorized')
    }
}

module.exports = authorize
