import type { NextPage, GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import React from 'react'
import type { post } from '../../types'

import { PersonalWidget, PostDetail, CommentsForm, Comments } from '../../components'
import { getPosts, getPostDetail, getPostComments, getAuthor } from '../../services'
import { useRouter } from 'next/router'

const PostPage: NextPage = ({ post, comments, author }: InferGetStaticPropsType<GetStaticProps>) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div className='flex justify-center items-center text-xl font-semibold text-white'>Loading......</div>
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-12">
        <div className="lg:col-start-2 lg:col-span-10 col-span-1">
          <PostDetail post={post.data[0].attributes} />
          <CommentsForm post={post.data[0]} />
          {comments.length > 0 && <Comments comments={comments} />}
        </div>
        {/* <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PersonalWidget author={author}/>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const post = await getPostDetail(params.slug)
    const comments = await getPostComments(params.slug)
    const author = await getAuthor()
    return {
      props: {
        post: post,
        comments: comments,
        author
      },
      revalidate: 60
    }
  }

  return {
    props: { error: true }
  }
}

//pre-render pages at build time 
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = (await getPosts()) || []
  const postsData: post[] = posts.data

  return {
    paths: postsData.map(({ attributes: { slug } }) => ({ params: { slug } })),
    fallback: true
  }
}