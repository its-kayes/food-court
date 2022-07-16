import dbConnect from "../../../utilities/db";
import Order from "../../../models/orderSchema";

export default async function handler(req, res) {
    const { method } = req;
    dbConnect();

    if( method === 'GET') {
        let query = req.query;
        console.log(query);
        try {
            const Orders = await Order.find(query);
            res.send({Orders, message: " Order Load", success: true});
        } catch (error) {
            res.status(500).send({error: error, message: "Order Load Error", success: false});
        }
    }

    if(method === 'POST') {
        try {
            const newOrder = await Order.create(req.body);
            res.send({newOrder, message: " New Order Added ", success: true});
        } catch (error) {
            res.status(500).send({error: error, message: " Failed to add order on DB ", success: false});
        }
    }
}