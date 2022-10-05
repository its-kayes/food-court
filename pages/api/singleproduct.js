const { ObjectId } = require('mongodb');
import dbConnect from "../../utilities/db";
import Product from "../../models/productSchema";
// import Cart from "../../../models/cartSehema";




export default async function handler(req, res) {
    const { method } = req;
    dbConnect();

    // if (method === 'GET') {
    //     try {
    //         const products = await Product.findOne({});
    //         res.send({ products, message: 'Successfully loaded products', success: true });
    //     } catch (error) {
    //         res.status(500).send({ error: error, message: 'Server side error', success: false });
    //     }
    // }



    if (method === 'GET') {
        // let query = {};
        // if (req.query.id) {
        //     query = req.query.id
        //     // console.log(query);
        // }
        let id = req.query.id
        let query = { _id: ObjectId (id) };

        console.log(req.query.id);
        try {
            // const products = await Cart.findOne(req.query.id);
            const products = await Product.findOne(query);
            res.send({ products, message: 'Successfully loaded products', success: true });

        } catch (error) {
            res.status(500).send({ error: error, message: 'Server side error', success: false });
        }
    }

    // if (method === 'POST') {
    //     try {
    //         const newProduct = await Product.create(req.body);
    //         res.send({ newProduct, message: "Product created successfully", success: true })
    //     } catch (error) {
    //         res.status(500).send({ error: error, message: 'Server side error', success: false });
    //     }
    // }
}