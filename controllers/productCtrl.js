const Products = require("../model/product")

const productCtrl = {
    create: async (req, res) => {
        const { image, name, type, price, description } = req.body
        try {
            const data = new Products({
                image: image,
                name: name,
                type: type,
                price: price,
                description: description
            })
            await data.save()
            res.status(200).json({
                message: "data saved successfully",
                data: data
            })
        } catch (err) {
            res.status(500).json({
                message: 'Product not created',
                error: err
            })
            console.log(err)
        }
    },
    getAll: async (req, res) => {
        try {
            const products = await Products.find()
            res.status(200).json({
                message: "data saved successfully",
                products: products
            })
        } catch (err) {
            res.status(500).json({
                message: "Couldn't get all products",
                error: err
            })
            console.log(err)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.body.id
            await Products.findOneAndDelete({ _id: id })
            res.status(200).json({
                message: "Product deleted successfully"
            })
        } catch (err) {
            res.status(500).json({
                message: 'Product not deleted',
                error: err
            })
            console.log(err)
        }
    }
}

module.exports = productCtrl