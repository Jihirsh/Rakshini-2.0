const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err));
    }
}

export { asyncHandler };



// Higher Order Function
// const asyncHandler = () => {}
// const asyncHandler = (func) => { () => {} }
// const asyncHandler = (func) => async () => {}

/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message || "Internal Server Error",
        })
    }
} 
*/


//check mongoose aggregrate pipeline
//for password use bcrypt or bycryptjs and also use jsonwebtoken
//remember jwt is a bearer token
//multer, cloudinary for files - using multer we will take file and temporarily store it on our server then we will take the file from local storage and store it on cloudinary