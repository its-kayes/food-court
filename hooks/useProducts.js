import { useQuery } from "react-query";
import Loader from "../components/Loader/Loader";

const useProducts = () => {

    let { data, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:3000/api/product').then(res => res.json()))

    if (isLoading) {
        return <Loader> </Loader>
    }
    let products = data.products;

    console.log(products);


    return products;
};

export default useProducts;