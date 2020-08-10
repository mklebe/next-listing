import React, {FunctionComponent} from 'react';
import styles from './GenderFilter.module.css';

type Props = {

};

export const GenderFilter: FunctionComponent<Props> = () => (
    <div className={styles.root}>
        <h2 className={styles.headline}>Gender</h2>
        <label>
            <input type="checkbox" name="male"/>Männlich
        </label>
        <label>
            <input type="checkbox" name="female"/>Weiblich
        </label>
    </div>
);