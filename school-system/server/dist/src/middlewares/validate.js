export const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse({
        body: req.body,
        params: req.params,
        query: req.query,
    });
    if (!result.success) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: result.error.flatten(),
        });
    }
    const data = result.data;
    req.body = data.body ?? req.body;
    req.params = data.params ?? req.params;
    req.query = data.query ?? req.query;
    return next();
};
//# sourceMappingURL=validate.js.map