const PRODUCTS = [
    { id: 1, name: 'Name A' },
    { id: 2, name: 'Name B' },
    { id: 3, name: 'Name C' },
    { id: 4, name: 'Name A' },
    { id: 5, name: 'Name A' },
    { id: 6, name: 'Name B' },
    { id: 7, name: 'Name B' },
    { id: 7, name: 'Name C' }
];

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name) {
        context.res = {
            status: 200,
            body: {
                products: PRODUCTS.filter(p => p.name === req.query.name),
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: { message: 'Please pass a name in the query string' }
        };
    }
};