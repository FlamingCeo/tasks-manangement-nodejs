class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(mesage)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode)=>{
    return new CustomAPIError(msg,statusCode)
}

module.exports = {createCustomError}