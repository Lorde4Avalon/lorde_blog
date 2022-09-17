import React from 'react'

type Props = {
    post: {
        [key: string]: any
    }
}

const PostCard = ({ post }: Props) => {
    return (
        <div>
            {post.title}
            {post.excerpt}
        </div>

    )
}

export default PostCard