import dbConnect from "../../utilities/db";
import Blog from '../../models/blogSchema'

export default async function handler(req, res){
    const { method } = req;
    dbConnect();

    if(method === 'GET'){
        try {
            const blogs = await Blog.find({});
            res.send({blogs, message: 'Successfully loaded products', success: true});
        } catch (error) {
            res.status(500).send({error: error, message: 'Server side error', success: false});
        }
    }

    if(method === 'POST'){
        try{
            const newBlog = await Blog.create(req.body);
            res.send({ newBlog, message:"Saved" })
        }catch(error){
            res.status(500).send('Server error');
        }
    }
    }
