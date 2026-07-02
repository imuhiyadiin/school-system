export const sendSuccess = (res, data, message = "Operation successful", statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};
//# sourceMappingURL=apiResponse.js.map