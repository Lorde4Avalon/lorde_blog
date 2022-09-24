import React from 'react'
import type { comment } from '../types'

import moment from 'moment'

interface Props {
  comments: comment[]
}

const Comments = ({ comments }: Props) => {

  return (
    <div className='bg-white shadow-lg rounded-lg p-8'>
      <h3 className='text-xl font-semibold pb-3 border-b'>Comments</h3>
      {comments.map((comment) => {
        return <div className='border-b border-gray-100 px-2 my-2'>
          <span className='px-1 font-semibold'>{comment.attributes.name}</span>
          <span className='px-1 text-sm'>At {moment(comment.attributes.createdAt).format('MMM DD, YYYY HH:mm')}</span>
          <div className="px-1 m-2 my-3">
            {comment.attributes.comment}
          </div>
        </div>
      })}
    </div>
  )
}

export default Comments