import dbConnect from "../../../utilities/db";
import User from '../../../models/UsersSchema'
import md5 from "md5";

export default async function handler(req, res) {
    const { method } = req;
    dbConnect();

    if (method === 'GET') {
        let query = {};
        if (req.query) {
            query = req.query
        }
        if (req.query.email && req.query.password) {
            query = {
                email: req.query.email,
                password: md5(req.query.password)
            }
        }
        try {
            const users = await User.find(query);
            res.send({ users, message: 'Successfully loaded products', success: true });
        } catch (error) {
            res.status(500).send({ error: error, message: 'Server side error', success: false });
        }
    }

    if (method === 'POST') {
        try {

            const newData = {
                name: req.body.name,
                email: req.body.email,
                password: md5(req.body.password),
                img: req.body.img
            }
            const newUser = await User.create(newData);
            res.send({ newUser, message: "User Created", success: true })
            //}
            //     res.status(500).send({ error: error, message: 'Image error', success: false });
            // })


        } catch (error) {
            res.status(500).send({ error: error, message: 'Server side error', success: false });
        }
    }
}