
import './post.css';
import styles from '../postList/single.module.css';
export const Post = ({ datas }) => {

    return (
        <><div className='post'>
            <div className='postList'> <h3>Posts</h3>
                {datas.map(data => <div key={data.id} className={`single ${styles.card}`}>{data.name}
                </div>)}
            </div>
        </div>

        </>

    )
}
