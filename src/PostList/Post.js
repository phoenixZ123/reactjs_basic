import React from 'react'
import './index.css';
export const Post = ({ datas, nextText }) => {
  console.log(datas)
  return (
    <>

      <div className='postList'>

        {datas.map(data => (<div className='single' key={data.id}>{data.title}</div>))}

        {/* destructuring data */}
        <h3> {nextText}</h3 >
      </div>
    </>

  )
}
