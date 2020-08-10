import React, {FunctionComponent} from 'react';
import styles from './Product.module.css';
import {ProductItem} from './shared';

type Props = {
    product: ProductItem,
};

export const Product: FunctionComponent<Props> = (product) => (
    <div className={styles.item}>
        <img className={styles.image} src="http://d26hhearhq0yio.cloudfront.net/content/misterspex/produkte/grafiken/11-110120-0130-01_a3.jpg" alt=""/>
        <p>
            {product.product.name} - {product.product.price}
        </p>
    </div>
)