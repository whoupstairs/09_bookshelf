function requestErrorHandler(controller) {
    return async function(req, res, next) {
        try {
            return await controller(req, res);
        } catch(err) {
            console.log("err:" + err);
            next(err);
        }
    }
}

export { requestErrorHandler }