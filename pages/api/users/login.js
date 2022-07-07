import dbConnect from "../../../utilities/db";
import User from '../../../models/UsersSchema'
import md5 from "md5";

export default async function handler(req, res) {
    const { method } = req;
    dbConnect();

    if (method === 'GET') {
        res.status(500).send({ message: 'Forbidden', success: false });
    }

    if (method === 'POST') {
        try {
            let data = {}
            if (req.body.email && req.body.password) {
                data = {
                    email: req.body.email,
                    password: md5(req.body.password)
                }
            }
            const user = await User.findOne(data);
            if (user._id) {
                res.send({ success: true })
            } else {
                res.send({ success: false })
            }
        } catch (error) {
            res.status(500).send({ error: error, message: 'Server side error', success: false });
        }
    }
}