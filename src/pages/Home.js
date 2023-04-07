import { useContext } from "react";
import ProductContext from "../store/product-context"

const Home = () => {

    const productsCtx = useContext(ProductContext);
    const products = productsCtx?.products
    const isLoading = productsCtx?.isLoading;

    return(
        <div>
            
        </div>
    )
}

export default Home;