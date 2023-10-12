
import './post.css'
export const Post = ({ datas }) => {


    return (
        <>
            <h3>Posts</h3>
            <div className='postList'>
                {datas.map(data => <div key={data.id} className='single'>{data.name}
                </div>)}
            </div>
        </>

    )
}
