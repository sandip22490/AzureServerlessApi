module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body && req.body.name) {
        context.res = {
            status: 200,
            body: {
                product: {
                    id: 1,
                    name: req.body.name,
                }
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: {message: 'Please pass a name in the request body'}
        };
    }
};