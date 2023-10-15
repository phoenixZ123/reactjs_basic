
import './post.css';
import styles from '../postList/single.module.css';
import { useState } from 'react';

export const Post = ({ datas }) => {

    return (
        <><div className='post'>
            <div className='postList'>
                {datas.map(data => <div key={data.id} className={`single ${styles.card}`}>
                    <h4>{data.name}</h4> <h4>{data.status}</h4>
                </div>)}
            </div>
        </div>

        </>

    )
}
