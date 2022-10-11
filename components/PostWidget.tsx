import moment from 'moment'
import React from 'react'

interface Props {
  posts: {
    [key: string]: any
  } 
}

const PostWidget = ({posts}: Props) => {
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className='font-semibold text-lg border-b mb-3'>Recent Posts</h2>
      {posts.map((post:any) => {
        return <div className="bg-zinc-700 my-3 rounded-2xl cursor-pointer ease-out hover:bg-blue-600 transition duration-700 hover:-translate-y-1 flex flex-col justify-center" key={post.id}>
          <h3 className='text-center text-white'>{post.attributes.title}</h3>
          <span className='text-center text-base text-white'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      })}
    </div>
  )
}

export default PostWidget

