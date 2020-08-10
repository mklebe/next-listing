import React, {FunctionComponent} from 'react';
import styles from './ProductList.module.css';
import { Product } from './Product';
import {ProductItem} from './shared';
import { AsynchronousProduct } from './AsynchronousProduct';

type Props = {

};

export const ProductList: FunctionComponent<Props> = () => {
    const products: any[] = [
        {name: 'Ray-Ban Justin', price: '99.99 €'},
        {name: 'Ray-Ban Kevin', price: '199.99 €'},
        {name: 'Ray-Ban Jay', price: '49.99 €'},
        {name: 'Ray-Ban Nick', price: '39.99 €'},
        {name: 'Ray-Ban Alexander', price: '89.99 €'},
        {name: 'Ray-Ban Brian', price: '199.99 €'},
        {name: 'Ray-Ban Joey', price: '299.99 €'},
        {name: 'Ray-Ban Lance', price: '89.99 €'},
    ].map((i) => {
        return <Product product={i} />
    })

    const asyncProduct = <AsynchronousProduct />

    products.splice(4, 0, asyncProduct)

    return (
        <div className={styles.list}>
            {products}
        </div>
    )
}
