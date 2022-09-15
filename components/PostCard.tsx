import React from 'react'

type Props = {
    post: {
        title: String;
        excerpt: String;
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