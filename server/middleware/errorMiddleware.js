const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)

}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode
    let message = err.message

    // check for mongoose bad objectid

    if(err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404
        message = 'Resource not found'
    }

    // check for mongoose duplicate key

    if(err.code === 11000) {
        statusCode = 400
        message = 'Duplicate field value entered'
    }

    // check for mongoose validation error

    if(err.name === 'ValidationError') {
        statusCode = 400
        message = Object.values(err.errors).map(val => val.message)
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })




}


export { notFound, errorHandler }