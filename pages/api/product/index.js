import dbConnect from "../../../utilities/db";
import Product from '../../../models/productSchema';

export default async function handler(req, res) {
    const { method } = req;
    dbConnect();

    if (method === 'GET') {
        try {
            const products = await Product.find({});
            res.send({ products, message: 'Successfully loaded products', success: true });
        } catch (error) {
            res.status(500).send({ error: error, message: 'Server side error', success: false });
        }
    }

    if (method === 'POST') {
        try {
            const newProduct = await Product.create(req.body);
            res.send({ newProduct, message: "Product created successfully", success: true })
        } catch (error) {
            res.status(500).send({ error: error, message: 'Server side error', success: false });
        }
    }
}