import React from 'react'

interface Props {
    post: {
        [key: string]: any
    }
}

const PostCard = ({ post }: Props) => {
    return (
        <div>
            {post.title}
            {post.Excerpt}
        </div>

    )
}

export default PostCard