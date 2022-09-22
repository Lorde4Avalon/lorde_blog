import React from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
  post: {
    [key: string]: any
  }
}

const PostDetail = ({ post }: Props) => {


  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <ReactMarkdown children={post.Content}></ReactMarkdown>
    </div>
  )
}

export default PostDetail