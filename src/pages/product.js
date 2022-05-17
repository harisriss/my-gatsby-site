import * as React from 'react'
import {Link} from "gatsby";
import ProductComponent from "../Components/ProductComponent";
import BasketValueComponent from "../Components/BasketValueComponent";

const Product = () => {

    return (
        <main>
            <title>Product Page</title>
            <h1>Product Page</h1>
            <Link to="/">Home page</Link>
            <BasketValueComponent/>
            <ProductComponent name={'banane'} price={23.23}/>
        </main>
    )
}

export default Product