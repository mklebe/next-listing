import React, {FunctionComponent} from 'react';
import styles from './FilterList.module.css';
import { GenderFilter } from './GenderFilter';

type Props = {

};

export const FilterList: FunctionComponent<Props> = () => (
    <div className={styles.list}>
        <GenderFilter></GenderFilter>
        <GenderFilter></GenderFilter>
        <GenderFilter></GenderFilter>
    </div>
)