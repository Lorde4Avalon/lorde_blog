import React from 'react'

import { PersonalWidget, PostDetail } from '../../components'

const PostPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PersonalWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage