const successResponse = (res,data,message = "success",statusCode = 200)=>{
    res.status(statusCode).json({
        success:true,
        message,
        data
    })
}

const errorRespose =(res,error,statusCode = 500)=>{
    res.status(statusCode).json({
        success:false,
        message: error.message || "internal Server Error"
    })
}

module.exports ={
    successResponse,
    errorRespose
}
