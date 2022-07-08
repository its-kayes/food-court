import dbConnect from "../../../utilities/db";
// import User from '../../../models/UsersSchema';
import User from "../../../models/usersSchema";

import md5 from "md5";

export default async function handler(req, res) {
    const { method } = req;
    dbConnect();

    if (method === 'GET') {
        let query = {};
        if (req.query) {
            query = req.query
        }
        try {
            const user = await User.find(query);
            res.send({ user, success: true });

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

        } catch (error) {
            res.status(500).send({ error: error, message: 'Server side error', success: false });
        }
    }
}