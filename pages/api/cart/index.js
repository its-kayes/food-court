import dbConnect from "../../../utilities/db";
import Cart from '../../../models/cartSehema'

export default async function handler(req, res){
    const { method } = req;
    dbConnect();

    if(method === 'GET'){
        try {
            const carts = await Cart.find({});
            res.send({carts, message: 'Successfully loaded products', success: true});
        } catch (error) {
            res.status(500).send({error: error, message: 'Server side error', success: false});
        }
    }

    if(method === 'POST'){
        try{
            const newCart = await Cart.create(req.body);
            res.send({ newCart, message:"Saved" })
        }catch(error){
            res.status(500).send('Server error');
        }
    }
    }
