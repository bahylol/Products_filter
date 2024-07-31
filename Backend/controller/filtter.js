const { productModel } = require("../model/products");

module.exports = function (app) {

    app.get('/products', async function (req, res) {
        const category = req.query.category;
        const minPrice = parseFloat(req.query.minPrice);
        const maxPrice = parseFloat(req.query.maxPrice);
        const brand = req.query.brand;

        // Construct the query object
        let query = {};
        if (category !== "") {
            query.category = category;
        }
        if (!isNaN(minPrice)) {
            query.price = query.price || {};
            query.price.$gte = minPrice;
        }
        if (!isNaN(maxPrice)) {
            query.price = query.price || {};
            query.price.$lte = maxPrice;
        }
        if (brand !== "") {
            query.brand = brand;
        }

        try {
            const products = await productModel.find(query);
            return res.status(200).json(products);
        } catch (err) {
            return res.status(500).send('Error filtering products');
        }
    });


}


