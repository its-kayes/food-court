import dbConnect from "../../utilities/db";
import Product from '../../models/productSchema';

export default async function handler(req, res){
    const { method } = req;
    dbConnect();

    // if(method === 'GET'){
    //     try {
    //         const products = await Product.find({});
    //         res.send({products, message: 'Successfully loaded products', success: true});
    //     } catch (error) {
    //         res.status(500).send({error: error, message: 'Server side error', success: false});
    //     }
    // }

    // if(method === 'POST'){
    //     try{
    //         const newProduct = await Product.create(req.body);
    //         res.send({ newProduct, message:"Saved" })
    //     }catch(error){
    //         res.status(500).send('Server eroro');
    //     }
    // }

    /* 
    
const index = async (req, res) => {
    try {
        let name = req.query.name;
        let filter = {};
        if (name) { filter = { name: new RegExp(name, 'i') }; }

        const products = await ProductModel.find(filter).populate({ path: 'categoryId' }).select({ __v: 0 });
        res.send({products, message: 'Successfully loaded products', success: true});
    } catch (error) {
        res.status(500).send({error: error, message: 'Server side error', success: false});
    }
}

const active = async (req, res) => {
    try {
        let filter = { status: 'active' };

        const products = await ProductModel.find(filter).select({ __v: 0 });
        res.send({products, message: 'Successfully loaded products', success: true});
    } catch (error) {
        res.status(500).send({error: error, message: 'Server side error', success: false});
    }
}

const single = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        console.log(productId);
        const product = await ProductModel.findOne({ _id: productId }).select({ __v: 0 });
        res.send({ product, message: 'Successfully loaded product', success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Server side error', success: false });
    }
}

const create = async (req, res) => {
    try {
        console.log(req.body);
        const productSlug = await ProductModel.findOne({ slug: req.body.slug });
        // console.log(productSlug);

        if(productSlug){
            res.send({ message: `The slug you entered already in use!`, success: false })
        }else{
            const newProduct = new ProductModel({
                name: req.body.name,
                slug: req.body.slug,
                categoryId: req.body.categoryId,
                price: parseFloat(req.body.price),
                quantity: parseFloat(req.body.quantity),
                sold: parseFloat(req.body.sold),
                description: req.body.description,
                featured: req.body.featured,
                status: req.body.status,
            });

            if (req.file) {
                newProduct.img = req.file.path;
            } else {
                newProduct.img = '';
            }
            console.log('new', newProduct);
            await newProduct.save();
            res.send({ newProduct, message: 'Product created Successfully!', success: true });
        }
   
       
      } catch (error) {
        res.status(500).send({ error: error, message: 'Failed to create Product', success: false });
      }
}

const update = async (req, res, next) => {
    try {
        const productId = req.params.productId;

        console.log(req.body);
  
        let updataData = {
            name: req.body.name,
            categoryId: req.body.categoryId,
            price: parseFloat(req.body.price),
            quantity: parseFloat(req.body.quantity),
            description: req.body.description,
            status: req.body.status,
        }

        if (req.file) {
            updataData = { ...updataData, img: req.file.path }
        } else {
            updataData = { ...updataData, img: req.body.img }
        }

        // console.log(updataData);

        const updateProduct = await ProductModel.findOneAndUpdate({ _id: productId }, {
            $set: updataData
        }, {
            new: true
        })

        console.log(updateProduct);
        res.send({ updateProduct, message: `Product updated successfully`, success: true });

    } catch (error) {
        res.status(500).send({ error: error, message: 'Failed to update product', success: false });
    }
}

const destroy = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const product = await ProductModel.findOne({ _id: productId });

        if (!product) {
            res.status(500).send({ message: "Check is product available!" })
        }

        await ProductModel.deleteOne({ _id: productId })
        res.send({ message: `Product deleted`, success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Failed to delete product', success: false });
    }
}

    */
}