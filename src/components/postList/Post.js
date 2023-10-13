
import './post.css';

export const Post = ({ datas }) => {

    return (
        <>
            <div className='postList'> <h3>Posts</h3>
                {datas.map(data => <div key={data.id} className='single'>{data.name}
                </div>)}
            </div>
        </>

    )
}
